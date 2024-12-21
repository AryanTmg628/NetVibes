import { Box, Stack, Typography } from "@mui/material";
import { TopBar } from "../../components/top-bar/top-bar";
import { ResponsiveAppBar } from "../../components/responsive-app-bar/responsive-app-bar";
import { LandingFooter } from "../landing-page/landing-footer/landing-footer";
import FlexBox from "../../utils/box/styled-box";
import aryanImage from "../../assets/images/aryan.jpeg";
import prajwalSirImage from "../../assets/images/prajwalsir.jpg";

export const AboutUsView = () => {
  return (
    <Stack spacing={3}>
      <TopBar />
      <ResponsiveAppBar sx={{ boxShadow: "none !important" }} />
      <AboutUsMain />
      <LandingFooter />
    </Stack>
  );
};

const AboutUsMain = () => {
  const details = [
    {
      name: "Aryan Tamang",
      image: aryanImage,
      position: "Student",
    },
    {
      name: "Prajwal Sharma",
      image: prajwalSirImage,
      position: "Instructor",
    },
  ];
  return (
    <FlexBox
      flexDirection="column"
      gap={1}
      justifyContent="center"
      alignItems="center"
      padding={5}
      sx={{ height: "65vh" }}
    >
      <Typography variant="h6" color="text.black">
        A Job is worth doing together
      </Typography>
      <Typography variant="body1" color="custom.grey.500">
        Netvibes is a domain buying platform where users can purchase and manage
        domain names for their businesses or personal projects. One of its
        standout features is the ability to complete transactions in Nepali
        currency, making it convenient for users in Nepal. With a user-friendly
        interface, Netvibes simplifies the process of securing the perfect
        domain name for your online presence.
      </Typography>
      <FlexBox gap={9} mt={5}>
        {details?.map((detail) => (
          <Avatar
            image={detail.image}
            name={detail.name}
            position={detail.position}
          />
        ))}
      </FlexBox>
    </FlexBox>
  );
};

const Avatar = ({ image, name, position }) => {
  return (
    <Stack spacing={1}>
      <Box
        component="img"
        src={image}
        alt="image"
        sx={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
        }}
      />
      <Typography sx={{ textAlign: "center" }}>{name}</Typography>
      <Typography textAlign="center" color="custom.grey.500">
        {position}
      </Typography>
    </Stack>
  );
};
