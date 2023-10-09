"use client";

import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import PositionWrap from "./PositionWrap";
import { useGetOrgStructureQuery } from "@/redux/services/api";

const MobileHieChart = () => {
  const theme = useTheme();

  const {
    data: employeeList,
    isLoading,
    isFetching,
  } = useGetOrgStructureQuery();

  const topLevel = employeeList?.filter(({ level }) => level === 1);

  return (
    <Container
      sx={{
        [theme.breakpoints.up("lg")]: {
          display: "none",
        },
      }}
    >
      {topLevel && (
        <Grid container>
          {topLevel.map((emp, idx) => {
            return (
              <Grid
                md={12 / topLevel.length}
                xs={12}
                item
                key={`mobile-wrap-col-${idx}`}
              >
                <PositionWrap topEmployee={emp} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};

export default MobileHieChart;
