import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import company from "../../data/company.json";
import { CardInfo } from "../../components/common/card-info/card-info";
export const FeaturesSection: FC = () => {
  const features = [
    {
      icon: "lucide:network",
      title: "Super Easy to use",
      content: "Increase sales by showing true dynamics of your website.",
    },
    {
      icon: "mdi:bike-fast",
      title: "Fast & Reliable",
      content: "Build your online store's trust.",
    },
    {
      icon: "icon-park-outline:every-user",
      title: "24/7 Expert Support",
      content: "Always available for any queries of yours.",
    },
  ];
  return (
    <Box p="2rem 3rem" mt={5}>
      <Stack spacing={1} marginBottom={2}>
        <Typography variant="h5" color="primary.dark" textAlign="center">
          {company.name} Helps You Succeed
        </Typography>
        <Typography variant="body2" color="custom.grey.200" textAlign="center">
          Grow your website faster by using {company.name} as your foundation.
        </Typography>
      </Stack>
      <Grid container spacing={1}>
        {features.map((feat, index) => (
          <Grid item xs={12} md={4}>
            <CardInfo
              key={index}
              icon={feat.icon}
              title={feat.title}
              content={feat.content}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
