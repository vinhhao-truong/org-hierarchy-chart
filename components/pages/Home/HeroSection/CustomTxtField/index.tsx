"use client";

import TextField from "@mui/material/TextField";
import styled from "@mui/material/styles/styled";

import React from "react";

const CustomTxtField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    border: "none",
    width: "400px",
    maxWidth: "90vw",
    borderRadius: "32px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    padding: "0.5rem 1rem",
    "& fieldset": {
      border: "none",
      width: "100px",
    },
    "&:hover fieldset": {
      border: "none",
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      border: "none",
      borderColor: "transparent",
    },
  },
});

export default CustomTxtField;
