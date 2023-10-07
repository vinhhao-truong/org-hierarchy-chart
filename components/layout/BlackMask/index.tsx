"use client";

import useKeyPress from "@/hooks/useKeyPress";
import {
  offMask,
  unselectEmployee,
  selectApp,
} from "@/redux/services/appSlice";
import useTheme from "@mui/material/styles/useTheme";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/CloseRounded";

const BlackMask = () => {
  const { isBlackMaskShown } = useSelector(selectApp);
  const dispatch = useDispatch();

  const theme = useTheme();

  useKeyPress("Escape", () => {
    dispatch(unselectEmployee());
  });

  return (
    <div
      className=""
      onClick={() => {
        dispatch(unselectEmployee());
      }}
      style={{
        display: isBlackMaskShown ? "block" : "none",
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: 1000,
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        top: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        <CloseIcon
          sx={{
            color: "white",
            fontSize: "32px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default BlackMask;
