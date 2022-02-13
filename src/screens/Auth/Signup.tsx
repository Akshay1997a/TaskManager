import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  H5,
  Col,
  P,
  ErrorText,
} from '../../components/Primitives/Primitives';
import ShapeSVG from '../../assets/svgs/shape.svg';
import styled from 'styled-components/native';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../helpers/ResponsiveDesign';
import {Formik} from 'formik';
import Input from '../../components/Inputs/Inputs';
import {SignupSchema} from '../../config/Validations';
import ButtonPrimary, {
  TextButton,
} from '../../components/Buttons/ButtonPrimary';
import {useTheme} from 'styled-components';
import {GlobalStyles} from '../../styles/GlobalStyles';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import colors from '../../theme/colors';
import {TouchableIcon} from '../../components/Icons';

const Signup = () => {
  const theme = useTheme();
  const [isLoading, setLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  };

  return (
    <Container>
      <Shape />
      <KeyboardAvoidingWrapper>
        <Title>Welcome Onboard!</Title>
        <SubTitle>Let`s help you meet your tasks</SubTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}>
          {({
            touched,
            values,
            errors,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <FormContainer>
              <FormGroup>
                <Input
                  placeholder="Enter your full name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  returnKeyType="next"
                  letfIcon="person"
                />
                <StyledErrorText>{touched.name && errors.name}</StyledErrorText>
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Enter your email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  returnKeyType="next"
                  autoComplete="email"
                  letfIcon="email"
                />
                <StyledErrorText>
                  {touched.email && errors.email}
                </StyledErrorText>
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  returnKeyType="next"
                  autoComplete="password"
                  secureTextEntry={isPasswordVisible}
                  letfIcon="lock"
                  rightButton={
                    <TouchableIcon
                      name={isPasswordVisible ? 'eye-off' : 'eye'}
                      onPress={() => setPasswordVisible(!isPasswordVisible)}
                    />
                  }
                />
                <StyledErrorText>
                  {touched.password && errors.password}
                </StyledErrorText>
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  returnKeyType="next"
                  autoComplete="email"
                  secureTextEntry={isPasswordVisible}
                  letfIcon="lock"
                  rightButton={
                    <TouchableIcon
                      name={isPasswordVisible ? 'eye-off' : 'eye'}
                      onPress={() => setPasswordVisible(!isPasswordVisible)}
                    />
                  }
                />
                <StyledErrorText>
                  {touched.confirmPassword && errors.confirmPassword}
                </StyledErrorText>
              </FormGroup>
              <Footer>
                <ButtonPrimary
                  title="Register"
                  disabled={!isValid}
                  isLoading={isLoading}
                  onPress={handleSubmit}
                />
                <StyledTextButton
                  title="Log in"
                  frontText="Already have an account? "
                  color={theme.PRIMARY_BUTTON_COLOR}
                  fontSize={13}
                />
              </Footer>
            </FormContainer>
          )}
        </Formik>
      </KeyboardAvoidingWrapper>
    </Container>
  );
};

export default Signup;

const Shape = styled(ShapeSVG)({
  position: 'absolute',
  top: 0,
  left: 0,
});

const Title = styled(H5)({
  marginTop: heightScale(181),
  width: widthScale(179),
  height: heightScale(27),
  fontSize: fontScale(18),
});

const SubTitle = styled(P)({
  marginTop: heightScale(33),
  width: widthScale(231),
  height: heightScale(23),
  textAlign: 'center',
});

export const FormContainer = styled(Container)({
  // marginTop: heightScale(33),
  width: widthScale(325),
  backgroundColor: colors.transparent,
});

export const FormGroup = styled(Col)({
  marginTop: heightScale(15),
  justifyContent: 'center',
});

export const Footer = styled(FormGroup)({
  marginTop: heightScale(65),
});

export const StyledErrorText = styled(ErrorText)({
  marginLeft: 15,
});

export const StyledTextButton = styled(TextButton)({
  marginTop: 10,
  marginBottom: 10,
});
