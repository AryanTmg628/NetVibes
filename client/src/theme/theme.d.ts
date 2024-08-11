import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom?: {
      grey: string;
    };
  }
  // Allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      grey: string;
    };
  }
}
