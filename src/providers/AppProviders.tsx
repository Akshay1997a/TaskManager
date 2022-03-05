import React, {ComponentClass, ReactNode, FC} from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {AlertProvider} from '../components/Alert/Alert';
import {store} from '../store/store';
import {lightTheme} from '../theme/themes';
import {ErrorProvider} from './ErrorProviders';

export const AppProviders: React.FC = ({children}) => (
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <AlertProvider>{children}</AlertProvider>
    </ThemeProvider>
  </Provider>
);
