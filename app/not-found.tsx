"use client";

import { setNotFound } from "@/redux/services/appSlice";
import { flex } from "@/utils/get/getSxMUI";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const NotFound = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    dispatch(setNotFound(true)); //For the client to detect if the page is not found (404).
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        ...flex("col", "center", "center"),
        gap: 4,
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* --BG IMG-- */}
      <Image
        src="https://epavlis-hotel.gr/wp-content/uploads/2023/04/2474092-1024x664.png"
        alt="under-construction"
        fill
        style={{
          opacity: 0.2,
          zIndex: -1,
        }}
      />
      {/* -- "Back to Home" LINK -- */}
      {/* associate both MuiLink and NextLink to have their attributes */}
      <MuiLink component={NextLink} href="/" align="center">
        Back to Home
      </MuiLink>
      {/* -- DESC -- */}
      <Typography variant="h6" align="center">
        Sorry, &ldquo;{pathname}&rdquo; is under construction! Come back another
        time...
      </Typography>
    </Container>
  );
};

export default NotFound;
