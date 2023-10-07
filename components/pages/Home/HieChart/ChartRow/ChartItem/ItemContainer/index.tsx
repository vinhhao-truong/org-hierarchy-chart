"use client";

import React from "react";
import ReactProps from "@/interfaces/ReactProps";
import { useTheme } from "@mui/material";
import { flex } from "@/utils/get/getSxMUI";
import { Paper } from "@mui/material";

const ItemContainer: React.FC<{ isHighlighted: boolean } & ReactProps> = ({
  children,
  id,
  isHighlighted,
}) => {
  const theme = useTheme();

  return (
    <div style={{ padding: "1rem 0rem" }} id={id}>
      <Paper
        sx={{
          ...flex("col", "flex-start", "center"),
          zIndex: isHighlighted ? 1001 : 0,
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
      </Paper>
    </div>
  );
};

export default ItemContainer;
