import './App.css';
import WeatherApp from './assets/WeatherApp'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  
  const [isBlack, setIsBlack] = useState(false);

  function handleLigth() {
    setIsBlack(!isBlack);
  };

  return (
    <div className={isBlack ? 'black-background' : 'white-background'}>
      <CssBaseline />
      { <FontAwesomeIcon 
        icon={isBlack ? faSun : faMoon} 
        className="icon" 
        onClick={handleLigth} 
      />}
    <WeatherApp/>
    </div>
  );
}