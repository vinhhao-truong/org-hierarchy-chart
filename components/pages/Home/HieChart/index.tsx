"use client";
import useTheme from "@mui/material/styles/useTheme";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import DesktopHieChart from "./DesktopHieChart";
import MobileHieChart from "./MobileHieChart";

const HieChart = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(`(min-width:1200px)`);

  return <>{isDesktop ? <DesktopHieChart /> : <MobileHieChart />}</>;
};

export default HieChart;
