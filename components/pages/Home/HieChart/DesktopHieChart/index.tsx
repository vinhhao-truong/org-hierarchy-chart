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
  const [currentChart, setCurrentChart] = useState<number>(0);

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
      <Box sx={{ ...flex("row", "center") }}>
        {topLevel?.map((employee, idx) => {
          const isShown = idx === currentChart;
          const isFirst = idx === 0;
          const isLast = idx === topLevel.length - 1;
          const isBetween = !isLast && !isFirst;

          return (
            <Collapse
              orientation="horizontal"
              in={isShown}
              key={`hie-col-${idx}`}
              sx={{ py: 4, display: "relative" }}
            >
              <Box
                sx={{
                  ...flex(),
                  gap: 2,
                  width: "100%",
                  height: "100%",
                }}
              >
                {(isLast || isBetween) && (
                  <BackIcon
                    fontSize="large"
                    color="primary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setCurrentChart(idx - 1);
                    }}
                  />
                )}
                {(isFirst || isBetween) && (
                  <NextIcon
                    fontSize="large"
                    color="primary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setCurrentChart(idx + 1);
                    }}
                  />
                )}
              </Box>
              <ChartColumn
                numberOfSameLvl={topLevel.length}
                topEmployee={employee}
                colIdx={idx}
              />
            </Collapse>
          );
        })}
      </Box>
    </Box>
  );
};

export default DesktopHieChart;
