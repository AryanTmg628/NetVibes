import { Stack } from "@mui/material";
import { TopBar } from "../../components/top-bar/top-bar";
import { ResponsiveAppBar } from "../../components/responsive-app-bar/responsive-app-bar";
import { IntroCard } from "../../components/intro-card/intro-card";
import { FeaturesSection } from "../../modules/landing-page/features-section";
import { CommunicateChannel } from "../../components/communicate-channel/communicate-channel";
import { FAQ } from "../../components/faq/faq";
import { CopyRight } from "../../modules/landing-page/copyright-section/copyright-section";

export const LandingPage = () => {
  return (
    <Stack spacing={3}>
      <TopBar />
      <ResponsiveAppBar />
      <IntroCard />
      <FeaturesSection />
      <CommunicateChannel />
      <FAQ />
      <CopyRight />
    </Stack>
  );
};
