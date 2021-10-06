import { Theme } from '@react-navigation/native';

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividedColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividedColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#084f6a',
    background: '#fff',
    card: '#fff',
    text: '#000',
    border: '#000',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividedColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#75cedb',
    background: '#000',
    card: 'green',
    text: '#fff',
    border: 'orange',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTheme };

    case 'set_dark_theme':
      return { ...darkTheme };

    default:
      return state;
  }
};
