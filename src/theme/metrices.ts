import {Dimensions} from 'react-native';

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

export default {
  screenWidth: WINDOW_WIDTH,
  screenHeight: WINDOW_HEIGHT,
  basePadding: 20,
  baseMargin: 20,
};
