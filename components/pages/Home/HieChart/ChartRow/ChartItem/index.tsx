"use client";

import OrgStructure from "@/interfaces/OrgStructure";
import ReactProps from "@/interfaces/ReactProps";
import getLvlColor from "@/utils/get/getLvlColor";
import { flex, rotateAnimation, zoomAnimation } from "@/utils/get/getSxMUI";
import {
  Avatar,
  Box,
  Collapse,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/AddRounded";

const ItemContainer: React.FC<ReactProps> = ({ children, id }) => {
  const theme = useTheme();
  return (
    <div style={{ padding: "1rem 0rem" }} id={id}>
      <Box
        sx={{
          ...flex("col", "flex-start", "center"),
          boxShadow: 2,
          borderRadius: 2,
          position: "relative",
          p: 3,
          overflow: "hidden",
          backgroundColor: "white",
          [theme.breakpoints.up("lg")]: {
            width: "220px",
          },
        }}
      >
        {children}
      </Box>
    </div>
  );
};

interface ChartItemProps extends ReactProps {
  employee: OrgStructure;
}
const ChartItem: React.FC<ChartItemProps> = ({ employee }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <ItemContainer id={`employee-${employee.id}`}>
      {/* AVATAR */}
      <Avatar
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
      </Collapse>
    </ItemContainer>
  );
};

export default ChartItem;
