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
import CustomTxtField from "../CustomTxtField";
import SearchIcon from "@mui/icons-material/SearchRounded";
import ClearIcon from "@mui/icons-material/ClearAllRounded";

const SearchBar = () => {
  const {
    data: employeeList,
    isFetching,
    isLoading,
  } = useGetOrgStructureQuery();
  const [value, setValue] = useState<Employee | null>(null);

  const dispatch = useDispatch();

  return (
    <Autocomplete
      options={employeeList || []}
      noOptionsText="No employee found..."
      renderInput={(params) => {
        // return <CustomTxtField {...params} placeholder="Search in Home..." />;
        console.log(params);
        return (
          <CustomTxtField
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment: <SearchIcon />,
            }}
            placeholder="Search in Home..."
          />
        );
      }}
      renderOption={(props, option) => {
        return (
          <li {...props} key={v4()}>
            {option.fullName}
          </li>
        );
      }}
      loading={isLoading || isFetching}
      getOptionLabel={(option) => option.fullName}
      clearOnEscape
      includeInputInList
      groupBy={(option) => option.position}
      onChange={(e, thisValue, reason) => {
        if (reason === "selectOption" && thisValue) {
          setValue(null);
          dispatch(selectEmployee(thisValue.id));
        }
      }}
      onBlur={() => {
        setValue(null);
      }}
      value={value}
    />
  );
};

export default SearchBar;
