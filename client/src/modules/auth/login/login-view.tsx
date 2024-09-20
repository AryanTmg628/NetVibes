import { ResponsiveAppBar } from "../../../components/responsive-app-bar/responsive-app-bar";
import { TopBar } from "../../../components/top-bar/top-bar";
import { WelcomeCard } from "../../../components/welcome-card/welcome-card";
import FlexBox from "../../../utils/box/styled-box";
import { LoginForm } from "./login-form";
import { Box, Stack } from "@mui/material";
export const LoginView = () => {
  return (
    <Stack spacing={1}>
      <ResponsiveAppBar />
      <FlexBox justifyContent="center" alignItems="center" height="100dvh">
        <Box width="90%" maxWidth="800px" display="flex">
          <WelcomeCard />
          <LoginForm />
        </Box>
      </FlexBox>
    </Stack>
  );
};
