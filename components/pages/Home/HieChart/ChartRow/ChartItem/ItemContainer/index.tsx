"use client";

import React from "react";
import ReactProps from "@/interfaces/ReactProps";
import { useTheme } from "@mui/material";
import { flex } from "@/utils/get/getSxMUI";
import { Paper } from "@mui/material";

const ItemContainer: React.FC<
  {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    isSelected: boolean;
  } & ReactProps
> = ({ children, id, isSelected, onClick }) => {
  const theme = useTheme();

  return (
    <div onClick={onClick} style={{ padding: "1rem 0rem" }} id={id}>
      <Paper
        sx={{
          ...flex("col", "flex-start", "center"),
          zIndex: isSelected ? 1001 : 0,
          boxShadow: 2,
          borderRadius: 2,
          position: "relative",
          p: 2.5,
          overflow: "hidden",
          backgroundColor: "white",
          cursor: isSelected ? "auto" : "pointer",
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
