import styled from 'styled-components/native';
import {FONT_SIZES} from '../../theme/themes';

export const Container = styled.View(props => ({
  flex: 1,
  backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
  alignItems: 'center',
}));

export const Row = styled.View({
  width: '100%',
});

export const H1 = styled.Text(props => ({
  fontSize: FONT_SIZES.H1,
  marginBottom: 10,
  marginTop: 5,
  fontWeight: 'bold',
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontFamily: props.theme.FONT_BOLD,
}));

export const H2 = styled.Text(props => ({
  fontSize: FONT_SIZES.H2,
  marginBottom: 10,
  marginTop: 5,
  fontWeight: 'bold',
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontFamily: props.theme.FONT_BOLD,
}));

export const H3 = styled.Text(props => ({
  fontSize: FONT_SIZES.H3,
  marginBottom: 10,
  marginTop: 5,
  fontWeight: 'bold',
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontFamily: props.theme.FONT_BOLD,
}));

export const H4 = styled.Text(props => ({
  fontSize: FONT_SIZES.H4,
  marginBottom: 10,
  marginTop: 5,
  fontWeight: 'bold',
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontFamily: props.theme.FONT_BOLD,
}));

export const H5 = styled.Text(props => ({
  fontSize: FONT_SIZES.H5,
  marginBottom: 10,
  marginTop: 5,
  fontWeight: 'bold',
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontFamily: props.theme.FONT_BOLD,
}));

export const P = styled.Text(props => ({
  fontSize: FONT_SIZES.P,
  lineHeight: 25,
  fontFamily: props.theme.FONT_BOLD,
  marginTop: 10,
  marginBlock: 10,
  color: props.theme.PRIMARY_TEXT_COLOR,
}));