import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
import { TopBar } from "./components/top-bar/top-bar";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { IntroCard } from "./components/intro-card/intro-card";
import { ResponsiveAppBar } from "./components/responsive-app-bar/responsive-app-bar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <TopBar />
        <ResponsiveAppBar />
        <IntroCard />
      </Box>
    </ThemeProvider>
  );
}

export default App;
