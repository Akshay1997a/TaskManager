import React from 'react';
import styled from 'styled-components/native';
import {H5} from '../Primitives/Primitives';
import colors from '../../theme/colors';
import {TouchableOpacityProps} from 'react-native';

interface ButtonPrimaryProps extends TouchableOpacityProps {
  title: String;
}

export default function ButtonPrimary(props: ButtonPrimaryProps) {
  return (
    <ButtonContainer {...props}>
      <ButtonTitle>{props.title}</ButtonTitle>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.TouchableOpacity<any>(props => ({
  width: '100%',
  height: 60,
  justifyContent: 'center',
  alignItem: 'center',
  backgroundColor: props.theme.PRIMARY_BUTTON_COLOR,
}));

const ButtonTitle = styled(H5)({
  color: colors.white,
  textAlign: 'center',
});
