import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { useKhalti } from "../../../hooks/use-khalti/use-khalti";
import { LinearAlternativeLabel } from "../../auth/register/register-form";
import { FC, Fragment, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomFormProvider } from "../../../components/hook-form/form-provider/form-provider";
import { CustomTextField } from "../../../components/hook-form/CustomTextField";
import FlexBox from "../../../utils/box/styled-box";
import { CustomCheckBox } from "../../../components/hook-form/custom-check-box";
import { getAuthDetails, getDomainDetails } from "../../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import domainSchemas from "./schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Payment } from "@mui/icons-material";
import { ImageComponent } from "../../../components/common/image-component/image-component";
import khaltiLogo from "../../../assets/images/khalti-logo.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import BlurLoader from "../../../components/common/blur-loader/blur-loader";
import axios from "axios";
import paymentServices from "../../../services/payment/payment-services";
import { domainActions } from "../../../store/actions/domain/domainActions";

export const DomainBuy = () => {
  const steps = ["Personal Information", "DNS Configuration", "Payment"];
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    personalInfo: {
      first_name: "",
      last_name: "",
      state: "",
      country: "",
      street_address: "",
      city: "",
      phone_number: "",
    },
    dnsConfig: {
      primary_name_server: "",
      secondary_name_server: "",
    },
  });
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const allSteps = [
    <CredentialsForm
      defaultValues={formData.personalInfo}
      handleNext={handleNext}
      handleBack={handleBack}
      activeStep={activeStep}
      steps={steps}
      updateData={(data) =>
        setFormData((prev) => ({ ...prev, personalInfo: data }))
      }
    />,
    <DNSConfigurationForm
      defaultValues={formData.dnsConfig}
      handleNext={handleNext}
      handleBack={handleBack}
      activeStep={activeStep}
      steps={steps}
      updateData={(data) =>
        setFormData((prev) => ({ ...prev, dnsConfig: data }))
      }
    />,
    <PaymentSection details={formData} handleBack={handleBack} />,
  ];

  const getForm = () => allSteps[activeStep];
  const [searchParams] = useSearchParams();
  const tld = searchParams.get("tld");
  const name = searchParams.get("name");

  return (
    <Stack>
      <Typography variant="h6" color="primary.light" textAlign="center">
        Buying Domain {name}.{tld}
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

const CredentialsForm = ({
  defaultValues,
  handleNext,
  handleBack,
  activeStep,
  steps,
  updateData,
}) => {
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

  const nextHandle = methods.handleSubmit((data) => {
    const formdata = methods.getValues();
    updateData(formdata);
    handleNext();
  });

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
        <Box sx={{ display: "flex" }}>
          {activeStep !== 0 && (
            <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          <Box sx={{ flexGrow: 1 }} />
          {activeStep < 2 && (
            <Button variant="contained" onClick={nextHandle}>
              {activeStep === steps.length - 1 ? "Register" : "Next"}
            </Button>
          )}
        </Box>
      </CustomFormProvider>
    </Fragment>
  );
};

const DNSConfigurationForm = ({
  defaultValues,
  handleNext,
  handleBack,
  activeStep,
  steps,
  updateData,
}) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(domainSchemas.dnsConfigurationFormSchema),
  });
  const nextHandle = methods.handleSubmit((data) => {
    const formdata = methods.getValues();
    updateData(formdata);
    handleNext();
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
      <Box sx={{ display: "flex" }}>
        {activeStep !== 0 && (
          <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
        )}
        <Box sx={{ flexGrow: 1 }} />
        {activeStep < 2 && (
          <Button variant="contained" onClick={nextHandle}>
            {activeStep === steps.length - 1 ? "Register" : "Next"}
          </Button>
        )}
      </Box>
    </CustomFormProvider>
  );
};

const PaymentSection: FC<{ details: Object }> = ({ details, handleBack }) => {
  const [searchParams] = useSearchParams();
  const tld = searchParams.get("tld");
  const name = searchParams.get("name");
  const { tldsList } = useSelector(getDomainDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tldsList.length === 0) dispatch(domainActions.fetchTLDLists());
  }, [tldsList]);

  const getAmount = () => {
    const selectedTLD = tldsList.find((tl) => tl.name == tld);
    if (selectedTLD) return selectedTLD.price_pm;
  };

  const handlePayment = async () => {
    const paymentRequest = {
      amount: getAmount() * 100, // Convert NPR to paisa
      purchase_order_id: 1,
      purchase_order_name: `${name}.${tld}`,
      return_url: "http://localhost:80/payment-result",
      website_url: "http://localhost:80",
      customer_info: {
        name: "Aryan Tamang",
        email: "aryantamang@tuicms.edu.np",
        phone: "9767980111",
      },
    };
    try {
      const res = await paymentServices.sendPaymentDetails(paymentRequest);
      if (res.success) {
        dispatch(
          domainActions.setRegisterDomainDetails({
            ...details,
            ["domain_name"]: `${name}.${tld}`,
          }),
        );
        window.location.href = res.data.payment_url;
      }
    } catch (error) {
      console.log(error);
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
      <Box sx={{ display: "flex" }}>
        <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
      </Box>
    </FlexBox>
  );
};
