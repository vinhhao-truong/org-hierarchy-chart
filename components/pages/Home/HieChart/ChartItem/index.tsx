"use client";

import Employee from "@/interfaces/Employee";
import ReactProps from "@/interfaces/ReactProps";
import getPositionLvlColor from "@/utils/get/getPositionLvlColor";
import { flex } from "@/utils/get/getSxMUI";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import MuiAvatar from "@mui/material/Avatar";
import React from "react";
import CollapseIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandIcon from "@mui/icons-material/ExpandMoreRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEmployee,
  unselectEmployee,
  selectApp,
} from "@/redux/services/appSlice";
import ItemContainer from "./ItemContainer";
import { useGetOrgStructureQuery } from "@/redux/services/api";
import Avatar from "@/interfaces/Avatar";
import LabelAndAvatars from "./LabelAndAvatars";
import useKeyPress from "@/hooks/useKeyPress";
import PositionIcon from "@/components/common/PositionIcon";
import { useTheme } from "@mui/material";

interface ChartItemProps extends ReactProps {
  employee: Employee;
}
const ChartItem: React.FC<ChartItemProps> = ({ employee }) => {
  const theme = useTheme();

  const { data: employeeList } = useGetOrgStructureQuery();

  const dispatch = useDispatch();

  //Indicate either the item is selected or highlighted
  const { selectedEmployeeId, highlightedEmployeeIds } = useSelector(selectApp);
  const isSelected = selectedEmployeeId === employee.id;
  const isHighlighted = highlightedEmployeeIds.includes(employee.id);

  const getAvatarListByLevel = (
    key: "subordinates" | "supervisors"
  ): Avatar[] => {
    return employeeList
      ? employeeList
          .filter((thisEmp) => employee[key]?.includes(thisEmp.fullName))
          .map((thisEmp) => ({
            name: thisEmp.fullName,
            url: thisEmp.avatar,
            onClickEvent: () => dispatch(selectEmployee(thisEmp.id)),
            hoverColor: getPositionLvlColor(thisEmp.level),
          }))
      : [];
  };

  useKeyPress("Escape", () => {
    dispatch(unselectEmployee());
  });

  return (
    <ItemContainer
      isSelected={isSelected}
      isHighlighted={isHighlighted}
      id={`employee-${employee.id}`}
      onClick={() => {
        if (!isSelected) {
          dispatch(selectEmployee(employee.id));
        }
      }}
    >
      {/* --BG ICON-- */}
      <PositionIcon
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "128px",
          opacity: 0.12,
          color: getPositionLvlColor(employee.level),
        }}
        level={employee.level}
      />
      {/* --AVATAR-- */}
      <MuiAvatar
        sx={{ width: 56, height: 56, mb: 1 }}
        src={employee.avatar}
        alt={`${employee.fullName}'s avatar`}
      />
      {/* --FLAG-- */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          p: 0.2,
          px: 0.5,
          backgroundColor: getPositionLvlColor(employee.level),
        }}
      >
        <Typography
          component="h2"
          sx={{ fontSize: "13px", color: "white", fontWeight: 500 }}
        >
          {employee.position}
        </Typography>
      </Box>
      {/* --FULL NAME-- */}
      <Typography
        variant="h6"
        component="h2"
        sx={{
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {employee.fullName}
      </Typography>
      {/* --COLLAPSE/EXPAND PART-- */}
      <Collapse in={isSelected}>
        <Typography
          color="GrayText"
          variant="subtitle1"
          fontStyle="italic"
          fontSize={14}
          mb={2}
          sx={{
            [theme.breakpoints.down("sm")]: {
              fontSize: "14px",
            },
          }}
        >
          &ldquo;{employee.introduction}&rdquo;
        </Typography>
        <Box sx={{ ...flex("col", "flex-start", "flex-start"), gap: 1 }}>
          <LabelAndAvatars
            label="Supervisors"
            avatarList={getAvatarListByLevel("supervisors")}
          />
          <LabelAndAvatars
            label="Subordinates"
            avatarList={getAvatarListByLevel("subordinates")}
          />
        </Box>
      </Collapse>
      {/* --COLLAPSE/EXPAND BUTTON-- */}
      <Box
        style={{
          alignSelf: "flex-end",
          display: "flex",
          alignItems: "center",
          marginTop: "0.5rem",
          cursor: "pointer",
          gap: "0.2rem",
        }}
        onClick={() => {
          dispatch(unselectEmployee());
        }}
      >
        <Typography fontSize={14}>
          {isSelected ? "Collapse" : "Expand"}
        </Typography>
        {isSelected ? (
          <CollapseIcon sx={{ fontSize: 18 }} />
        ) : (
          <ExpandIcon sx={{ fontSize: 18 }} />
        )}
      </Box>
    </ItemContainer>
  );
};

export default ChartItem;
