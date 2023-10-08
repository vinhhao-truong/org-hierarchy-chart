"use client";

import ReactProps from "@/interfaces/ReactProps";
import React from "react";
import ExecutiveIcon from "@mui/icons-material/BusinessCenter";
import ManagementIcon from "@mui/icons-material/ManageAccounts";
import OperationalIcon from "@mui/icons-material/Person";

const PositionIcon: React.FC<{ level: number } & ReactProps> = ({
  level,
  sx,
}) => {
  const thisSx = sx ? sx : {};

  if (level > 3 || level < 1) {
    return <></>;
  }

  return (
    <>
      {level === 1 && <ExecutiveIcon sx={thisSx} />}
      {level === 2 && <ManagementIcon sx={thisSx} />}
      {level === 3 && <OperationalIcon sx={thisSx} />}
    </>
  );
};

export default PositionIcon;
