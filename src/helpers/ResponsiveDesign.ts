'use strict';

import {Dimensions, Platform} from 'react-native';
export const {width, height} = Dimensions.get(
  Platform.OS === 'android' ? 'screen' : 'window',
);

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const horizontalScale = (size: number) =>
  (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const heightScale = (size: number, factor = 1) => {
  if (Platform.OS === 'web') {
    factor = 0.12;
  }
  if (Platform.OS === 'android') {
    factor = 0;
  }
  return size + (verticalScale(size) - size) * factor;
};

export const widthScale = (size: number, factor = 1) => {
  if (Platform.OS === 'web') {
    factor = 0.12;
  }
  if (Platform.OS === 'android') {
    factor = 1;
  }
  return size + (horizontalScale(size) - size) * factor;
};
export const fontScale = (size: number) => {
  if (Platform.OS === 'web') {
    return heightScale(+size + 5);
  } else {
    return heightScale(size);
  }
};
