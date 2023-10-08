"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import MenuIcon from "@mui/icons-material/MenuRounded";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import NextLink from "next/link";
import menuList from "@/json/nav_list.json";
import CloseIcon from "@mui/icons-material/CloseRounded";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const theme = useTheme();

  return (
    <Box
      sx={{
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      }}
    >
      <div onClick={() => setIsMenuOpen(true)}>
        <Stack alignItems="center">
          <MenuIcon />
          <Typography variant="caption" fontSize="10px">
            Menu
          </Typography>
        </Stack>
      </div>
      <Drawer
        anchor="right"
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
        PaperProps={{
          sx: {
            width: "100%",
            [theme.breakpoints.up("sm")]: {
              width: "60%",
            },
          },
        }}
      >
        <Stack
          height="100%"
          alignItems="center"
          justifyContent="center"
          gap={4}
          px={4}
          position="relative"
        >
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
            }}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <CloseIcon />
          </div>
          {menuList.map((nav, idx) => {
            return (
              <MuiLink
                component={NextLink}
                href={nav.pathname}
                key={`mobile-menu-${idx}`}
              >
                {nav.title}
              </MuiLink>
            );
          })}
        </Stack>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
