"use client";

import ReactProps from "@/interfaces/ReactProps";
import getPositionLvlColor from "@/utils/get/getPositionLvlColor";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { flex } from "@/utils/get/getSxMUI";
import getPositionLvlTitle from "@/utils/get/getPostionLvlTitle";
import PositionIcon from "@/components/common/PositionIcon";

const RowHead: React.FC<{ rowLvl: number } & ReactProps> = ({ rowLvl, sx }) => {
  const thisXs = sx ? sx : {};

  return (
    <Box
      sx={{
        ...flex(),
        width: "100%",
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
