import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email is required'),
  password: yup
    .string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required'),
});

export const SignupSchema = yup.object().shape({
  name: yup.string().required('Enter your full name.'),
  email: yup.string().email('Invalid Email!').required('Email is required'),
  password: yup
    .string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password not matched'),
});
