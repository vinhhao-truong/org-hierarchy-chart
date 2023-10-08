"use client";

import { flex } from "@/utils/get/getSxMUI";
import Box from "@mui/material/Box";

import Image, { ImageLoader } from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        overflow: "hidden",
        position: "relative",
        ...flex(),
      }}
    >
      {/* BG IMG */}
      <Image
        src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=6144&h=4069&dpr=1"
        blurDataURL="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1" //loading img
        placeholder="blur"
        alt="hero-bg"
        fill
        style={{ objectFit: "cover" }}
        loading="eager"
        priority
      />
      {/* HERO MASK */}
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 12%, rgba(255,255,255,0) 34%, rgba(255,255,255,1) 87%)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
        }}
      />
      {/* SEARCH BAR */}
      <Box sx={{}}>
        <SearchBar />
      </Box>
    </Box>
  );
};

export default HeroSection;
