import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HomePage, AuthPage, NotFoundPage, PresentationPage } from './pages';
import { lightTheme } from './themes';

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PresentationPage />} />
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/auth" element={<AuthPage />} />
            {/* <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            /> */}
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
