import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";

const theme = createTheme({
  palette: {
    ...palette,
  },
  typography: {
    ...typography,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: palette.primary.dark,
          color: palette.text.primary,
          "&:hover": {
            backgroundColor: palette.primary.dark,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: palette.custom.grey["300"], // Default border color
            },
            "&:hover fieldset": {
              borderColor: palette.text.black, // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: palette.primary.dark, // Border color when focused
            },
          },
        },
      },
    },
  },
});

export default theme;
