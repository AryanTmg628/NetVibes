import { Box } from "@mui/material";
import { TopBar } from "../../components/top-bar/top-bar";
import { ResponsiveAppBar } from "../../components/responsive-app-bar/responsive-app-bar";
import { IntroCard } from "../../components/intro-card/intro-card";
import { FeaturesSection } from "../../modules/landing-page/features-section";
import { CommunicateChannel } from "../../components/communicate-channel/communicate-channel";

export const LandingPage = () => {
  return (
    <Box>
      <TopBar />
      <ResponsiveAppBar />
      <IntroCard />
      <FeaturesSection />
      <CommunicateChannel />
    </Box>
  );
};
