import { Typography, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { CustomTextField } from "../../../components/hook-form/CustomTextField";
import { CustomFormProvider } from "../../../components/hook-form/form-provider/form-provider";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomPasswordField } from "../../../components/hook-form/custom-password-field";
import PasswordStrengthBar from "react-password-strength-bar";
import { CustomButton } from "../../../components/common/custom-button/custom-button";

export const ChangePassword = () => {
  return (
    <Stack>
      <Typography variant="h5" color="text.black">
        Change Password
      </Typography>
      <ChangePasswordForm />
    </Stack>
  );
};

const changePasswordFormSchema = Yup.object().shape({
  current_password: Yup.string().required("Current password is required."),
  new_password: Yup.string()
    .min(8, "Password must be atleast 8 characters.")
    .required("Password is required."),
  confirm_password: Yup.string()
    .oneOf(
      [Yup.ref("new_password"), null],
      "Password and confirm password must match.",
    )
    .required("Confirm password is required."),
});

const ChangePasswordForm = () => {
  const defaultValues = {
    current_password: "",
    new_password: "",
    confirm_passwor: "",
  };

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(changePasswordFormSchema),
  });

  const onSubmit = methods.handleSubmit((data) => console.log(data));
  const password: string = methods.watch("new_password");

  return (
    <CustomFormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} marginTop={5}>
        <CustomPasswordField name="current_password" label="Current Password" />
        <CustomPasswordField name="new_password" label="New Password" />
        {password && password.length > 0 && (
          <PasswordStrengthBar password={password || ""} />
        )}
        <CustomPasswordField name="confirm_password" label="Confirm Password" />
        <Stack width="max-content">
          <CustomButton value="Change Password" type="submit" />
        </Stack>
      </Stack>
    </CustomFormProvider>
  );
};
