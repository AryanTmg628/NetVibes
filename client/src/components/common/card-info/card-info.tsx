import { Card, CardContent, Stack, Typography } from "@mui/material";
import { FC } from "react";
import Iconify from "../iconify/iconify";
import { CardInfoInterface } from "../../../interfaces";

export const CardInfo: FC<CardInfoInterface> = ({ icon, title, content }) => {
  return (
    <Card sx={{ py: "2rem", boxShadow: "none" }}>
      <Stack direction="row" justifyContent="center">
        <Iconify
          icon={icon || ""}
          color="text.primary"
          width={30}
          sx={{
            backgroundColor: "primary.dark",
            p: 2,
            borderRadius: "0.5rem",
          }}
        />
      </Stack>
      <CardContent>
        <Typography variant="h6" color="primary.dark" textAlign="center">
          {title}
        </Typography>
        <Stack direction="row" justifyContent="center">
          <Typography
            variant="body1"
            color="custom.grey.200"
            textAlign="center"
            width="80%"
          >
            {content}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
