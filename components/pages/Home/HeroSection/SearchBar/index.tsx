"use client";

import Employee from "@/interfaces/OrgStructure";
import { useGetOrgStructureQuery } from "@/redux/services/api";
import {
  selectEmployee,
  selectApp,
  setHighlightedEmployees,
} from "@/redux/services/appSlice";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

const SearchBar = () => {
  const { data: employeeList } = useGetOrgStructureQuery();

  const dispatch = useDispatch();

  return (
    <Autocomplete
      options={employeeList || []}
      renderInput={(params) => {
        return (
          <Box ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps}
              style={{
                width: "300px",
                padding: "1rem 1.5rem",
                borderRadius: "28px",
                backgroundColor: "white",
                border: "none",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </Box>
        );
      }}
      renderOption={(props, option) => {
        return (
          <li {...props} key={v4()}>
            {option.fullName}
          </li>
        );
      }}
      getOptionLabel={(option) => option.fullName}
      // onInputChange={(_, value) => {
      //   const thisEmployee = employeeList?.find(
      //     ({ fullName }) => value.toLowerCase() === fullName.toLowerCase()
      //   );

      //   //check if the employee exists
      //   if (!!thisEmployee) {
      //     dispatch(selectEmployee(thisEmployee.id));
      //   }
      // }}
      sx={{ position: "relative" }}
      clearOnEscape
      includeInputInList
      groupBy={(option) => option.position}
      onChange={(e, value) => {
        if (value) {
          dispatch(selectEmployee(value.id));
        }
      }}
    />
  );
};

export default SearchBar;
