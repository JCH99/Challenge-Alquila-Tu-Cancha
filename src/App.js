import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline, Container } from "@mui/material";
import Stepper from "./components/StepperUX";
import Header from "./components/layout/Header";
import ContextProvider from "./store/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Stepper />
        </Container>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
