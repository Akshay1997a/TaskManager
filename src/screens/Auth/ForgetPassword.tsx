import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Container} from '../../components/Primitives/Primitives';
import {heightScale, widthScale} from '../../helpers/ResponsiveDesign';
import LogoSVG from '../../assets/svgs/forget_password.svg';
import styled from 'styled-components/native';
import {Formik} from 'formik';
import {
  Footer,
  FormContainer,
  FormGroup,
  StyledErrorText,
  StyledTextButton,
} from './Signup';
import Input from '../../components/Inputs/Inputs';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import {useTheme} from 'styled-components';

export default function ForgetPassword() {
  const theme = useTheme();
  const [isLoading, setLoading] = useState(false);
  const initialState = {
    email: '',
    otp: '',
  };

  const handleSubmit = () => {};

  return (
    <Container>
      <Logo width={widthScale(207)} height={heightScale(170)} />
      <Formik initialValues={initialState} onSubmit={handleSubmit}>
        {({
          values,
          errors,
          touched,
          isValid,
          handleSubmit,
          handleBlur,
          handleChange,
        }) => (
          <FormContainer>
            <FormGroup>
              <Input
                placeholder="Email"
                letfIcon="person"
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <StyledErrorText>{touched.email && errors.email}</StyledErrorText>
            </FormGroup>
            <Footer>
              <ButtonPrimary
                title="Send OTP"
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
    </Container>
  );
}

const Logo = styled(LogoSVG)({
  marginTop: heightScale(174),
});
