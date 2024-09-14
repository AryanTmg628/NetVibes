import { Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { CustomTextField } from "../hook-form/CustomTextField";
import { FormProvider, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import Iconify from "../common/iconify/iconify";
import { domainActions } from "../../store/actions/domain/domainActions";
import { useDispatch } from "react-redux";

export const SearchDomain: FC = ({ handleSubmit }) => {
  const defaultValues = {
    domainName: "",
  };

  const methods = useForm({
    defaultValues,
  });

  const dispatch = useDispatch();

  const onSubmit = methods.handleSubmit((data) => {
    //updating the redux
    dispatch(domainActions.setQueryDomain(data.domainName));
  });

  return (
    <FormProvider {...methods}>
      <Stack direction="row" marginTop="2rem">
        <CustomTextField
          name="domainName"
          placeholder="Search Your Domain"
          sx={{
            backgroundColor: "text.primary",
            borderRadiius: "1rem",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "text.primary",
              },
              "&:hover fieldset": {
                borderColor: "text.primary",
              },
              "&.Mui-focused fieldset": {
                borderColor: "text.primary",
              },
            },
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
          onClick={onSubmit}
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
