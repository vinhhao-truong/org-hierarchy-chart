"use client";

import ReactProps from "@/interfaces/ReactProps";
import getPositionLvlColor from "@/utils/get/getPositionLvlColor";
import { Box, Typography } from "@mui/material";
import React from "react";

const RowHead: React.FC<{ title: string; rowLvl: number } & ReactProps> = ({
  title,
  rowLvl,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: getPositionLvlColor(rowLvl),
        color: "white",
        py: 0.5,
        textAlign: "center",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default RowHead;
