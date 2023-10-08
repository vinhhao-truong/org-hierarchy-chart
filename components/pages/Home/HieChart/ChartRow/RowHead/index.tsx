"use client";

import ReactProps from "@/interfaces/ReactProps";
import getPositionLvlColor from "@/utils/get/getPositionLvlColor";
import { Box, Typography } from "@mui/material";
import React from "react";
import { flex } from "@/utils/get/getSxMUI";
import getPositionLvlTitle from "@/utils/get/getPostionLvlTitle";
import PositionIcon from "@/components/common/PositionIcon";

const RowHead: React.FC<{ rowLvl: number } & ReactProps> = ({ rowLvl }) => {
  return (
    <Box
      sx={{
        ...flex(),
        gap: 1,
        backgroundColor: getPositionLvlColor(rowLvl),
        color: "white",
        py: 0.5,
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
      }}
    >
      <PositionIcon level={rowLvl} />
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {getPositionLvlTitle(rowLvl)}
      </Typography>
    </Box>
  );
};

export default RowHead;
