/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import RootNavigator from './navigations/RootNavigator';
import {darkTheme, lightTheme} from './theme/themes';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
