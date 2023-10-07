"use client";

import { useGetOrgStructureQuery } from "@/redux/services/api";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import ChartRow from "./ChartRow";

const HieChart = () => {
  const { data: employeeList } = useGetOrgStructureQuery();

  const topLevel = employeeList?.filter(({ level }) => level === 1);
  const midLevel = employeeList?.filter(({ level }) => level === 2);
  const lowerLevel = employeeList?.filter(({ level }) => level === 3);

  return (
    <Stack gap={16}>
      {[topLevel, midLevel, lowerLevel].map((lvlData, idx) => {
        const thisLvl = idx + 1; //indicate the row (top, mid, lower)

        return (
          <Box key={`hie-char-row-${idx}`}>
            <ChartRow rowList={lvlData} rowLvl={thisLvl} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default HieChart;
