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
      cursor: unavailable ? "auto" : "pointer",
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
        const nextId = topLevel[idx + 1]?.id;
        const prevId = topLevel[idx - 1]?.id;

        return (
          <Box
            id={`chart-${employee.id}-section`}
            key={`hie-col-${idx}`}
            sx={{
              ...flex("row", "space-between"),
              py: 4,
              position: "relative",
            }}
          >
            {/* --UP DOWN ARROW-- */}
            <Stack
              sx={{
                position: "relative",
                width: "fit-content",
                fontSize: "48px",
                gap: 3,
              }}
            >
              <UpIcon
                onClick={() =>
                  prevId && router.push(`/#chart-${prevId}-section`)
                }
                sx={arrowSx(!prevId)}
                fontSize="inherit"
              />
              <DownIcon
                onClick={() =>
                  nextId && router.push(`/#chart-${nextId}-section`)
                }
                sx={arrowSx(!nextId)}
                fontSize="inherit"
              />
            </Stack>
            {/* --MAIN CHART-- */}
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
