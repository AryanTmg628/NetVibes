import { Stack, Typography, Box, Link, useTheme } from "@mui/material";
import { CustomTextField } from "../../../components/hook-form/CustomTextField";
import { FormProvider, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import HoverTypography from "../../../utils/typography/styled-typography";
import { CustomButton } from "../../../components/common/custom-button/custom-button";

export const LoginForm = () => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const methods = useForm({ defaultValues });

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
            <CustomButton bgColor="text.dark" value="Login" />
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
    </Stack>
  );
};
