import React from "react";
import { CopyRight } from "../copyright-section/copyright-section";
import { Box, Stack } from "@mui/material";
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
      <Logo />
      <FlexBox gap={2}>
        <FlexBox
          alignItems="center"
          paddingX={1}
          paddingY={0.5}
          sx={{
            backgroundColor: "text.primary",
            width: "100px",
            boxSizing: "border-box",
            borderRadius: "0.5rem",
            border: "1px solid custom.grey.500",
          }}
        >
          <ImageComponent
            src="https://cdn.esewa.com.np/ui/images/esewa_og.png?111"
            width="70px"
          />
        </FlexBox>
        <FlexBox
          alignItems="center"
          paddingX={1}
          paddingY={0.5}
          sx={{
            backgroundColor: "text.primary",
            width: "100px",
            boxSizing: "border-box",
            borderRadius: "0.5rem",
          }}
        >
          <ImageComponent src={khaltiIcon} width="70px" />
        </FlexBox>
      </FlexBox>
    </Stack>
  );
};
