import {
  Stack,
  Typography,
  Stepper,
  Button,
  Box,
  Step,
  StepLabel,
  useTheme,
  Link,
} from "@mui/material";
import { useState } from "react";
import FlexBox from "../../../utils/box/styled-box";
import { CustomTextField } from "../../../components/hook-form/CustomTextField";
import { FormProvider, useForm } from "react-hook-form";

const steps = ["Personal Information", "Account Security"];
export const RegisterForm = () => {
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    state: "",
    country: "",
    street_address: "",
    city: "",
  };

  const methods = useForm({
    defaultValues,
  });
  return (
    <FlexBox
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={1}
      width={1}
    >
      <Stack spacing={2} width="95%">
        <Typography variant="h5" color="text.black" textAlign="center">
          Register Here
        </Typography>
        <FormProvider {...methods}>
          <LinearAlternativeLabel />
        </FormProvider>
        <Stack>
          <Typography variant="body2">
            Already have an account?
            <Box component="span">
              <Link
                href="/auth/login"
                color="text.black"
                fontWeight="bold"
                marginX={1}
              >
                Login
              </Link>
            </Box>
          </Typography>
        </Stack>
      </Stack>
    </FlexBox>
  );
};

export default function LinearAlternativeLabel() {
  const [activeStep, setActiveStep] = useState(0);

  const theme = useTheme();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const allSteps = [<PersonalInformationForm />, <AccountSecurity />];

  const getForm = () => {
    return allSteps[activeStep];
  };

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-label, & .Mui-active": {
                    color: `${theme?.palette?.text?.black} !important`,
                  },

                  "& .Mui-completed": {
                    color: `${theme?.palette?.text?.black} !important`,

                    "& .MuiStepLabel-label": {
                      color: "#ffffff !important",
                    },
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        <Typography sx={{ my: 1 }} variant="h4" color="text.black">
          {getForm()}
        </Typography>
        <Box sx={{ display: "flex" }}>
          {activeStep !== 0 && (
            <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Register" : "Next"}
          </Button>
        </Box>
      </>
    </>
  );
}

const PersonalInformationForm = () => {
  return (
    <Stack spacing={2}>
      <FlexBox gap={1}>
        <CustomTextField name="first_name" label="First name" />
        <CustomTextField name="last_name" label="Last name" />
      </FlexBox>

      <FlexBox gap={1}>
        <CustomTextField name="street_address" label="Street address" />
        <CustomTextField name="city" label="City" />
      </FlexBox>
      <CustomTextField name="State" label="State" />
      <CustomTextField name="Country" label="Country" />
    </Stack>
  );
};

const AccountSecurity = () => {
  return (
    <Stack spacing={2}>
      <CustomTextField name="email" label="Email" />
      <CustomTextField name="username" label="Username" />

      <CustomTextField name="password" label="Password" />
      <CustomTextField name="confirm_password" label="Confirm Password" />
    </Stack>
  );
};
