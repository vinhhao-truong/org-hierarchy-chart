"use client";

import { useGetOrgStructureQuery } from "@/redux/services/api";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { v4 } from "uuid";

const SearchBar = () => {
  const { data: memberList } = useGetOrgStructureQuery();
  const router = useRouter();

  return (
    <Autocomplete
      options={memberList || []}
      renderInput={(params) => <TextField {...params} label="Search" />}
      renderOption={(props, option) => {
        return (
          <li
            {...props}
            key={v4()}
            onClick={() => {
              router.push(`/#member-${option.id}`, {
                scroll: true,
              });
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
