"use client";

import { useGetOrgStructureQuery } from "@/redux/services/api";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import ChartRow from "./ChartRow";
import RowHead from "./ChartRow/RowHead";
import Image from "next/image";
import { flex } from "@/utils/get/getSxMUI";
import ChartColumn from "./ChartColumn";
import { Grid } from "@mui/material";

const HieChart = () => {
  const {
    data: employeeList,
    isLoading,
    isFetching,
  } = useGetOrgStructureQuery();

  const isListLoading: boolean = isLoading || isFetching;

  const theme = useTheme();

  const topLevel = employeeList?.filter(({ level }) => level === 1);
  const midLevel = employeeList?.filter(({ level }) => level === 2);
  const lowerLevel = employeeList?.filter(({ level }) => level === 3);

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

  // return (
  //   <Stack
  //     sx={{
  //       gap: 4,
  //       [theme.breakpoints.up("xl")]: {
  //         gap: 16,
  //       },
  //     }}
  //   >
  //     {[topLevel, midLevel, lowerLevel].map((lvlData, idx) => {
  //       const thisLvl = idx + 1; //indicate the row (top, mid, lower)

  //       return (
  //         <Box key={`hie-char-row-${idx}`}>
  //           {/* <RowHead rowLvl={thisLvl} /> */}
  //           <ChartRow rowList={lvlData} rowLvl={thisLvl} />
  //         </Box>
  //       );
  //     })}
  //   </Stack>
  // );

  return (
    <Grid container>
      {topLevel?.map((employee, idx) => {
        return (
          <Grid xs={12} item key={`hie-col-${idx}`} py={4}>
            <ChartColumn
              numberOfSameLvl={topLevel.length}
              topEmployee={employee}
              colIdx={idx}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HieChart;
