import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Animated, Easing, View} from 'react-native';
import styled from 'styled-components/native';
import {fontScale, heightScale} from '../../helpers/ResponsiveDesign';
import metrices from '../../theme/metrices';
import {Icon} from '../Icons';
import {H1, H5, P, Row} from '../Primitives/Primitives';
import {AlertProviderProps, IAlertContext} from './types';
import {useTheme} from 'styled-components';

const AlertContext = createContext<IAlertContext>({
  show: () => {},
  hide: () => {},
});

const AlertProvider = (props: AlertProviderProps) => {
  const [message, setMessage] = useState('');
  const fade = useRef(new Animated.Value(0)).current;
  const [isAnimationCompleted, setAnimationCompleted] = useState(false);
  const theme = useTheme();
  let animRef = null;

  const show = (message: string) => {
    setMessage(message);
    animRef = Animated.timing(fade, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    });
    animRef.start(e => {
      if (e.finished) {
        setAnimationCompleted(true);
      }
    });
  };

  const hide = () => {
    Animated.timing(fade, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(e => {
      if (e.finished) {
        setAnimationCompleted(false);
      }
    });
  };

  const AlertComponent = React.useCallback(() => {
    const AnimatedOverlayView = Animated.createAnimatedComponent(OverlayView);
    const AnimatedAlertContainer =
      Animated.createAnimatedComponent(AlertContainer);
    return (
      <AnimatedOverlayView
        style={{opacity: fade}}
        onPress={hide}
        pointerEvents={isAnimationCompleted ? 'auto' : 'box-none'}>
        <AnimatedAlertContainer
          pointerEvents={isAnimationCompleted ? 'auto' : 'box-none'}
          style={{
            opacity: fade,
            transform: [{scale: fade}],
          }}>
          <AlertTitle>Alert</AlertTitle>
          <Divider />
          <AlertBody>
            <View
              style={{
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.PRIMARY_BUTTON_COLOR,
                borderRadius: 100,
                elevation: 5,
              }}>
              <Icon name="check" color={'#fff'} size={40} />
            </View>
            <AlertMessage>{message}</AlertMessage>
          </AlertBody>
          <Divider />
          <AlertButtonsRow>
            <AlertButtons onPress={hide}>
              <AlertButtonsTitle>Close</AlertButtonsTitle>
            </AlertButtons>
            <AlertButtons onPress={hide}>
              <AlertButtonsTitle>Okey</AlertButtonsTitle>
            </AlertButtons>
          </AlertButtonsRow>
        </AnimatedAlertContainer>
      </AnimatedOverlayView>
    );
  }, [message, isAnimationCompleted]);

  return (
    <AlertContext.Provider value={{show, hide}}>
      {props.children}
      <AlertComponent />
    </AlertContext.Provider>
  );
};

export default React.memo(AlertProvider);

export function useAlert() {
  return useContext(AlertContext);
}

export const Alert = {
  
}

export const OverlayView = styled.View`
  position: absolute;
  width: ${metrices.screenWidth}px;
  height: ${metrices.screenHeight}px;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;

const AlertContainer = styled.View`
  width: ${metrices.screenWidth * 0.8}px;
  height: ${metrices.screenHeight * 0.3}px;
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
  border-radius: 20px;
  align-items: center;
  z-index: 2000;
  /* elevation: 5; */
`;

const Divider = styled.View`
  width: 80%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const AlertBody = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
`;

const AlertTitle = styled(H1)`
  margin-top: ${heightScale(20)}px;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${fontScale(24)}px;
`;

const AlertMessage = styled(H5)`
  font-weight: 500;
  margin-top: ${heightScale(20)}px;
`;

const AlertButtonsRow = styled(Row)`
  padding: 10px;
`;

const AlertButtons = styled.TouchableOpacity`
  flex: 1;
`;
const AlertButtonsTitle = styled(H5)``;
