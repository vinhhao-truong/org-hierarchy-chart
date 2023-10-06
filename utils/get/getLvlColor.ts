import { red, yellow, green } from "@mui/material/colors";

const getLvlColor = (level?: number) => {
  switch (level) {
    case 1:
      return red[500];
      break;
    case 2:
      return yellow[800];
      break;
    default:
      return green[500];
  }
};

export default getLvlColor;
