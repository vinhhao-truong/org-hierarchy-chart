"use client";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import useTheme from "@mui/material/styles/useTheme";
import Container from "@mui/material/Container";

import moment from "moment";
import React from "react";
import footerList from "@/json/footer_list.json";
import Link from "next/link";
import { flex } from "@/utils/get/getSxMUI";
import { useSelector } from "react-redux";
import { selectApp } from "@/redux/services/appSlice";

const Footer = () => {
  const theme = useTheme();
  const { isNotFoundPage } = useSelector(selectApp);

  if (isNotFoundPage) {
    return <></>;
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: "8rem",
        mb: "2rem",
        ...flex("col", "space-between"),
        gap: "4rem",
      }}
    >
      <Grid container rowSpacing={6}>
        {footerList.map(({ title, pathname }, idx) => {
          return (
            <Grid
              sx={{
                ...flex(),
                [theme.breakpoints.only("xs")]: {
                  fontSize: "12px",
                },
              }}
              xs={6}
              md={3}
              key={`footer-${idx}`}
              item
            >
              <MuiLink component={Link} href={pathname}>
                <Typography>{title}</Typography>
              </MuiLink>
            </Grid>
          );
        })}
      </Grid>
      <Typography color="GrayText" sx={{}}>
        @ {moment().format("YYYY")} OHC. All Rights Reserved
      </Typography>
    </Container>
  );
};

export default Footer;
