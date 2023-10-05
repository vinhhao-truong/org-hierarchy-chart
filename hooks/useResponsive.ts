import { useMediaQuery } from "@mui/material";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

export default function useResponsive(): Size {
  const isXl = useMediaQuery("(min-width: 1536px)");
  const isLg = useMediaQuery("(min-width: 1200px)");
  const isMd = useMediaQuery("(min-width: 900px)");
  const isSm = useMediaQuery("(min-width: 600px)");

  return "xl";
}
