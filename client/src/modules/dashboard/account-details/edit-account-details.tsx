import { Stack, Typography } from "@mui/material";
import FlexBox from "../../../utils/box/styled-box";
import { CustomTextField } from "../../../components/hook-form/CustomTextField";
import { getAuthDetails } from "../../../store/selectors";
import { useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { CustomFormProvider } from "../../../components/hook-form/form-provider/form-provider";
import { CustomButton } from "../../../components/common/custom-button/custom-button";

export const EditAccountDetails = () => {
  return (
    <Stack>
      <Typography variant="h5" color="text.black">
        Account Details
      </Typography>
      <AccountDetailsForm />
    </Stack>
  );
};

const AccountDetailsForm = () => {
  const { currentUser } = useSelector(getAuthDetails);

  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
  };

  const methods = useForm({
    defaultValues,
  });

  return (
    <CustomFormProvider methods={methods}>
      <Stack spacing={3} marginTop={5}>
        <FlexBox gap={2}>
          <CustomTextField name="first_name" label="First name" />
          <CustomTextField name="last_name" label="Last name" />
          <CustomTextField name="email" label="Email address" />
        </FlexBox>
        <FlexBox gap={2}>
          <CustomTextField name="username" label="Username" />
          <CustomTextField name="country" label="Country" />
          <CustomTextField name="city" label="City" />
        </FlexBox>
        <FlexBox gap={2}>
          <CustomTextField name="state" label="State" />
          <CustomTextField name="street_address" label="Street address" />
          <CustomTextField name="phone_number" label="Phone number" />
        </FlexBox>
        <Stack width="8rem">
          <CustomButton value="Save changes" />
        </Stack>
      </Stack>
    </CustomFormProvider>
  );

};
