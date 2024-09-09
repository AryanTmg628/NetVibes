import {
  TextField,
  FormHelperText,
  Stack,
  InputAdornment,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { CustomTextFieldInterface } from "../../interfaces";
import { FC } from "react";
import Iconify from "../common/iconify/iconify";
import { useBoolean } from "../../hooks/use-boolean/use-boolean";

export const CustomPasswordField: FC<CustomTextFieldInterface> = ({
  name,
  label,
  placeholder,
  ...other
}) => {
  const { control } = useFormContext();
  const password = useBoolean(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack width={1}>
          <TextField
            {...field}
            type={password.value ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={field.value}
            error={!!error}
            label={label}
            placeholder={placeholder}
            onChange={(event) => {
              field.onChange(event.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Iconify
                    icon={
                      password.value
                        ? "akar-icons:eye-open"
                        : "basil:eye-closed-outline"
                    }
                    onClick={password.onToggle}
                  />
                </InputAdornment>
              ),
            }}
            {...other}
          />

          {error && (
            <FormHelperText sx={{ px: 2 }} error>
              {error.message}
            </FormHelperText>
          )}
        </Stack>
      )}
    />
  );
};
