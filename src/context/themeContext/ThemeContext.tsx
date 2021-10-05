import React, { createContext } from 'react';

interface ThemeContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const theme = {};

  const setDarkTheme = () => {
    console.log('Dark');
  };
  const setLightTheme = () => {
    console.log('Light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
