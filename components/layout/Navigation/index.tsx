"use client";

import React, { useState } from "react";
import {
  Box,
  Collapse,
  Container,
  createTheme,
  Fade,
  Grid,
  Slide,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { flex } from "@/utils/get/getSxMUI";
import useScroll from "@/hooks/useScroll";

const Navigation = () => {
  const theme = useTheme();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useScroll(
    () => {
      if (isCollapsed) {
        setIsCollapsed(false);
      }
    },
    () => {
      if (!isCollapsed && window.scrollY > 100) {
        setIsCollapsed(true);
      }
    }
  );

  return (
    <div className="">
      <Slide direction="down" in={!isCollapsed}>
        <Box
          sx={{
            boxShadow: 3,
            position: "fixed",
            top: "0",
            backgroundColor: "white",
            zIndex: 1000,
            width: "100%",
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
      </Slide>
    </div>
  );
};

export default Navigation;
