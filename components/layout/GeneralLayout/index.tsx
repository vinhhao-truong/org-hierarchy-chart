"use client";

import ReactProps from "@/interfaces/ReactProps";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navigation from "../Navigation";
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
