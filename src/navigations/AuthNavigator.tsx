import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import {ROUTES} from './Routes';

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator();
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.SIGNUP} component={Signup} />
      <Stack.Screen name={ROUTES.RECOVER} component={ForgetPassword} />
    </Stack.Navigator>
  );
}
