"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "600px",
        overflow: "hidden",
        backgroundImage:
          "url('https://images.pexels.com/photos/3302183/pexels-photo-3302183.jpeg?auto=compress&cs=tinysrgb&w=4592&h=3056&dpr=1')",
      }}
    >
      {/* HERO MASK */}
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 7%, rgba(255,255,255,1) 87%)",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default HeroSection;
