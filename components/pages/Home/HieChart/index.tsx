"use client";

import { useGetOrgStructureQuery } from "@/redux/services/api";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import ChartRow from "./DesktopHieChart/ChartRow";
import RowHead from "./DesktopHieChart/ChartRow/RowHead";
import Image from "next/image";
import { flex } from "@/utils/get/getSxMUI";
import ChartColumn from "./DesktopHieChart/ChartColumn";
import { Grid, useMediaQuery } from "@mui/material";
import DesktopHieChart from "./DesktopHieChart";
import MobileHieChart from "./MobileHieChart";

const HieChart = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(`(min-width:1200px)`);

  return <>{isDesktop ? <DesktopHieChart /> : <MobileHieChart />}</>;
};

export default HieChart;
