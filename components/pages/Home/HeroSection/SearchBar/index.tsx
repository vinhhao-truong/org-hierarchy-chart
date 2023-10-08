"use client";

import Employee from "@/interfaces/Employee";
import { useGetOrgStructureQuery } from "@/redux/services/api";
import { selectEmployee } from "@/redux/services/appSlice";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import CustomTxtField from "../CustomTxtField";
import SearchIcon from "@mui/icons-material/SearchRounded";
import CircularProgress from "@mui/material/CircularProgress";

const SearchBar = () => {
  const {
    data: employeeList,
    isFetching,
    isLoading,
  } = useGetOrgStructureQuery();
  const [value, setValue] = useState<Employee | null>(null);

  const isSearchLoading = isLoading || isFetching;

  const dispatch = useDispatch();

  return (
    <Autocomplete
      blurOnSelect
      options={employeeList || []}
      noOptionsText="No employee found..."
      renderInput={(params) => {
        return (
          <CustomTxtField
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment: isSearchLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SearchIcon />
              ),
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
      loading={isSearchLoading}
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
