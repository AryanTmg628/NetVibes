import { Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { CustomTextField } from "../hook-form/CustomTextField";
import { FormProvider, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import Iconify from "../common/iconify/iconify";
import { domainActions } from "../../store/actions/domain/domainActions";
import { useDispatch, useSelector } from "react-redux";
import { getDomainDetails } from "../../store/selectors";

export const SearchDomain: FC<{ handleClick: () => void }> = ({
  handleClick,
}) => {
  const { loading, queryDomain } = useSelector(getDomainDetails);
  const defaultValues = {
    domainName: queryDomain || "",
  };

  const methods = useForm({
    defaultValues,
  });

  const dispatch = useDispatch();

  const onSubmit = methods.handleSubmit((data) => {
    //updating the redux
    dispatch(domainActions.setQueryDomain(data.domainName));

    if (handleClick) handleClick();
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
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
              color: "white",
              backgroundColor: "primary.light",
              p: "0rem 1rem",
              "&:hover": {
                backgroundColor: "primary.light",
              },

              "& .MuiLoadingButton-loadingIndicator": {
                color: "text.primary",
              },
            }}
            loading={loading}
            onClick={onSubmit}
          >
            <Iconify icon="ic:outline-search" width={30} />
            <Typography variant="body2" sx={{ ml: "0.2rem" }}>
              Search
            </Typography>
          </LoadingButton>
        </Stack>
      </form>
    </FormProvider>
  );
};
