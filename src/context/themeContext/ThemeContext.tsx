import React, { createContext, useEffect, useReducer } from 'react';
import { useColorScheme } from 'react-native';
import {
  lightTheme,
  themeReducer,
  ThemeState,
  darkTheme,
} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  // To use this behaviour about color change from system on Android
  // is better to use AppState and Appearance (both from react-native)
  // If you are using only iOS, the next snippet is enough
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  ); //TODO: Read global theme

  useEffect(() => {
    colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' });
    console.log('Dark');
  };
  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' });
    console.log('Light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
