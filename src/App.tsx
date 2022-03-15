/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import RootNavigator from './navigations/RootNavigator';
import Crashlytics from '@react-native-firebase/crashlytics';
import {AppProviders} from './providers/AppProviders';

const consoleError = console.error;
console.error = function (error) {
  Crashlytics().recordError(error);
  consoleError(error);
};

const App = () => {
  return (
    <AppProviders>
      <RootNavigator />
    </AppProviders>
  );
};

export default App;
