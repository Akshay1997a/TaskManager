import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Auth/Login';
import {ROUTES} from './Routes';

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator();
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
  );
}
