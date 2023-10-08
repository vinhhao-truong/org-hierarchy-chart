"use client";

import React, { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";

import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { flex } from "@/utils/get/getSxMUI";
import useScroll from "@/hooks/useScroll";
import { useSelector } from "react-redux";
import { selectApp } from "@/redux/services/appSlice";

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const { isBlackMaskShown, isNotFoundPage } = useSelector(selectApp);

  //Show / Hide the nav on scroll
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

  //Hide nav if the page is not available
  if (isNotFoundPage) {
    return <></>;
  }

  return (
    <Slide direction="down" in={!isCollapsed && !isBlackMaskShown}>
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
  );
};

export default Navigation;
