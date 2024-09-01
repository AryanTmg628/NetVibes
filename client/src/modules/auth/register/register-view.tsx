import { Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { ImageComponent } from "../../../components/common/image-component/image-component";
import { RegisterForm } from "./register-form";
import Iconify from "../../../components/common/iconify/iconify";
import company from "../../../data/company.json";
import FlexBox from "../../../utils/box/styled-box";
import { CustomButton } from "../../../components/common/custom-button/custom-button";
import { VerficationDialog } from "../../../modals/auth/verification-dialog";

export const RegisterView: FC = () => {
  return (
    <Grid container height="100vh">
      <Grid
        item
        xs={5}
        justifyContent="center"
        sx={{
          display: { md: "flex", sm: "flex", xs: "none" },
        }}
        alignItems="center"
      >
        <AboutUsView />
      </Grid>
      <Grid item xs={12} md={6.5} sm={6.5}>
        <RegisterForm />
      </Grid>
      <VerficationDialog />
    </Grid>
  );
};

const AboutUsView = () => {
  return (
    <FlexBox flexDirection="column" alignItems="center" gap={3}>
      <Iconify
        icon="solar:map-arrow-down-bold"
        width="4rem"
        sx={{
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
      <Typography variant="h3">Join Us </Typography>
      <Typography variant="h6" color="text.black" textAlign="center">
        Subscribe {company?.name} to use our hosting and domain services.{" "}
      </Typography>

      <Typography variant="h6" color="text.black" textAlign="center">
        If you want to know more about us, our all details can be found on our
        webpage.
      </Typography>
      <CustomButton value="About us" />
    </FlexBox>
  );
};
