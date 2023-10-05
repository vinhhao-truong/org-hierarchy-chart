"use client";

import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import navList from "@/json/nav_list.json";
import Link from "next/link";

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
      <Grid container spacing={3}>
        {navList.map(({ title, pathname }, idx) => {
          return (
            <Grid sx={{}} key={`desktop-menu-${idx}`} item>
              <Link href={pathname}>
                <Typography>{title}</Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DesktopMenu;
