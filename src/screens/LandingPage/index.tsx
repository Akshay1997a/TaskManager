import React from 'react';
import {StyleSheet} from 'react-native';
import {P, H4, Container, Col} from '../../components/Primitives/Primitives';
import Logo from '../../assets/svgs/splash_screen_ic.svg';
import Shape from '../../assets/svgs/shape.svg';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import {
  fontScale,
  heightScale,
  widthScale,
} from '../../helpers/ResponsiveDesign';

const LandingPage = () => {
  return (
    <Container style={styles.container}>
      <Col>
        <Shape />
      </Col>
      <Logo style={styles.icon} />
      <H4>Get things done with TODo</H4>
      <P style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
        donec commodo ornare.
      </P>
      <Col style={styles.but}>
        <ButtonPrimary title="Submit" />
      </Col>
    </Container>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  icon: {
    marginBottom: heightScale(83),
  },
  subTitle: {
    width: widthScale(300),
    fontSize: fontScale(13),
    textAlign: 'center',
  },
  but: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },
});
