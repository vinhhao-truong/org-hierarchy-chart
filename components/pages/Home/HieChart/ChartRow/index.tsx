"use client";

import Employee from "@/interfaces/OrgStructure";
import ReactProps from "@/interfaces/ReactProps";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import React from "react";
import ChartItem from "./ChartItem";
import getLvlColor from "@/utils/get/getLvlColor";

interface ChartRowProps extends ReactProps {
  rowList?: Employee[];
  rowLvl?: number;
}

const ChartRow: React.FC<ChartRowProps> = ({ rowList, rowLvl }) => {
  const patternColor = getLvlColor(rowLvl);

  return rowList ? (
    <Grid
      container
      columnSpacing={3}
      rowSpacing={1}
      sx={{
        overflowX: "auto",
        overflow: "visible",
        //pattern style
        backgroundImage: `linear-gradient(135deg, ${patternColor} 25%, transparent 25%), linear-gradient(225deg, ${patternColor} 25%, transparent 25%), linear-gradient(45deg, ${patternColor} 25%, transparent 25%), linear-gradient(315deg, ${patternColor} 25%, #ffffff 25%)`,
        backgroundPosition: "8px 0, 8px 0, 0 0, 0 0",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
        position: "relative",
      }}
    >
      {/* MASK */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(255,255,255,1) 67%, rgba(255,255,255,0.7) 20%)",
          position: "absolute",
        }}
      />
      {rowList.map((employee, idx) => {
        return (
          <Grid xs={12} sm={6} lg="auto" item key={`employee-${employee.id}`}>
            <ChartItem employee={employee} />
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <></>
  );
};

export default ChartRow;
