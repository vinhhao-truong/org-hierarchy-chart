"use client";

import Employee from "@/interfaces/OrgStructure";
import ReactProps from "@/interfaces/ReactProps";
import getLvlColor from "@/utils/get/getLvlColor";
import { flex, rotateAnimation, zoomAnimation } from "@/utils/get/getSxMUI";
import {
  Box,
  Collapse,
  Link,
  Paper,
  Typography,
  useTheme,
  Avatar as MuiAvatar,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/AddRounded";
import { useParams, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { highlightEmployee, selectApp } from "@/redux/services/appSlice";
import toHyphenedStr from "@/utils/format/toHyphenedStr";
import ItemContainer from "./ItemContainer";
import { useGetOrgStructureQuery } from "@/redux/services/api";
import AvatarGroup from "@/components/common/AvatarGroup";
import Avatar from "@/interfaces/Avatar";

interface ChartItemProps extends ReactProps {
  employee: Employee;
}
const ChartItem: React.FC<ChartItemProps> = ({ employee }) => {
  const { highlightedEmployee } = useSelector(selectApp);
  const isHighlighted = highlightedEmployee === employee.fullName;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { data: employeeList } = useGetOrgStructureQuery();
  const subAvatarList: Avatar[] = employeeList
    ? employeeList
        .filter((thisEmp) => employee.subordinates.includes(thisEmp.fullName))
        .map((thisEmp) => ({
          name: thisEmp.fullName,
          url: thisEmp.avatar,
          onClickEvent: () => dispatch(highlightEmployee(thisEmp.fullName)),
        }))
    : [];

  const thisSupList = employeeList?.filter((thisEmp) =>
    employee.supervisors.includes(thisEmp.fullName)
  );

  const dispatch = useDispatch();

  return (
    <ItemContainer
      isHighlighted={isHighlighted}
      id={toHyphenedStr(employee.fullName)}
    >
      {/* AVATAR */}
      <MuiAvatar
        sx={{ width: 48, height: 48, mb: 1 }}
        src={employee.avatar}
        alt={`${employee.fullName}'s avatar`}
      />
      {/* FLAG */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          p: 0.2,
          px: 0.5,
          backgroundColor: getLvlColor(employee.level),
        }}
      >
        <Typography
          component="h2"
          sx={{ fontSize: "13px", color: "white", fontWeight: 500 }}
        >
          {employee.position}
        </Typography>
      </Box>
      {/* NAME */}
      <Typography
        variant="h6"
        component="h2"
        sx={{
          whiteSpace: "nowrap",
          fontWeight: 500,
          textAlign: "center",
          mb: 2,
        }}
      >
        {employee.fullName}
      </Typography>
      <Box sx={{ ...flex() }}>
        <div
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        >
          <AddIcon fontSize="medium" />
        </div>
      </Box>
      <Collapse in={isExpanded}>
        <Typography variant="subtitle1">
          &ldquo;{employee.introduction}&rdquo;
        </Typography>
        <Box
          sx={{
            ...flex("row", "flex-start"),
            gap: 2,
          }}
        >
          <Typography>Subordinates: </Typography>
          <AvatarGroup avatarList={subAvatarList} />
        </Box>
      </Collapse>
    </ItemContainer>
  );
};

export default ChartItem;
