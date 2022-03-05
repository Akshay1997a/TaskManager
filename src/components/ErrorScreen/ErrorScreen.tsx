import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  error?: any;
}

const ErrorScreen = (props: Props) => {
  return (
    <View>
      <Text>ErrorScreen</Text>
      {/* <Text>{props.error}</Text> */}
    </View>
  );
};

export default ErrorScreen;
