"use client";

import Container from "@mui/material/Container";
import HeroSection from "@/components/pages/Home/HeroSection";
import HieChart from "@/components/pages/Home/HieChart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNotFound } from "@/redux/services/appSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotFound(false)); //let the client-side detect that the page is available
    if (window !== undefined) {
      console.log(window.innerWidth);
    }
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
