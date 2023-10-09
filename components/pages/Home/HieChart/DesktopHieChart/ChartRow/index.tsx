"use client";

import Employee from "@/interfaces/Employee";
import ReactProps from "@/interfaces/ReactProps";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import React from "react";
import ChartItem from "../../ChartItem";
import getPositionLvlColor from "@/utils/get/getPositionLvlColor";
import Typography from "@mui/material/Typography";
import ChartColumn from "../ChartColumn";
import { flex } from "@/utils/get/getSxMUI";
import RowHead from "./RowHead";
import { Stack, useTheme } from "@mui/material";

interface ChartRowProps extends ReactProps {
  rowList?: (Employee | undefined)[];
  rowLvl?: number;
}

const ChartRow: React.FC<ChartRowProps> = ({ rowList, rowLvl }) => {
  const patternColor = getPositionLvlColor(rowLvl);
  const theme = useTheme();

  return rowList && rowList.length > 0 ? (
    <Stack
      gap={0}
      sx={{
        position: "relative",
        alignItems: "center",
      }}
    >
      {/* --HALF VERTICAL LINE BELOW EACH NODE-- */}
      <Box
        sx={{
          width: "2px",
          height: "2rem",
          backgroundColor: getPositionLvlColor(
            // 1->2 2->3 3->3 get the color below
            rowLvl && rowLvl < 3 ? rowLvl + 1 : rowLvl
          ),
          position: "relative",
        }}
      />
      <Box
        // columnSpacing={3}
        // wrap="nowrap"
        // sx={{
        //pattern style
        // backgroundImage: `linear-gradient(135deg, ${patternColor} 25%, transparent 25%), linear-gradient(225deg, ${patternColor} 25%, transparent 25%), linear-gradient(45deg, ${patternColor} 25%, transparent 25%), linear-gradient(315deg, ${patternColor} 25%, #ffffff 25%)`,
        // backgroundPosition: "8px 0, 8px 0, 0 0, 0 0",
        // backgroundSize: "8px 8px",
        // backgroundRepeat: "repeat",
        // position: "relative",
        // overflowX: "auto",
        // }}
        sx={{
          ...flex("row", "flex-start", "flex-start"),
          overflowX: "auto",
          px: "0.5rem",
          position: "relative",
        }}
      >
        {/* --ROW MASK-- */}
        {/* <Box
        sx={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(255,255,255,1) 67%, rgba(255,255,255,0.7) 20%)",
          position: "absolute",
          right: 0,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            whiteSpace: "nowrap",
            textAlign: "right",
            fontWeight: 900,
            fontSize: "120px",
            position: "absolute",
            bottom: 0,
            right: "1rem",
            color: getPositionLvlColor(rowLvl),
          }}
        >
          {rowLvl}
        </Typography>
      </Box> */}
        {rowList.map((employee, idx) => {
          if (!employee) {
            return (
              <div style={{ display: "none" }} key={`no-emp-${idx}`}></div>
            );
          }

          // return (
          //   <Grid xs={12} sm={6} lg="auto" item key={`employee-${employee.id}`}>
          //     <ChartColumn topEmployee={employee} />
          //   </Grid>
          // );

          return (
            <ChartColumn
              topEmployee={employee}
              key={`employee-${employee.id}`}
              numberOfSameLvl={rowList.length}
              colIdx={idx}
            />
          );
        })}
      </Box>
    </Stack>
  ) : (
    <></>
  );
};

export default ChartRow;
