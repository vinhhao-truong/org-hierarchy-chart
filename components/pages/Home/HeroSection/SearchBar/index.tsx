"use client";

import { useGetOrgStructureQuery } from "@/redux/services/api";
import { highlightEmployee, onMask } from "@/redux/services/appSlice";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const SearchBar = () => {
  const { data: employeeList } = useGetOrgStructureQuery();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Autocomplete
      options={employeeList || []}
      renderInput={(params) => <TextField {...params} label="Search" />}
      renderOption={(props, option) => {
        return (
          <li
            {...props}
            key={v4()}
            onSelect={() => {
              router.push(`/#employee-${option.id}`, {
                scroll: true,
              });
              dispatch(highlightEmployee(option.fullName));
              dispatch(onMask());
            }}
          >
            {option.fullName}
          </li>
        );
      }}
      getOptionLabel={(option) => option.fullName}
    />
  );
};

export default SearchBar;
