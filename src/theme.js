import { createTheme } from '@mui/material/styles';

export const maxWidth = 994;

const theme = {
  breakpoints: {
    keys: ['xs', 'sm', 'md'],
    values: {
      xs: 0,
      sm: 640,
      md: 768,
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
};

export const light = createTheme({
  ...theme,
  palette: {
    type: 'light',
    warmWhite: {
      main: '#fbf8f3',
    },
    blue1: {
      main: '#3180f5',
    },
    blue2: {
      main: '#1da1f2',
    },
    lightBlue: {
      main: '#d7f5f5',
    },
    white: {
      main: '#fff',
    },
    orange: {
      main: '#ffad23',
    },
    text: {
      black: '#000',
      white: '#fff',
      blue: '#3180f5',
      twitterBlue: '#00acee',
      grey: '#828282',
      bluegreen: '#1f7898',
    },
  },
});
