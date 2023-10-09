"use client";

import { useGetOrgStructureQuery } from "@/redux/services/api";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import ChartRow from "./ChartRow";
import RowHead from "./ChartRow/RowHead";
import Image from "next/image";
import { flex } from "@/utils/get/getSxMUI";
import ChartColumn from "./ChartColumn";
import { Collapse, Grid } from "@mui/material";
import NextIcon from "@mui/icons-material/NavigateNextRounded";
import BackIcon from "@mui/icons-material/NavigateBeforeRounded";
import { blue } from "@mui/material/colors";

const DesktopHieChart = () => {
  const {
    data: employeeList,
    isLoading,
    isFetching,
  } = useGetOrgStructureQuery();

  const isListLoading: boolean = isLoading || isFetching;

  const theme = useTheme();

  const topLevel = employeeList?.filter(({ level }) => level === 1);

  if (isListLoading) {
    return (
      <Box
        sx={{
          ...flex(),
          position: "relative",
        }}
      >
        <Image
          alt="loading-animation"
          src="/assets/img/walking-businessman.gif"
          width={240}
          height={180}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "none",
        [theme.breakpoints.up("lg")]: {
          display: "block",
        },
      }}
    >
      {topLevel?.map((employee, idx) => {
        return (
          <Box key={`hie-col-${idx}`} sx={{ py: 4, display: "relative" }}>
            <ChartColumn
              numberOfSameLvl={topLevel.length}
              topEmployee={employee}
              colIdx={idx}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default DesktopHieChart;
