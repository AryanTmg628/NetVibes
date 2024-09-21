import { Card, Divider, Stack, Typography } from "@mui/material";
import { Logo } from "../common/logo/logo";
import { styled } from "@mui/material/styles";

import { keyframes } from "@mui/material";
const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: "350px",
  backgroundColor: theme.palette.primary.dark,
  boxSizing: "border-box",
  borderTopLeftRadius: "1rem",
  borderBottomLeftRadius: "1rem",
}));
const slide = keyframes(
  `
0% {
transform : translateX(-80px);
}
50%{
transform  : translateX(80px);
}
100% {
transform : translateX(-80px);
}
`,
);

export const WelcomeCard = () => {
  return (
    <StyledCard
      sx={{
        p: "1rem",
        flexDirection: "column",
        flex: 1,
        display: { md: "flex", sm: "block", xs: "none" },
      }}
    >
      <Stack flex={1} justifyContent="center">
        <Stack justifyContent="center" direction="row">
          <Logo
            iconColor="text.primary"
            textColor="text.primary"
            sx={{
              animation: `${slide} 5s ease-in-out infinite`,
            }}
          />
        </Stack>
        <Divider
          orientation="horizontal"
          sx={{ opacity: "0.6", backgroundColor: "text.primary" }}
        />
        <Stack spacing={1} mt={3}>
          <Typography variant="h6">
            Domain And Hosting Service Platform
          </Typography>
          <Typography variant="body2" textAlign="center">
            तपाईलाई स्वागत छ
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="body1">&copy; T Tech Pvt. Ltd</Typography>
    </StyledCard>
  );
};
