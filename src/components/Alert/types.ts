import {ViewProps} from 'react-native';

export interface AlertProviderProps extends ViewProps {}

export type IAlertContext = {
  show: (message: string) => void;
  hide: () => void;
};
