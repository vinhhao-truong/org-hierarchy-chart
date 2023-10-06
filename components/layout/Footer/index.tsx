"use client";

import { Container, Grid, Typography, useTheme } from "@mui/material";
import moment from "moment";
import React from "react";
import footerList from "@/json/footer_list.json";
import Link from "next/link";
import { flex } from "@/utils/get/getSxMUI";

const Footer = () => {
  const theme = useTheme();

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
              <Link href={pathname}>
                <Typography>{title}</Typography>
              </Link>
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
