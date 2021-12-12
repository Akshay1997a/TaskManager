import React from 'react';
import styled from 'styled-components/native';
import {H4, H5} from '../Primitives/Primitives';
import colors from '../../theme/colors';
import {
  ActivityIndicator,
  ColorValue,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {heightScale} from '../../helpers/ResponsiveDesign';

interface ButtonPrimaryProps extends TouchableOpacityProps {
  title: String;
  isLoading?: boolean;
}

interface TextButtonProps extends TouchableOpacityProps {
  title: String;
  color?: ColorValue;
  fontSize?: number;
  underlined?: boolean;
  frontText?: string;
  fronTextStyle?: TextStyle;
  contentContainerStyle?: ViewStyle;
}

export default function ButtonPrimary(props: ButtonPrimaryProps) {
  return (
    <ButtonContainer {...props}>
      {!props.isLoading ? (
        <ButtonTitle>{props.title}</ButtonTitle>
      ) : (
        <ActivityIndicator size="large" color={colors.white} />
      )}
    </ButtonContainer>
  );
}

export function TextButton(props: TextButtonProps) {
  const style: TextStyle = {
    color: props.color,
    fontSize: props.fontSize,
    textDecorationLine: props.underlined ? 'underline' : 'none',
  };

  const fronTextStyle: TextStyle = {
    ...props.fronTextStyle,
    fontSize: props.fontSize,
  };

  return (
    <TitleButtonContainer style={props.contentContainerStyle}>
      <ButtonTitle2 style={fronTextStyle}>{props.frontText}</ButtonTitle2>
      <TouchableOpacity {...props}>
        <ButtonTitle style={style}>{props.title}</ButtonTitle>
      </TouchableOpacity>
    </TitleButtonContainer>
  );
}

const ButtonContainer = styled.TouchableOpacity<any>(props => ({
  width: '100%',
  height: heightScale(60),
  justifyContent: 'center',
  alignItem: 'center',
  backgroundColor: props.theme.PRIMARY_BUTTON_COLOR,
}));

const TitleButtonContainer = styled.View<any>({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

const ButtonTitle = styled(H5)(props => ({
  color: colors.white,
  textAlign: 'center',
  margin: 0,
}));

const ButtonTitle2 = styled(H5)(props => ({
  color: props.theme.PRIMARY_TEXT_COLOR,
  textAlign: 'center',
  margin: 0,
}));
