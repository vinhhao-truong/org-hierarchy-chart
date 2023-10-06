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

export const rotateAnimation = (
  deg: number = 180,
  duration: number = 1
): SxProps => {
  return {
    animation: `spin ${duration}s linear`,
    "@keyframes spin": {
      "0%": {
        transform: `rotate(${deg}deg)`,
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
  };
};

export const zoomAnimation = (
  ratio: number = 1,
  duration: number = 1
): SxProps => {
  return {
    animation: `zoom ${duration}s linear`,
    "@keyframes zoom": {
      "0%": {
        transform: `scale(1)`,
      },
      "50%": {
        transform: `scale(${ratio})`,
      },
    },
  };
};
