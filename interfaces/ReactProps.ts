import { SxProps } from "@mui/material/styles";

export default interface ReactProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProps;
  id?: string;
}
