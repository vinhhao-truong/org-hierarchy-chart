import { SxProps } from "@mui/material";

export const flex = (
  direction: "row" | "col" = "row",
  justify:
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center" = "center",
  align: "flex-start" | "flex-end" | "center" = "center"
): SxProps => {
  return {
    display: "flex",
    flexDirection: direction === "col" ? "column" : "row",
    justifyContent: justify,
    alignItems: align,
  };
};
