"use client";

import Employee from "@/interfaces/OrgStructure";
import ReactProps from "@/interfaces/ReactProps";
import getLvlColor from "@/utils/get/getLvlColor";
import { flex, rotateAnimation, zoomAnimation } from "@/utils/get/getSxMUI";
import {
  Box,
  Collapse,
  Typography,
  Avatar as MuiAvatar,
  Zoom,
  Fade,
} from "@mui/material";
import React, { useState } from "react";
import CollapseIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandIcon from "@mui/icons-material/ExpandMoreRounded";

import { useDispatch, useSelector } from "react-redux";
import { selectEmployee, resetApp, selectApp } from "@/redux/services/appSlice";
import toHyphenedStr from "@/utils/format/toHyphenedStr";
import ItemContainer from "./ItemContainer";
import { useGetOrgStructureQuery } from "@/redux/services/api";
import Avatar from "@/interfaces/Avatar";
import LabelAndAvatars from "./LabelAndAvatars";

interface ChartItemProps extends ReactProps {
  employee: Employee;
}
const ChartItem: React.FC<ChartItemProps> = ({ employee }) => {
  const { selectedEmployee } = useSelector(selectApp);
  const isSelected = selectedEmployee === employee.fullName;

  const { data: employeeList } = useGetOrgStructureQuery();
  const subAvatarList: Avatar[] = employeeList
    ? employeeList
        .filter((thisEmp) => employee.subordinates.includes(thisEmp.fullName))
        .map((thisEmp) => ({
          name: thisEmp.fullName,
          url: thisEmp.avatar,
          onClickEvent: () => dispatch(selectEmployee(thisEmp.fullName)),
        }))
    : [];
  const supAvatarList: Avatar[] = employeeList
    ? employeeList
        .filter((thisEmp) => employee.supervisors.includes(thisEmp.fullName))
        .map((thisEmp) => ({
          name: thisEmp.fullName,
          url: thisEmp.avatar,
          onClickEvent: () => dispatch(selectEmployee(thisEmp.fullName)),
        }))
    : [];

  const thisSupList = employeeList?.filter((thisEmp) =>
    employee.supervisors.includes(thisEmp.fullName)
  );

  const dispatch = useDispatch();

  return (
    <ItemContainer
      isSelected={isSelected}
      id={toHyphenedStr(employee.fullName)}
      onClick={() => {
        if (!isSelected) {
          dispatch(selectEmployee(employee.fullName));
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
          whiteSpace: "nowrap",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {employee.fullName}
      </Typography>

      <Collapse in={selectedEmployee === employee.fullName}>
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
          <LabelAndAvatars label="Supervisors" avatarList={supAvatarList} />
          <LabelAndAvatars label="Subordinates" avatarList={subAvatarList} />
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
          if (isSelected) {
            dispatch(resetApp());
          }
        }}
      >
        {isSelected ? (
          <>
            <Typography fontSize={14}>Collapse</Typography>
            <CollapseIcon sx={{ fontSize: 18 }} />
          </>
        ) : (
          <>
            <Typography fontSize={14}>Expand</Typography>
            <ExpandIcon sx={{ fontSize: 18 }} />
          </>
        )}
      </div>
    </ItemContainer>
  );
};

export default ChartItem;
