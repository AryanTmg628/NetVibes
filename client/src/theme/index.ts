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
          textTransform: "capitalize",
          backgroundColor: palette.text.black,
          color: palette.text.primary,
          "&:hover": {
            backgroundColor: palette.text.black,
            color: palette.text.primary,
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
              borderColor: palette.text.black, // Border color on hover
            },
            "& .MuiOutlinedInput-input": {
              color: palette.text.black,
            },
          },
        },
      },
    },
  },
});

export default theme;
