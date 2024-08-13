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
  },
});

export default theme;
