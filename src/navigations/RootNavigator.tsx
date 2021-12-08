import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import LandingPage from '../screens/LandingPage';
import {ROUTES} from './Routes';

export default function RootNavigator() {
  const Stack = createNativeStackNavigator();
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name={ROUTES.LANDING_PAGE} component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
