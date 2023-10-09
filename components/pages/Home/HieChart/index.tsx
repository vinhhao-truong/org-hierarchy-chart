"use client";

import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopHieChart from "./DesktopHieChart";
import MobileHieChart from "./MobileHieChart";
import { useGetOrgStructureQuery } from "@/redux/services/api";
import LoadingAnimation from "./LoadingAnimation";

const HieChart = () => {
  const isDesktop = useMediaQuery(`(min-width:1200px)`);
  const { isLoading, isFetching } = useGetOrgStructureQuery();

  if (isLoading || isFetching) {
    return <LoadingAnimation />;
  }

  return <>{isDesktop ? <DesktopHieChart /> : <MobileHieChart />}</>;
};

export default HieChart;
