import { Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { CustomTextField } from "../hook-form/CustomTextField";
import { FormProvider, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import Iconify from "../common/iconify/iconify";

export const SearchDomain: FC = () => {
  const defaultValues = {
    domainName: "",
  };

  const methods = useForm({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Stack direction="row" marginTop="2rem">
        <CustomTextField
          name="domainName"
          label="Search Your Domain"
          // shrink={false}
          sx={{
            backgroundColor: "text.primary",
          }}
        />
        <LoadingButton
          sx={{
            backgroundColor: "primary.light",
            p: "0rem 1rem",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          <Iconify icon="ic:outline-search" width={30} />
          <Typography variant="body2" sx={{ ml: "0.2rem" }}>
            Search
          </Typography>
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
};
