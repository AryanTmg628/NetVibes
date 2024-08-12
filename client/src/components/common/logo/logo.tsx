import { FC } from "react";
import Iconify from "../iconify/iconify";
import { Stack, Typography } from "@mui/material";
import company from "/src/data/company.json";

interface LogoInterface {
  sx?: object;
}

export const Logo: FC<LogoInterface> = ({ sx }) => {
  return (
    <Stack sx={{ ...sx }} spacing={1} direction="row" alignItems="center">
      <Iconify icon="mdi:server-security" width={30} color="text.black" />
      <Typography variant="h5" color="text.black">
        {company.name}
      </Typography>
    </Stack>
  );
};
