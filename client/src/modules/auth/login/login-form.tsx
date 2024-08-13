import { Stack, Typography, Box } from "@mui/material";
import { CustomTextField } from "../../../components/hook-form/CustomTextField";
import { FormProvider, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";

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
            <Typography variant="body1" color="text.black">
              Forget your password ?
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="flex-end" pt={2}>
            <LoadingButton variant="contained">Login </LoadingButton>
          </Stack>
        </Stack>
      </FormProvider>
    </Stack>
  );
};
