import ReactProps from "@/interfaces/ReactProps";
import Box from "@mui/material/Box";

import React from "react";

const Body: React.FC<ReactProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Body;
