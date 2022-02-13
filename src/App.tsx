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
import {Provider} from 'react-redux';
import {store} from './store/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
