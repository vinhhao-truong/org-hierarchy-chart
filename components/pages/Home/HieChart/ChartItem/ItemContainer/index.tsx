"use client";

import React from "react";
import ReactProps from "@/interfaces/ReactProps";
import { flex } from "@/utils/get/getSxMUI";
import Paper from "@mui/material/Paper";
import useTheme from "@mui/material/styles/useTheme";
import { SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";

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
    <Box
      sx={{
        [theme.breakpoints.down("xl")]: {
          py: 1,
        },
        [theme.breakpoints.up("lg")]: {
          mx: 1,
        },
        position: "relative",
        my: 1,
        height: "100%",
      }}
      id={id}
    >
      <Paper
        onClick={onClick}
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
          maxWidth: "100px",
          [theme.breakpoints.up("sm")]: {
            maxWidth: "160px",
          },
          [theme.breakpoints.up("lg")]: {
            maxWidth: "220px",
          },
          "&:hover": {
            boxShadow: 4,
          },
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default ItemContainer;
