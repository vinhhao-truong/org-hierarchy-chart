"use client";

import React from "react";
import { Box, Grid, useTheme } from "@mui/material";

const DesktopMenu = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};

export default DesktopMenu;
