import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  View as RNView,
  ViewProps,
  ViewStyle,
} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {heightScale} from '../../helpers/ResponsiveDesign';
import {Icon} from '../Icons';

interface InputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  letfIcon?: string;
  rightButton?: React.ReactNode;
}

const Input = (props: InputProps) => {
  const theme = useTheme();
  return (
    <TextInputWrapper style={[props.containerStyle]}>
      {props.letfIcon && <Icon name={props.letfIcon} />}
      <TextInput placeholderTextColor={theme.PRIMARY_TEXT_COLOR} {...props} />
      {props.rightButton}
    </TextInputWrapper>
  );
};

export default React.memo(Input);

const TextInputWrapper = styled(RNView)(props => ({
  borderRadius: 100,
  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: props.theme.PRIMARY_TEXT_COLOR_INVERTED,
  paddingLeft: 10,
  paddingRight: 10,
  height: heightScale(50),
}));

const TextInput = styled(RNTextInput)(props => ({
  borderWidth: 0,
  height: '100%',
  flex: 1,
  color: props.theme.PRIMARY_TEXT_COLOR,
}));
