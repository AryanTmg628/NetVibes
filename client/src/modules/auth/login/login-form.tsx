import { Stack, Typography, Box, Link } from "@mui/material";
import { CustomTextField } from "../../../components/hook-form/CustomTextField";
import { FormProvider, useForm } from "react-hook-form";
import HoverTypography from "../../../utils/typography/styled-typography";
import { CustomButton } from "../../../components/common/custom-button/custom-button";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./login-schema";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/actions/auth/auth-actions";
import { useState } from "react";
import { getAuthDetails } from "../../../store/selectors";
import { showSuccessToast } from "../../../utils/toastify/toastify";
import BlurLoader from "../../../components/common/blur-loader/blur-loader";
import { jwtDecode } from "jwt-decode";

export const LoginForm = () => {
  const [apiCalled, setApiCalled] = useState(false);
  const dispatch = useDispatch();

  const { loading, success, error } = useSelector(getAuthDetails);
  const defaultValues = {
    email: "",
    password: "",
  };
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = methods.handleSubmit((data) => {
    setApiCalled(true);
    dispatch(authActions.loginUser(data));
  });

  if (success && apiCalled) {
    // storing user details in store

    const token = success?.data[0];
    const decoded = jwtDecode(token);
    dispatch(authActions.setCurrentUser(decoded));
    showSuccessToast(success?.message);
    setApiCalled(false);
  }

  if (error && apiCalled) {
    methods.setError("email", {
      type: "manual",
      message: error?.message,
    });
    setApiCalled(false);
  }

  return (
    <Stack
      spacing={3}
      width="100%"
      bgcolor="#ffffff"
      padding="2rem"
      sx={{
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem",
        boxShadow: "2px 2px 10px #727272",

        "@media (max-width : 600px)": {
          borderRadius: "1rem",
        },
      }}
    >
      <Box>
        <Typography variant="h6" color="text.black">
          Login
        </Typography>
      </Box>
      <FormProvider {...methods}>
        <Stack spacing={2}>
          <CustomTextField name="email" label="Email" />
          <CustomTextField name="password" label="Password" />
          <Stack direction="row" justifyContent="flex-end">
            <HoverTypography variant="body1" color="custom.grey.200">
              Forget your password ?
            </HoverTypography>
          </Stack>
          <Stack direction="row" justifyContent="flex-end" pt={2}>
            <CustomButton
              bgColor="text.dark"
              value="Login"
              onClick={handleLogin}
            />
          </Stack>
        </Stack>
      </FormProvider>
      <Stack>
        <Typography variant="body2">
          Don't have an account ?
          <Box component="span">
            <Link
              href="/auth/register"
              color="text.black"
              fontWeight="bold"
              marginX={1}
            >
              Register
            </Link>
          </Box>
        </Typography>
      </Stack>
      {loading && <BlurLoader />}
    </Stack>
  );
};
