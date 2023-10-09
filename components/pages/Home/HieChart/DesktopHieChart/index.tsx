"use client";

import { useGetOrgStructureQuery } from "@/redux/services/api";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import React from "react";
import { flex } from "@/utils/get/getSxMUI";
import ChartColumn from "./ChartColumn";
import Stack from "@mui/material/Stack";
import UpIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { SxProps } from "@mui/material";
import { useRouter } from "next/navigation";

const DesktopHieChart = () => {
  const { data: employeeList } = useGetOrgStructureQuery();

  const arrowSx = (unavailable: boolean): SxProps => {
    return {
      color: unavailable ? "#bdbdbd" : "#00000",
      cursor: unavailable ? "none" : "pointer",
    };
  };

  const theme = useTheme();
  const router = useRouter();

  const topLevel = employeeList?.filter(({ level }) => level === 1);

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
        const next = topLevel[idx + 1]?.id;
        const prev = topLevel[idx - 1]?.id;

        return (
          <Box
            id={`top-${employee.id}-section`}
            key={`hie-col-${idx}`}
            sx={{
              ...flex("row", "space-between"),
              py: 4,
              position: "relative",
            }}
          >
            <Stack
              sx={{
                position: "relative",
                width: "fit-content",
                fontSize: "48px",
                gap: 3,
              }}
            >
              <UpIcon
                onClick={() => prev && router.push(`/#top-${prev}-section`)}
                sx={arrowSx(!prev)}
                fontSize="inherit"
              />
              <DownIcon
                onClick={() => next && router.push(`/#top-${next}-section`)}
                sx={arrowSx(!next)}
                fontSize="inherit"
              />
            </Stack>
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
