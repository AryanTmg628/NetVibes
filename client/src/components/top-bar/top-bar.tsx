import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import FlexBox from "../../utils/box/styled-box";
import HoverTypography from "../../utils/typography/styled-typography";
import Iconify from "../common/iconify/iconify";
import company from "/src/data/company.json";
import { useNavigate } from "react-router-dom";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "0.5rem",

  "&:hover *": {
    color: theme.palette.primary.light,
  },
}));

export const TopBar: FC = () => {
  const redirect = useNavigate();

  const changePath = (path: string) => {
    redirect(`/${path}`);
  };
  const renderTechnicalSupport = (
    <CustomBox alignItems="center">
      <Iconify
        icon="material-symbols-light:call"
        color="custom.grey.200"
        width={15}
        sx={{ "&:hover": { cursor: "pointer" } }}
      />
      <HoverTypography>24x7 Technical Support {company.phone}</HoverTypography>
    </CustomBox>
  );

  const renderAuthentication = (
    <Stack direction="row" spacing={2}>
      <CustomBox alignItems="center" onClick={() => changePath("auth/login")}>
        <Iconify
          icon="ep:avatar"
          color="custom.grey.200"
          width={15}
          sx={{ "&:hover": { cursor: "pointer" } }}
        />
        <HoverTypography>Login</HoverTypography>
      </CustomBox>
      <CustomBox
        alignItems="center"
        onClick={() => changePath("auth/register")}
      >
        <Iconify
          icon="uis:lock"
          color="custom.grey.200"
          width={15}
          sx={{ "&:hover": { cursor: "pointer" } }}
        />
        <HoverTypography>Register</HoverTypography>
      </CustomBox>
    </Stack>
  );
  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      bgcolor="custom.grey.100"
      paddingX="3rem"
      paddingY="1rem"
      sx={{ display: { md: "flex", sm: "flex", xs: "none" } }}
    >
      {renderTechnicalSupport}
      {renderAuthentication}
    </FlexBox>
  );
};
