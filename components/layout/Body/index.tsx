import ReactProps from "@/interfaces/ReactProps";
import { Box, Container } from "@mui/material";
import React from "react";

const Body: React.FC<ReactProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Body;
