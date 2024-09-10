import { FC } from "react";
import FlexBox from "../../../utils/box/styled-box";
import { Link, Typography } from "@mui/material";
import { ImageComponent } from "../../../components/common/image-component/image-component";
import esewaLogo from "../../../assets/images/esewa_logo.png";
import khalti from "../../../assets/images/khalti-logo.svg";

export const CopyRight: FC = () => {
  return (
    <FlexBox justifyContent="center">
      <FlexBox justifyContent="space-between" width={1} maxWidth="1000px">
        <Typography variant="body2" color="custom?.grey?.500">
          &copy; Copyrights @2024. All rights reserved by
          <Link>Aryan Tamang.</Link>
        </Typography>
        <FlexBox aria-label="payments-party">
          <ImageComponent src={esewaLogo} width="100px" />
          <ImageComponent src={khalti} width="100px" />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
