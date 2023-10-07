"use client";

import ReactProps from "@/interfaces/ReactProps";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Navigation from "../Navigation";
import Body from "../Body";
import Footer from "../Footer";
import { Provider } from "react-redux";
import store from "@/redux/store";
import BlackMask from "../BlackMask";

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

const GeneralLayout: React.FC<ReactProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
        {children}
        <Footer />
        <BlackMask />
      </ThemeProvider>
    </Provider>
  );
};

export default GeneralLayout;
