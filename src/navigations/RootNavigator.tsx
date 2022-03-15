import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect, useState} from 'react';
import LandingPage from '../screens/LandingPage';
import AuthNavigator from './AuthNavigator';
import {ROUTES} from './Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PERSISTED_NAVIGATION_STATE} from '../config/StorageKeys';
import {Linking} from 'react-native';
import {useFlipper} from '@react-navigation/devtools';

export default function RootNavigator() {
  const Stack = createNativeStackNavigator();
  const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = useState();
  const navigationRef = useNavigationContainerRef();
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };

  if (__DEV__) {
    useFlipper(navigationRef);
  }

  const onReady = () => {
    SplashScreen.hide();
  };

  const onStateChange = (state: any) => {
    AsyncStorage.setItem(PERSISTED_NAVIGATION_STATE, JSON.stringify(state));
  };

  useEffect(() => {
    const restoreState = async () => {
      const initialUrl = Linking.getInitialURL();
      if (initialUrl === null) {
        const savedStateString = await AsyncStorage.getItem(
          PERSISTED_NAVIGATION_STATE,
        );
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      }
      setIsReady(true);
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={initialState}
      onReady={onReady}
      onStateChange={onStateChange}>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name={ROUTES.AUTH} component={AuthNavigator} />
        <Stack.Screen name={ROUTES.LANDING_PAGE} component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
