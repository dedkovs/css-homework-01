import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { light } from './theme';

ReactDOM.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={light}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
