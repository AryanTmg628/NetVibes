import { Card, CardMedia, Typography, Stack } from "@mui/material";
import company from "src/data/company.json";
import { FC } from "react";
import FlexBox from "../../utils/box/styled-box";
import { SearchDomain } from "../search-domain/search-domain";

interface IntroductionSectionInterface {
  sx?: object;
}

export const IntroCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: "primary.dark",
        border: "none",
        display: "flex",
        p: "5rem 20rem",
        alignItems: "center",
      }}
    >
      <IntroductionSection sx={{ flex: 1 }} />
      <CardMedia
        component="img"
        image="/assets/servers.svg"
        alt="image"
        sx={{
          width: "18rem",
          animation: "Bounce 5s cubic-bezier(0.42,0,0.58,1) infinite",

          "@keyframes Bounce": {
            "0%": {
              transition: "all 3s ease-in-out",
              transform: "translate3d(0,0,0)",
            },
            "50%": {
              transform: "translate3d(0,20px,0)",
            },
            "100%": {
              transform: "translate3d(0,0,0)",
              transition: "all 3s ease-in-out",
            },
          },
        }}
      />
    </Card>
  );
};

const IntroductionSection: FC<IntroductionSectionInterface> = ({ sx }) => {
  return (
    <FlexBox component="div" sx={{ ...sx }} flexDirection="column" gap="1rem">
      <Stack spacing={1}>
        <Typography variant="h5">
          {company.name} Best Hosting Platform
        </Typography>
        <Typography variant="h5">In The World</Typography>
      </Stack>
      <Stack spacing={1} sx={{ width: "80%" }}>
        <Typography
          variant="body2"
          paragraph
          color="text.primary"
          textAlign="justify"
        >
          {company.objectives}
        </Typography>
      </Stack>
      <Stack spacing={1} sx={{ width: "80%" }}>
        <SearchDomain />
      </Stack>
    </FlexBox>
  );
};
