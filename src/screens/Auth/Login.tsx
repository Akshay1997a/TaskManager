import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {
  P,
  H4,
  Container,
  Col,
  ErrorText,
  Row,
} from '../../components/Primitives/Primitives';
import Logo from '../../assets/svgs/login_screen.svg';
import Shape from '../../assets/svgs/shape.svg';
import ButtonPrimary, {
  TextButton,
} from '../../components/Buttons/ButtonPrimary';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../helpers/ResponsiveDesign';
import Input from '../../components/Inputs/Inputs';
import {useTheme} from 'styled-components';
import {Formik} from 'formik';
import {LoginSchema} from '../../config/Validations';
import metrices from '../../theme/metrices';
import {GlobalStyles} from '../../styles/GlobalStyles';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import {Icon, TouchableIcon} from '../../components/Icons';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigations/Routes';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getLoading, setLoading} from '../../store/loading/loadingSlice';
import {login} from '../../store/auth/authThunks';

const Login = () => {
  const theme = useTheme();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const scrollViewRef = useRef<any>();
  const logoAnimation = useRef(new Animated.Value(1)).current;
  const titelTextAnim = useRef(new Animated.Value(0)).current;
  const AnimatedTitle = Animated.createAnimatedComponent(H4);
  const navigation = useNavigation();
  const isLoading = useAppSelector(getLoading);
  const dispatch = useAppDispatch();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const onShowHide = (event: 'hide' | 'show') => {
    Animated.parallel([
      Animated.timing(logoAnimation, {
        toValue: event === 'hide' ? 0 : 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(titelTextAnim, {
        toValue: event === 'hide' ? heightScale(80) : 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleLogin = async (values: any) => {
    console.log(values);
    await dispatch(login({email: values.email, password: values.password}));
  };

  const gotoSignupPage = () => {
    navigation.navigate(ROUTES.SIGNUP as never);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      // setKeyboardVisible(true);
      onShowHide('hide');
    });

    Keyboard.addListener('keyboardDidHide', () => {
      // setKeyboardVisible(false);
      onShowHide('show');
    });
  }, []);

  return (
    <Container style={styles.flex}>
      <Shape style={styles.shape} />
      <Col style={styles.col1}>
        <AnimatedTitle style={{transform: [{translateY: titelTextAnim}]}}>
          Welcome Back!
        </AnimatedTitle>
        {!isKeyboardVisible && (
          <Animated.View style={{opacity: logoAnimation}}>
            <Logo style={styles.icon} />
          </Animated.View>
        )}
      </Col>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <Container style={styles.col2}>
            <Col style={styles.fieldGroup}>
              <Input
                placeholder="Enter your email"
                letfIcon="person"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                autoComplete="email"
                enablesReturnKeyAutomatically
                autoCapitalize="none"
                textContentType="emailAddress"
                returnKeyType="next"
              />
              <ErrorText style={styles.errorText}>
                {touched.email ? errors.email : ''}
              </ErrorText>
            </Col>
            <Col style={styles.fieldGroup}>
              <Input
                placeholder="Enter password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                textContentType="password"
                autoComplete="password"
                enablesReturnKeyAutomatically
                secureTextEntry={!isPasswordVisible}
                blurOnSubmit
                returnKeyType="done"
                letfIcon="lock"
                rightButton={
                  <TouchableIcon
                    name={!isPasswordVisible ? 'eye-off' : 'eye'}
                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                  />
                }
              />
              <ErrorText style={styles.errorText}>
                {touched.password ? errors.password : ''}
              </ErrorText>
            </Col>
            <Col style={styles.fieldGroup}>
              <TextButton
                title="Forget Password"
                color={theme.PRIMARY_BUTTON_COLOR}
                fontSize={14}
                underlined
              />
            </Col>
            <Col style={styles.bottom}>
              <ButtonPrimary
                title="Login"
                disabled={!isValid}
                isLoading={isLoading}
                onPress={handleSubmit}
              />
              <TextButton
                title="Sign Up"
                frontText="Don't have an account? "
                color={theme.PRIMARY_BUTTON_COLOR}
                fontSize={13}
                contentContainerStyle={GlobalStyles.MT10}
                onPress={gotoSignupPage}
              />
            </Col>
          </Container>
        )}
      </Formik>
    </Container>
  );
};

export default React.memo(Login);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    // flex: 1,
    marginTop: heightScale(100),
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  col1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  col2: {
    flex: 1,
    padding: 20,
    width: '100%',
    justifyContent: 'flex-end',
  },
  icon: {
    marginTop: heightScale(10),
  },
  subTitle: {
    width: widthScale(300),
    fontSize: fontScale(13),
    textAlign: 'center',
  },
  but: {
    width: '100%',
    marginTop: 150,
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  errorText: {
    marginLeft: 15,
  },
  fieldGroup: {
    marginBottom: 15,
    justifyContent: 'center',
  },
  rowFieldGroup: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    // marginTop: 'auto',
  },
});
