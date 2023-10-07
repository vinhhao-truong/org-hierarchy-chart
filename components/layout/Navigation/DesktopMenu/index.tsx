"use client";

import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import navList from "@/json/nav_list.json";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import { flex } from "@/utils/get/getSxMUI";
import { usePathname } from "next/navigation";

const DesktopMenu = () => {
  const theme = useTheme();
  const currentPathname = usePathname();

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
          const isActive = pathname === currentPathname;

          return (
            <Grid
              sx={{
                ...flex(),
              }}
              key={`desktop-menu-${idx}`}
              item
            >
              <MuiLink
                sx={{
                  textDecoration: "none",
                  fontWeight: isActive ? 600 : 200,
                  "&:hover": {
                    textDecoration: !isActive ? "underline overline" : "none",
                  },
                }}
                component={Link}
                href={pathname}
              >
                {title}
              </MuiLink>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DesktopMenu;
