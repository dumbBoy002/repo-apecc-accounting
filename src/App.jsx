import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import MainLayout from './components/layout/MainLayout';
import AppRouter from './router/AppRouter';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </HashRouter>
    </ThemeProvider>
  );
}
