"use client";

import Employee from "@/interfaces/OrgStructure";
import { useGetOrgStructureQuery } from "@/redux/services/api";
import { selectEmployee, onMask, selectApp } from "@/redux/services/appSlice";
import { Autocomplete, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

const SearchBar = () => {
  const { data: employeeList } = useGetOrgStructureQuery();
  const { selectedEmployee } = useSelector(selectApp);

  const dispatch = useDispatch();

  return (
    <Autocomplete
      options={employeeList || []}
      renderInput={(params) => {
        return (
          <Paper
            style={{
              backgroundColor: "white",
            }}
            ref={params.InputProps.ref}
          >
            <input type="text" {...params.inputProps} />
          </Paper>
        );
      }}
      renderOption={(props, option) => {
        return (
          <li
            {...props}
            key={v4()}
            onClick={() => {
              dispatch(selectEmployee(option.fullName));
            }}
          >
            {option.fullName}
          </li>
        );
      }}
      getOptionLabel={(option) => option.fullName}
      sx={{ position: "relative" }}
    />
  );
};

export default SearchBar;
