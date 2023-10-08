"use client";

import useKeyPress from "@/hooks/useKeyPress";
import {
  unselectEmployee,
  selectApp,
  offMask,
} from "@/redux/services/appSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/CloseRounded";

const BlackMask = () => {
  const { isBlackMaskShown } = useSelector(selectApp);
  const dispatch = useDispatch();

  //user press ESC to take of the mask
  useKeyPress("Escape", () => {
    dispatch(offMask());
  });

  return (
    <div
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
      <CloseIcon
        sx={{
          color: "white",
          fontSize: "32px",
          cursor: "pointer",
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      />
    </div>
  );
};

export default BlackMask;
