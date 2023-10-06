"use client";

import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import navList from "@/json/nav_list.json";
import Link from "next/link";
import { flex } from "@/utils/get/getSxMUI";

const DesktopMenu = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
        height: "100%",
      }}
    >
      <Grid sx={{ height: "100%" }} container spacing={4}>
        {navList.map(({ title, pathname }, idx) => {
          return (
            <Grid
              sx={{
                ...flex(),
              }}
              key={`desktop-menu-${idx}`}
              item
            >
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
