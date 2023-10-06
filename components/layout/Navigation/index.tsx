import React from "react";
import { Box, Container, createTheme, Grid, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { flex } from "@/utils/get/getSxMUI";

const Navigation = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        boxShadow: 3,
        position: "sticky",
        top: "0",
        backgroundColor: "white",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          ...flex("row", "space-between"),
          py: "0.5rem",
        }}
      >
        <Logo />
        <DesktopMenu />
        <MobileMenu />
      </Container>
    </Box>
  );
};

export default Navigation;
