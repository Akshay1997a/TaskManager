import React from 'react';
import 'react-native';
import {ActivityIndicator} from 'react-native';
import renderer from 'react-test-renderer';
import ButtonPrimary from './ButtonPrimary';

it('renders correctly', () => {
  let tree = renderer.create(<ActivityIndicator size={'large'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
