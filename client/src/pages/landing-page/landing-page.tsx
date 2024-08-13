import { Box } from "@mui/material";
import { TopBar } from "../../components/top-bar/top-bar";
import { ResponsiveAppBar } from "../../components/responsive-app-bar/responsive-app-bar";
import { IntroCard } from "../../components/intro-card/intro-card";

export const LandingPage = () => {
  return (
    <Box>
      <TopBar />
      <ResponsiveAppBar />
      <IntroCard />
    </Box>
  );
};
