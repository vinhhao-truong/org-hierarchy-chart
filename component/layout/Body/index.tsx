import ReactProps from "@/interfaces/ReactProps";
import { Container } from "@mui/material";
import React from "react";

const Body: React.FC<ReactProps> = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};

export default Body;
