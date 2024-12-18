import { Stack, Tooltip, Typography } from "@mui/material";
import { useKhalti } from "../../../hooks/use-khalti/use-khalti";
import { LinearAlternativeLabel } from "../../auth/register/register-form";
import { Fragment, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomFormProvider } from "../../../components/hook-form/form-provider/form-provider";
import { CustomTextField } from "../../../components/hook-form/CustomTextField";
import FlexBox from "../../../utils/box/styled-box";
import { CustomCheckBox } from "../../../components/hook-form/custom-check-box";
import { getAuthDetails } from "../../../store/selectors";
import { useSelector } from "react-redux";
import domainSchemas from "./schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Payment } from "@mui/icons-material";
import { ImageComponent } from "../../../components/common/image-component/image-component";
import khaltiLogo from "../../../assets/images/khalti-logo.svg";
import { useNavigate } from "react-router-dom";
import BlurLoader from "../../../components/common/blur-loader/blur-loader";

export const DomainBuy = () => {
  const steps = ["Personal Information", "DNS Configuration", "Payment"];
  const [activeStep, setActiveStep] = useState(0);

  const allSteps = [
    <CredentialsForm />,
    <DNSConfigurationForm />,
    <PaymentSection />,
  ];

  const getForm = () => allSteps[activeStep];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <Stack>
      <Typography variant="h6" color="primary.light" textAlign="center">
        Buying Aryan.com.np Domain
      </Typography>
      <Stack direction="row" justifyContent="center" marginY={3}>
        <Typography
          variant="body2"
          textAlign="center"
          width="40%"
          color="custom.grey.200"
        >
          When purchasing a domain, you need to configure its DNS settings to
          link the domain to your server or hosting provider.Moreover your
          certain credentials should also be provided.
        </Typography>
      </Stack>

      <Stack width={1} px={4} boxSizing="border-box">
        <LinearAlternativeLabel
          getCurrentForm={getForm}
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          steps={steps}
        />
      </Stack>
    </Stack>
  );
};

const CredentialsForm = () => {
  const defaultValues = {
    first_name: "",
    last_name: "",
    state: "",
    country: "",
    street_address: "",
    city: "",
    phone_number: "",
  };

  const autoFillDefaultValues = {
    auto_fill: false,
  };

  const { currentUser } = useSelector(getAuthDetails);

  const autoFillMethods = useForm({ defaultValues: autoFillDefaultValues });
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(domainSchemas.credentialFormSchema),
  });

  const autoFill = autoFillMethods.watch("auto_fill");

  useEffect(() => {
    if (autoFill) methods.reset(currentUser);
    else methods.reset(defaultValues);
  }, [autoFill, currentUser]);

  return (
    <Fragment>
      <CustomFormProvider methods={autoFillMethods}>
        <Stack paddingY={3}>
          <CustomCheckBox
            name="auto_fill"
            label="Auto fill with this account details"
          />
        </Stack>
      </CustomFormProvider>
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
    </Fragment>
  );
};

const DNSConfigurationForm = () => {
  const defaultValues = {
    primary_name_server: "",
    secondary_name_server: "",
  };

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(domainSchemas.dnsConfigurationFormSchema),
  });

  return (
    <CustomFormProvider methods={methods}>
      <Stack marginTop={3}>
        <Typography variant="h6" color="primary.light">
          Name server
        </Typography>
      </Stack>
      <Stack spacing={2} py={3}>
        <FlexBox gap={1}>
          <Stack width={1} spacing={1}>
            <CustomTextField
              name="primary_name_server"
              label="Primary name server"
            />
            <Typography variant="body2" color="custom.grey.500">
              eg: ns1.hosting.net.np
            </Typography>
          </Stack>
          <Stack width={1} spacing={1}>
            <CustomTextField
              name="secondary_name_server"
              label="Secondary name server"
            />
            <Typography variant="body2" color="custom.grey.500">
              eg: ns2.hosting.net.np
            </Typography>
          </Stack>
        </FlexBox>
      </Stack>
    </CustomFormProvider>
  );
};

const PaymentSection = () => {
  const product = { price: 1, id: 1, name: "" };
  const navigate = useNavigate();

  const { initiate, initiationError, isLoading } = useKhalti({
    onSuccess: (response) => {
      // Navigate to success page with payment details
      navigate(`/success`, { state: { product, response } });
    },
    onError: (error) => {
      console.error("Payment error:", error.message);
    },
  });

  const handlePayment = () => {
    if (product) {
      const paymentRequest = {
        amount: product.price * 100, // Convert NPR to paisa
        purchase_order_id: `order-${product.id}`,
        purchase_order_name: product.name,
        return_url: "http://localhost:80/success",
        website_url: "http://localhost:80",
      };
      initiate(paymentRequest);
    }
  };
  return (
    <FlexBox
      justifyContent="center"
      paddingTop={5}
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      {isLoading && <BlurLoader />}
      {initiationError && (
        <Typography variant="body1">
          Error: {initiationError.message}
        </Typography>
      )}
      <FlexBox
        flexDirection="column"
        gap={1}
        sx={{
          width: "500px",
          borderRadius: "0.6rem",
          padding: "1rem",
          boxShadow: "2px 2px 5px #727272",
        }}
      >
        <Typography variant="body2">Choose Payment Method </Typography>
        <Typography variant="body1" color="custom.grey.500">
          Select your prefered payment option{" "}
        </Typography>
        <FlexBox alignItems="center" gap={1} mt={3} onClick={handlePayment}>
          <Tooltip title="Pay with Khalti" arrow>
            <ImageComponent
              src={khaltiLogo}
              width="100px"
              cursorPointer={true}
            />
          </Tooltip>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
