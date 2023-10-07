"use client";

import { Container } from "@mui/material";
import HeroSection from "@/components/pages/Home/HeroSection";
import HieChart from "@/components/pages/Home/HieChart";
import { getOrgStructure, getRunningQueriesThunk } from "@/redux/services/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectApp, setNotFound } from "@/redux/services/appSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotFound(false));
  }, []);

  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <HieChart />
      </Container>
    </>
  );
}
