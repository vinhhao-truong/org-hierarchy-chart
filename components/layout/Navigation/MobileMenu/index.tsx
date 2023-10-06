"use client";

import React from "react";
import { Box, useTheme } from "@mui/material";

const MobileMenu = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      }}
    >
      {/* <Grid container spacing={2} sx={{}}></Grid> */}
      Mobile
    </Box>
  );
};

export default MobileMenu;
