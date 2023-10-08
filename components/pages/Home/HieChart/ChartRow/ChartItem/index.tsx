"use client";

import Employee from "@/interfaces/OrgStructure";
import ReactProps from "@/interfaces/ReactProps";
import getLvlColor from "@/utils/get/getLvlColor";
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

interface ChartItemProps extends ReactProps {
  employee: Employee;
}
const ChartItem: React.FC<ChartItemProps> = ({ employee }) => {
  const { data: employeeList } = useGetOrgStructureQuery();

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
            hoverColor: getLvlColor(thisEmp.level),
          }))
      : [];
  };

  const dispatch = useDispatch();

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
      {/* AVATAR */}
      <MuiAvatar
        sx={{ width: 56, height: 56, mb: 1 }}
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
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {employee.fullName}
      </Typography>

      <Collapse in={isSelected}>
        <Typography
          color="GrayText"
          variant="subtitle1"
          fontStyle="italic"
          fontSize={14}
          mb={2}
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

      <div
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
      </div>
    </ItemContainer>
  );
};

export default ChartItem;
