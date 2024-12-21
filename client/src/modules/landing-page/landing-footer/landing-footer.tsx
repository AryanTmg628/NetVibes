import React from "react";
import { CopyRight } from "../copyright-section/copyright-section";
import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../../../components/common/logo/logo";
import FlexBox from "../../../utils/box/styled-box";
import { ImageComponent } from "../../../components/common/image-component/image-component";
import khaltiIcon from "../../../assets/images/khalti-logo.svg";

export const LandingFooter = () => {
  return (
    <Stack
      sx={{ backgroundColor: "custom.grey.100", padding: "2rem" }}
      spacing={2}
    >
      <PaymentOptions />
      <CopyRight />
    </Stack>
  );
};

const PaymentOptions = () => {
  return (
    <Stack>
      <FlexBox gap={2} justifyContent="center">
        <FlexBox flexDirection="column" alignItems="center" gap={1}>
          <ImageComponent src={khaltiIcon} width="70px" />
          <Typography variant="body2" color="custom.grey.700">
            Payment Accepted{" "}
          </Typography>
        </FlexBox>
      </FlexBox>
    </Stack>
  );
};
