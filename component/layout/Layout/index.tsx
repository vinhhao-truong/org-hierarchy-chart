"use client";

import ReactProps from "@/interfaces/ReactProps";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Navigation from "../Navigation";
import Body from "../Body";
import Footer from "../Footer";

const theme = createTheme({});

const Layout: React.FC<ReactProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Body>{children}</Body>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
