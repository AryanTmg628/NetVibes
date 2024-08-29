import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { CustomTextFieldInterface } from "../../interfaces";
import { FC } from "react";

export const CustomTextField: FC<CustomTextFieldInterface> = ({
  name,
  label,
  placeholder,
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
          placeholder={placeholder}
          onChange={(event) => {
            field.onChange(event.target.value);
          }}
          // sx={{
          //   ...sx,
          //   "&:hover": {
          //     color: "blue",
          //   },
          // }}
          {...other}
        />
      )}
    />
  );
};
