import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import { createTheme, ThemeProvider } from '@mui/material';

// Create a custom theme with Montserrat font
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </ThemeProvider>

  );
}

export default App;
