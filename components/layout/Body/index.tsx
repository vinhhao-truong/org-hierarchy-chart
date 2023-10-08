import React from "react";
import ReactProps from "@/interfaces/ReactProps";
import Box from "@mui/material/Box";

const Body: React.FC<ReactProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Body;
