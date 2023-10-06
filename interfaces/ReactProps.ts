import { SxProps } from "@mui/material";

export default interface ReactProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProps;
  id?: string;
}
