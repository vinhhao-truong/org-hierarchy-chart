"use client";

import { useGetOrgStructureQuery } from "@/redux/services/api";
import { Box, List, ListItem, Stack } from "@mui/material";
import React from "react";
import ChartRow from "./ChartRow";

const HieChart = () => {
  const { data: memberList } = useGetOrgStructureQuery();

  const topLevel = memberList?.filter(({ level }) => level === 1);
  const midLevel = memberList?.filter(({ level }) => level === 2);
  const lowerLevel = memberList?.filter(({ level }) => level === 3);

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
