"use client";

import Employee from "@/interfaces/Employee";
import ReactProps from "@/interfaces/ReactProps";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useGetOrgStructureQuery } from "@/redux/services/api";
import ChartItem from "../../ChartItem";
import { flex } from "@/utils/get/getSxMUI";
import getPositionLvlTitle from "@/utils/get/getPostionLvlTitle";
import getPositionLvlColor from "@/utils/get/getPositionLvlColor";

interface PositionWrapProps extends ReactProps {
  topEmployee: Employee;
}

const PositionWrap: React.FC<PositionWrapProps> = ({ topEmployee }) => {
  const theme = useTheme();

  const { data: employeeList } = useGetOrgStructureQuery();
  const employeeMap = new Map(
    employeeList ? employeeList.map((emp) => [emp.fullName, emp]) : []
  );

  const subOrdinateList: (Employee | undefined)[] = topEmployee
    ? topEmployee.subordinates.map((name) => employeeMap.get(name))
    : [];

  if (topEmployee.position === "Employee") {
    return (
      <Grid item>
        <ChartItem employee={topEmployee} />
      </Grid>
    );
  }

  return (
    <Box>
      <ChartItem employee={topEmployee} />
      <Box
        sx={{
          // ...flex("row", "flex-start", "flex-start"),
          px: 1,
          gap: 1,
          [theme.breakpoints.up("sm")]: {
            px: 1.5,
            gap: 1.5,
          },
          [theme.breakpoints.up("md")]: {
            px: 2,
            gap: 2,
          },
          flexWrap: "wrap",
          borderLeft: 2,
          borderLeftColor: getPositionLvlColor(topEmployee.level),
        }}
      >
        {/* case not last row */}
        {topEmployee.position !== "Manager" &&
          subOrdinateList.map((emp, idx) => {
            if (!emp) {
              return <Box key={`mobile-wrap-nothing-${idx}`}></Box>;
            }

            return (
              <Box key={`mobile-wrap-${emp?.fullName}`}>
                <PositionWrap topEmployee={emp} />
              </Box>
            );
          })}
        {/* case last row */}
        {topEmployee.position === "Manager" && (
          <Grid container gap={2}>
            {subOrdinateList.map((emp, idx) => {
              return (
                <Grid item key={`mobile-wrap-${emp?.fullName}`}>
                  {emp && <ChartItem employee={emp} />}
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default PositionWrap;