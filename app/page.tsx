import { Container } from "@mui/material";
import HeroSection from "@/components/pages/Home/HeroSection";
import HieChart from "@/components/pages/Home/HieChart";
import { getOrgStructure, getRunningQueriesThunk } from "@/redux/services/api";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <HieChart />
      </Container>
    </>
  );
}
