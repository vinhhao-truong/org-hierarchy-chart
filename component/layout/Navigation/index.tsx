import React from "react";
import { Box, Container, createTheme, Grid, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: "0.5rem",
      }}
    >
      <Logo />
      <DesktopMenu />
      <MobileMenu />
    </Container>
  );
};

export default Navigation;
