import React from 'react';
import Home from './pages/Home';
import { createMuiTheme,ThemeProvider,responsiveFontSizes } from '@material-ui/core/styles';
import { SignIn, SignOUt } from './components';


let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fafafa',
      main: '#f5f5f5',
      dark: '#e0e0e0',
    // contrastText: getContrastText(palette.primary[500]),
    },
    secondary: {
      light: '#616161',
      main:  '#b71c1c',
      dark: '#010101',
      //contrastText: getContrastText(palette.secondary.A400),
    },
    error: {
      light: '#e53935',
      main: '#d50000',
      dark: '#b71c1c',
     // contrastText: getContrastText(palette.error[500]),
    },
  },
});

theme = responsiveFontSizes(theme);


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
       <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
