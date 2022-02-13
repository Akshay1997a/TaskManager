import styled from 'styled-components/native';
import colors from '../../theme/colors';
import {FONT_SIZES} from '../../theme/themes';

export const Container = styled.View(props => ({
  flex: 1,
  backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
  alignItems: 'center',
  width: '100%',
}));

export const Row = styled.View({
  width: '100%',
  flexDirection: 'row',
});

export const Col = styled.View({
  width: '100%',
});

export const H1 = styled.Text.attrs({
  allowFontScaling: false,
})(props => ({
  fontSize: FONT_SIZES.H1,
  marginBottom: 10,
  marginTop: 5,
  fontWeight: 'bold',
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontFamily: props.theme.FONT_BOLD,
  textAlign: 'center',
}));

export const H2 = styled.Text.attrs({
  allowFontScaling: false,
})(props => ({
  fontSize: FONT_SIZES.H2,
  marginBottom: 10,
  marginTop: 5,
  fontWeight: 'bold',
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontFamily: props.theme.FONT_BOLD,
  textAlign: 'center',
}));

export const H3 = styled.Text.attrs({
  allowFontScaling: false,
})(props => ({
  fontSize: FONT_SIZES.H3,
  marginBottom: 10,
  marginTop: 5,
  fontWeight: 'bold',
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontFamily: props.theme.FONT_BOLD,
  textAlign: 'center',
}));

export const H4 = styled.Text.attrs({
  allowFontScaling: false,
})(props => ({
  fontSize: FONT_SIZES.H4,
  marginBottom: 10,
  marginTop: 5,
  fontWeight: 'bold',
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontFamily: props.theme.FONT_BOLD,
  textAlign: 'center',
}));

export const H5 = styled.Text.attrs({
  allowFontScaling: false,
})(props => ({
  fontSize: FONT_SIZES.H5,
  marginBottom: 10,
  marginTop: 5,
  fontWeight: 'bold',
  color: props.theme.PRIMARY_TEXT_COLOR,
  fontFamily: props.theme.FONT_BOLD,
  textAlign: 'center',
}));

export const P = styled.Text.attrs({
  allowFontScaling: false,
})(props => ({
  fontSize: FONT_SIZES.P,
  fontFamily: props.theme.FONT_BOLD,
  marginTop: 10,
  marginBottom: 10,
  color: props.theme.PRIMARY_TEXT_COLOR,
}));

export const ErrorText = styled(P)({
  color: colors.red,
  margin: 0,
});
