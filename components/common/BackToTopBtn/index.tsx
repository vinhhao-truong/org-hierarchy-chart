"use client";

import UpIcon from "@mui/icons-material/ArrowDropUpRounded";
import Box from "@mui/material/Box";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const BackToTopBtn = () => {
  const router = useRouter();
  const pathname = usePathname();

  return <UpIcon />;
};

export default BackToTopBtn;
