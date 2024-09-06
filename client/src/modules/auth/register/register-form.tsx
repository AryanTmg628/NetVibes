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
import { FC, useState } from "react";
import FlexBox from "../../../utils/box/styled-box";
import { CustomTextField } from "../../../components/hook-form/CustomTextField";
import { useForm } from "react-hook-form";
import {
  PersonalInformationSchema,
  AccountSecuirtyInformationSchema,
} from "./register-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomFormProvider } from "../../../components/hook-form/form-provider/form-provider";
import {
  AccountSecurityInterface,
  LinearAlternativeInterface,
  PersonInformationDataInterface,
} from "../../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/actions/auth/auth-actions";
import { getAuthDetails } from "../../../store/selectors";
import BlurLoader from "../../../components/common/blur-loader/blur-loader";
import { showSuccessToast } from "../../../utils/toastify/toastify";
import { VerficationDialog } from "../../../modals/auth/verification-dialog";

const steps = ["Personal Information", "Account Security"];

export const RegisterForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showVerificationDialog, setShowVerificationDialog] = useState(false);
  const [apiCalled, setApiCalled] = useState(false);
  const [formData, setFormData] = useState({});
  const { loading, error, success } = useSelector(getAuthDetails);
  const dispatch = useDispatch();

  const handleNext = async () => {
    if (activeStep === 0) {
      onPersonalSubmit();
    } else {
      onAccountSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getCurrentForm = () => {
    return allSteps[activeStep];
  };

  const methods1 = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      state: "",
      country: "",
      street_address: "",
      city: "",
      phone_number: "",
    },
    resolver: yupResolver(PersonalInformationSchema),
  });

  const methods2 = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    resolver: yupResolver(AccountSecuirtyInformationSchema),
  });

  const allSteps = [
    <PersonalInformationForm methods={methods1} />,
    <AccountSecurity methods={methods2} />,
  ];

  const { handleSubmit: personalHandleSubmit } = methods1;
  const { handleSubmit: accountHandleSubmit, setError } = methods2;

  const onPersonalSubmit = personalHandleSubmit(
    (data: PersonInformationDataInterface) => {
      setFormData((prev) => ({ ...prev, ...data }));
      setActiveStep(activeStep + 1);
    },
  );
  const onAccountSubmit = accountHandleSubmit(
    (data: AccountSecurityInterface) => {
      setFormData((prev) => ({ ...prev, ...data }));
      setApiCalled(true);
      dispatch(authActions.registerUser({ ...formData, ...data }));
    },
  );

  if (error && apiCalled) {
    const errorKeys = Object.keys(error?.data);
    if (!errorKeys) return;

    errorKeys.map((err) => {
      setError(err, {
        type: "manual",
        message: error?.data?.[err]?.[0],
      });
    });

    setApiCalled(false);
  }

  if (success && apiCalled) {
    setShowVerificationDialog(true);
    showSuccessToast(success.message);
    setApiCalled(false);
  }

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
        <LinearAlternativeLabel
          getCurrentForm={getCurrentForm}
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
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
      {loading && <BlurLoader />}
      {showVerificationDialog && (
        <VerficationDialog
        // email={formData["email"]}
        // username={formData["username"]}
        />
      )}
    </FlexBox>
  );
};

const LinearAlternativeLabel: FC<LinearAlternativeInterface> = ({
  getCurrentForm,
  activeStep,
  handleNext,
  handleBack,
}) => {
  const theme = useTheme();

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
          {getCurrentForm()}
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
};

const PersonalInformationForm: FC<{ methods: any }> = ({ methods }) => {
  return (
    <CustomFormProvider methods={methods}>
      <Stack spacing={2}>
        <FlexBox gap={1}>
          <CustomTextField name="first_name" label="First name" />
          <CustomTextField name="last_name" label="Last name" />
        </FlexBox>

        <FlexBox gap={1}>
          <CustomTextField name="street_address" label="Street address" />
          <CustomTextField name="city" label="City" />
        </FlexBox>
        <CustomTextField name="state" label="State" />
        <CustomTextField name="country" label="Country" />
        <CustomTextField name="phone_number" label="Phone number" />
      </Stack>
    </CustomFormProvider>
  );
};

const AccountSecurity: FC<{ methods: any }> = ({ methods }) => {
  return (
    <CustomFormProvider methods={methods}>
      <Stack spacing={2}>
        <CustomTextField name="email" label="Email" />
        <CustomTextField name="username" label="Username" />

        <CustomTextField name="password" label="Password" />
        <CustomTextField name="confirm_password" label="Confirm Password" />
      </Stack>
    </CustomFormProvider>
  );
};
