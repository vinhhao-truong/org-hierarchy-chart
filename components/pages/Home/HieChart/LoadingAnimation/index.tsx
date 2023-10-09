"use client";

import React from "react";
import Image from "next/image";
import { flex } from "@/utils/get/getSxMUI";
import Box from "@mui/material/Box";

const LoadingAnimation = () => {
  return (
    <Box
      sx={{
        ...flex(),
        position: "relative",
      }}
    >
      <Image
        alt="loading-animation"
        src="/assets/img/walking-businessman.gif"
        width={240}
        height={180}
      />
    </Box>
  );
};

export default LoadingAnimation;
