import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { CustomTextFieldInterface } from "../../interfaces";
import { FC } from "react";

export const CustomTextField: FC<CustomTextFieldInterface> = ({
  name,
  label,
  sx,
  shrink = true,
  ...other
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          variant="outlined"
          fullWidth
          value={field.value}
          error={!!error}
          label={label}
          placeholder={label}
          InputLabelProps={shrink ? undefined : { shrink: false }}
          onChange={(event) => {
            field.onChange(event.target.value);
          }}
          sx={{
            ...sx,
            "&:hover": {
              color: "blue",
            },
          }}
        />
      )}
    />
  );
};
