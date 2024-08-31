import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel, {
  formControlLabelClasses,
} from "@mui/material/FormControlLabel";

// ----------------------------------------------------------------------

export function CustomCheckBox({ name, label, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label={label}
          />

          {!!error && (
            <FormHelperText error={!!error}>{error?.message}</FormHelperText>
          )}
        </div>
      )}
    />
  );
}

export function CustomMultipleCheckBox({ options, ...other }) {
  return (
    <FormControl>
      {options?.map((option, index) => (
        <CustomCheckBox name={option?.name} label={option?.label} />
      ))}
    </FormControl>
  );
}

//
// RHFMultiCheckbox.propTypes = {
//   helperText: PropTypes.string,
//   label: PropTypes.string,
//   id: PropTypes.string || PropTypes.number,
//   name: PropTypes.string,
//   options: PropTypes.array,
//   row: PropTypes.bool,
//   spacing: PropTypes.number,
//   sx: PropTypes.object,
// };
