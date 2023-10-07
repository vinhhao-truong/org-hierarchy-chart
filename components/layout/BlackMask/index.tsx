"use client";

import useKeyPress from "@/hooks/useKeyPress";
import { offMask, resetApp, selectApp } from "@/redux/services/appSlice";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BlackMask = () => {
  const { isBlackMaskShown } = useSelector(selectApp);
  const dispatch = useDispatch();

  useKeyPress("Escape", () => {
    dispatch(resetApp());
  });

  return (
    <div
      className=""
      onClick={() => {
        dispatch(resetApp());
      }}
      style={{
        display: isBlackMaskShown ? "block" : "none",
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: 1000,
        backgroundColor: `rgba(0, 0, 0, 0.3)`,
        top: 0,
      }}
    ></div>
  );
};

export default BlackMask;
