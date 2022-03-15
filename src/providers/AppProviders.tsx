import React, {ComponentClass, ReactNode, FC, Suspense} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import AlertProvider from '../components/Alert/AlertProvider';
import {store} from '../store/store';
import {lightTheme} from '../theme/themes';
import {ErrorProvider} from './ErrorProviders';

export const AppProviders: React.FC = ({children}) => (
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <ReactSuspanseProvider>
        <AlertProvider>{children}</AlertProvider>
      </ReactSuspanseProvider>
    </ThemeProvider>
  </Provider>
);

const ReactSuspanseProvider: React.FC = ({children}) => (
  <Suspense fallback={<Text>Loading...</Text>}>{children}</Suspense>
);
