import { red, yellow, green } from "@mui/material/colors";

const getPositionLvlColor = (level?: number) => {
  switch (level) {
    case 1:
      return red[500];
    case 2:
      return yellow[800];
    case 3:
      return green[500];
    default:
      return "black";
  }
};

export default getPositionLvlColor;
