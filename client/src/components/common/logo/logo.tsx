import { FC } from "react";
import Iconify from "../iconify/iconify";
import { Stack, Typography } from "@mui/material";
import company from "/src/data/company.json";

interface LogoInterface {
  sx?: object;
  iconColor?: string;
  textColor?: string;
}

export const Logo: FC<LogoInterface> = ({ sx, iconColor, textColor }) => {
  return (
    <Stack sx={{ ...sx }} spacing={1} direction="row" alignItems="center">
      <Iconify
        icon="mdi:server-security"
        width={30}
        color={iconColor ? iconColor : "text.black"}
      />
      <Typography variant="h5" color={textColor ? textColor : "text.black"}>
        {company.name}
      </Typography>
    </Stack>
  );
};
