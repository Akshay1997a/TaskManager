import {DefaultTheme} from 'styled-components';
import colors from './colors';
import {isIphoneX, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {StyleSheet} from 'react-native';
import {fontScale} from '../helpers/ResponsiveDesign';

type MODE = 'light' | 'dark';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode?: MODE;
    PRIMARY_BACKGROUND_COLOR?: string;
    SECONDARY_BACKGROUND_COLOR?: string;
    PRIMARY_TEXT_COLOR?: string;
    SECONDARY_TEXT_COLOR?: string;
    PRIMARY_TEXT_COLOR_INVERTED?: string;
    SECONDARY_TEXT_COLOR_INVERTED?: string;
    PRIMARY_BUTTON_COLOR?: string;
    SECONDARY_BUTTON_COLOR?: string;
    HAIRLINE_COLOR?: string;
    GRADIENT: string[];
    SHADOW: string;

    FONT_REGULAR: string;
    FONT_MEDIUM: string;
    FONT_BOLD: string;
  }
}

export const lightTheme: DefaultTheme = {
  mode: 'light',
  PRIMARY_BACKGROUND_COLOR: '#EEEEEE',
  SECONDARY_BACKGROUND_COLOR: '#f7f7f7',
  PRIMARY_TEXT_COLOR: colors.black,
  SECONDARY_TEXT_COLOR: 'rgba(0,0,0,0.8)',
  PRIMARY_TEXT_COLOR_INVERTED: colors.white,
  SECONDARY_TEXT_COLOR_INVERTED: 'rgba(1,1,1,0.8)',
  PRIMARY_BUTTON_COLOR: colors.color1,
  SECONDARY_BUTTON_COLOR: colors.color1,
  HAIRLINE_COLOR: '#C9C9CB',
  GRADIENT: [
    'rgba(255,255,255,0)',
    'rgba(255,255,255,0)',
    'rgba(255,255,255,1)',
  ],
  SHADOW: ' 1px 1px 5px rgba(32, 33, 37, 0.1)',

  FONT_REGULAR: 'Poppins-Regular',
  FONT_MEDIUM: 'Poppins-Medium',
  FONT_BOLD: 'Poppins-Bold',
};

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: '#121212',
  SECONDARY_BACKGROUND_COLOR: '#333',
  PRIMARY_TEXT_COLOR: colors.white,
  SECONDARY_TEXT_COLOR: 'rgba(255,255,255,0.87)',
  PRIMARY_TEXT_COLOR_INVERTED: colors.black,
  SECONDARY_TEXT_COLOR_INVERTED: 'rgba(0,0,0,0.87)',
  PRIMARY_BUTTON_COLOR: colors.color1,
  SECONDARY_BUTTON_COLOR: 'white',
  HAIRLINE_COLOR: '#C9C9CB',
  GRADIENT: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
  SHADOW: ' 1px 1px 5px rgba(32, 33, 37, 0.1)',

  FONT_REGULAR: 'Poppins-Regular',
  FONT_MEDIUM: 'Poppins-Medium',
  FONT_BOLD: 'Poppins-Bold',
};

export const constants = {
  hairlineWidth: StyleSheet.hairlineWidth,
  iPhoneX: isIphoneX() ? getStatusBarHeight() : '0px',
};

export const fonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',

  domine: 'Domine-Regular',
  domineBold: 'Domine-Bold',
};

export interface ThemeProps {
  mode?: string;
  PRIMARY_BACKGROUND_COLOR?: string;
  SECONDARY_BACKGROUND_COLOR?: string;
  PRIMARY_TEXT_COLOR?: string;
  SECONDARY_TEXT_COLOR?: string;
  PRIMARY_BUTTON_COLOR?: string;
  SECONDARY_BUTTON_COLOR?: string;
  HAIRLINE_COLOR?: string;
  GRADIENT: string[];
  SHADOW: string;
}

export interface StyleProps {
  theme: ThemeProps;
}

export const FONT_SIZES = {
  H1: fontScale(31),
  H2: fontScale(28),
  H3: fontScale(22),
  H4: fontScale(20),
  H5: fontScale(17),
  P: fontScale(15),
};
