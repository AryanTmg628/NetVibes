import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import FlexBox from "../../utils/box/styled-box";
import HoverTypography from "../../utils/typography/styled-typography";
import Iconify from "../common/iconify/iconify";
import company from "/src/data/company.json";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "0.5rem",

  "&:hover *": {
    color: theme.palette.primary.light,
  },
}));

export const TopBar: FC = () => {
  const renderTechnicalSupport = (
    <CustomBox>
      <Iconify
        icon="material-symbols-light:call"
        color="custom.grey.200"
        height={20}
        sx={{ "&:hover": { cursor: "pointer" } }}
      />
      <HoverTypography paragraph>
        24x7 Technical Support {company.phone}
      </HoverTypography>
    </CustomBox>
  );

  const renderAuthentication = (
    <Stack direction="row" spacing={2}>
      <CustomBox>
        <Iconify
          icon="ep:avatar"
          color="custom.grey.200"
          width={20}
          height={20}
          sx={{ "&:hover": { cursor: "pointer" } }}
        />
        <HoverTypography paragraph>Login</HoverTypography>
      </CustomBox>
      <CustomBox>
        <Iconify
          icon="uis:lock"
          color="custom.grey.200"
          width={20}
          height={20}
          sx={{ "&:hover": { cursor: "pointer" } }}
        />
        <HoverTypography paragraph>Register</HoverTypography>
      </CustomBox>
    </Stack>
  );
  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      bgcolor="custom.grey.100"
      paddingX="20rem"
      paddingTop="1rem"
    >
      {renderTechnicalSupport}
      {renderAuthentication}
    </FlexBox>
  );
};
