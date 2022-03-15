import React, {Component, createContext, useContext} from 'react';
import {Animated, Easing, View} from 'react-native';
import styled, {
  DefaultTheme,
  ThemeProps,
  withTheme,
} from 'styled-components/native';
import {fontScale, heightScale} from '../../helpers/ResponsiveDesign';
import metrices from '../../theme/metrices';
import {Icon} from '../Icons';
import {H1, H5, Row} from '../Primitives/Primitives';
import {IAlertContext} from './types';

interface AlertProps extends ThemeProps<DefaultTheme> {}
interface AlertState {
  message: string;
  isAnimationCompleted: boolean;
}

const AlertContext = createContext<IAlertContext>({
  show: () => {},
  hide: () => {},
});

class AlertProvider extends Component<AlertProps, {}> {
  render(): React.ReactNode {
    return (
      <Alert ref={ref => (Alert.instance = ref)} {...this.props}>
        {this.props.children}
      </Alert>
    );
  }
}

export class Alert extends Component<AlertProps, AlertState> {
  animRef?: Animated.CompositeAnimation;
  fade = new Animated.Value(0);
  static instance: Alert | null;
  constructor(props: AlertProps) {
    super(props);
    this.state = {
      message: '',
      isAnimationCompleted: false,
    };
    this.AlertComponent = this.AlertComponent.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.hideAlert = this.hideAlert.bind(this);
  }

  static show(message: string) {
    this.instance?.showAlert(message);
  }

  static hide() {
    this.instance?.hideAlert();
  }

  showAlert(message: string) {
    this.setState({message});
    this.animRef = Animated.timing(this.fade, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    });
    this.animRef.start(e => {
      if (e.finished) {
        this.setState({isAnimationCompleted: true});
      }
    });
  }

  hideAlert() {
    Animated.timing(this.fade, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(e => {
      if (e.finished) {
        this.setState({isAnimationCompleted: false});
      }
    });
  }

  AlertComponent() {
    const AnimatedOverlayView = Animated.createAnimatedComponent(OverlayView);
    const AnimatedAlertContainer =
      Animated.createAnimatedComponent(AlertContainer);
    const {isAnimationCompleted, message} = this.state;
    const {fade, hideAlert: hide, showAlert: show} = this;
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
                backgroundColor: this.props.theme.PRIMARY_BUTTON_COLOR,
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
  }
  render() {
    const {AlertComponent, props, showAlert: show, hideAlert: hide} = this;
    return (
      <AlertContext.Provider value={{show, hide}}>
        {props.children}
        <AlertComponent />
      </AlertContext.Provider>
    );
  }
}

export default withTheme<any>(AlertProvider);

export function useAlert() {
  return useContext(AlertContext);
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
