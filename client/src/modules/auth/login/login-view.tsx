import { WelcomeCard } from "../../../components/welcome-card/welcome-card";
import FlexBox from "../../../utils/box/styled-box";
import { LoginForm } from "./login-form";
import { Box, Stack } from "@mui/material";
export const LoginView = () => {
  return (
    <FlexBox
      justifyContent="center"
      alignItems="center"
      height="100dvh"
      sx={{
        backgroundColor: "custom.grey.100",
      }}
    >
      <Box
        width="90%"
        maxWidth="800px"
        sx={{ display: { md: "flex", sm: "block", xs: "block" } }}
      >
        <WelcomeCard />
        <LoginForm />
      </Box>
    </FlexBox>
  );
};
