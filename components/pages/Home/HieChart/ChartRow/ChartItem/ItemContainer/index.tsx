"use client";

import React from "react";
import ReactProps from "@/interfaces/ReactProps";
import { SxProps, useTheme } from "@mui/material";
import { flex } from "@/utils/get/getSxMUI";
import { Paper } from "@mui/material";

const ItemContainer: React.FC<
  {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    isSelected: boolean;
    isHighlighted?: boolean;
  } & ReactProps
> = ({ children, id, isSelected, onClick, isHighlighted }) => {
  const theme = useTheme();

  const selectedAnimation: SxProps | false = isSelected && {
    animation: "zoomInOut 0.3s",
    animationDelay: "0.2s",
    transition: "ease-in",
    "@keyframes zoomInOut": {
      "0%": {
        transform: "scale(1)",
      },
      "50%": {
        transform: "scale(1.05)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  };

  return (
    <div onClick={onClick} style={{ padding: "1rem 0rem" }} id={id}>
      <Paper
        sx={{
          ...flex("col", "flex-start", "center"),
          ...selectedAnimation,
          zIndex: isSelected ? 1001 : 0,
          boxShadow: 2,
          borderRadius: 2,
          border: 1,
          borderColor: isHighlighted && !isSelected ? "#000000" : "transparent",
          position: "relative",
          p: 2.5,
          overflow: "hidden",
          backgroundColor: "white",
          cursor: isSelected ? "auto" : "pointer",
          [theme.breakpoints.up("lg")]: {
            width: "220px",
          },
          "&:hover": {
            boxShadow: 4,
          },
        }}
      >
        {children}
      </Paper>
    </div>
  );
};

export default ItemContainer;
