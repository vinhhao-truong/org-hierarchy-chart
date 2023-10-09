"use client";

import Employee from "@/interfaces/Employee";
import ReactProps from "@/interfaces/ReactProps";
import { useGetOrgStructureQuery } from "@/redux/services/api";
import getPositionLvlColor from "@/utils/get/getPositionLvlColor";
import { flex } from "@/utils/get/getSxMUI";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ChartRow from "../ChartRow";
import ChartItem from "../ChartRow/ChartItem";
import RowHead from "../ChartRow/RowHead";

interface ChartColumnProps extends ReactProps {
  topEmployee: Employee;
  numberOfSameLvl: number;
  colIdx: number;
}

const ChartColumn: React.FC<ChartColumnProps> = ({
  topEmployee,
  numberOfSameLvl,
  colIdx,
}) => {
  const { data: employeeList } = useGetOrgStructureQuery();
  const employeeMap = new Map(
    employeeList ? employeeList.map((emp) => [emp.fullName, emp]) : []
  );

  const subOrdinateList: (Employee | undefined)[] = topEmployee
    ? topEmployee.subordinates.map((name) => employeeMap.get(name))
    : [];

  if (!topEmployee) {
    return <></>;
  }

  const isBlackLineInBetween = colIdx > 0 && colIdx < numberOfSameLvl - 1;
  const isBlackLineHead = colIdx === 0;
  const isBlackLineTail = colIdx === numberOfSameLvl - 1;

  return (
    <Stack gap={0} alignItems="center" sx={{ position: "relative" }}>
      {/* --HORIZONTAL LINE ABOVE EACH LEVEL EXCEPT TOP-- */}
      {topEmployee.level > 1 && numberOfSameLvl > 1 && (
        <Box
          sx={{
            width: `calc(${isBlackLineInBetween ? "100%" : "50%"} + 1px)`,
            height: "2px",
            alignSelf: isBlackLineHead
              ? "flex-end"
              : isBlackLineTail
              ? "flex-start"
              : "center",
            backgroundColor: getPositionLvlColor(topEmployee.level),
          }}
        />
      )}
      {/* --HALF VERTICAL LINE ABOVE EACH NODE EXCEPT TOP-- */}
      {topEmployee.level > 1 && (
        <Box
          sx={{
            width: "2px",
            height: "2rem",
            backgroundColor: getPositionLvlColor(topEmployee.level),
            position: "relative",
          }}
        />
      )}
      <ChartItem employee={topEmployee} />
      <ChartRow rowList={subOrdinateList} rowLvl={topEmployee.level} />
      {/* <Stack>
        {subOrdinateList?.map((thisEmp, idx) => {
          return (
            <ChartColumn
              key={`${topEmployee}-col-${idx}`}
              topEmployee={thisEmp}
            />
          );
        })}
      </Stack> */}
    </Stack>
  );
};

export default ChartColumn;
