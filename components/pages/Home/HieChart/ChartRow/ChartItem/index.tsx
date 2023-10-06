"use client";

import OrgStructure from "@/interfaces/OrgStructure";
import ReactProps from "@/interfaces/ReactProps";
import getLvlColor from "@/utils/get/getLvlColor";
import { flex } from "@/utils/get/getSxMUI";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { green, red, yellow } from "@mui/material/colors";
import Image from "next/image";
import React from "react";

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
  member: OrgStructure;
}
const ChartItem: React.FC<ChartItemProps> = ({ member }) => {
  return (
    <ItemContainer id={`member-${member.id}`}>
      <Avatar
        sx={{ width: 48, height: 48, mb: 1 }}
        src={member.avatar}
        alt={`${member.fullName}'s avatar`}
      />
      {/* FLAG */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          p: 0.2,
          px: 0.5,
          backgroundColor: getLvlColor(member.level),
        }}
      >
        <Typography
          component="h2"
          sx={{ fontSize: "13px", color: "white", fontWeight: 500 }}
        >
          {member.position}
        </Typography>
      </Box>
      <Typography
        variant="h6"
        component="h2"
        sx={{ whiteSpace: "nowrap", fontWeight: 500 }}
      >
        {member.fullName}
      </Typography>
    </ItemContainer>
  );
};

export default ChartItem;
