import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./themes";
import { MainLayout } from './components/layout';
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <MainLayout>
          <HomePage/>
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
