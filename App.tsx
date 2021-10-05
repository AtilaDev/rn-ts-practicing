import 'react-native-gesture-handler';
import * as React from 'react';
import { Navigator } from './src/navigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: string,
//     // background: 'yellow',
//     // card: string,
//     // text: string,
//     // border: string,
//     // notification: string,
//   },
// };

function App() {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
}

const AppState = ({ children }: { children: JSX.Element }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
