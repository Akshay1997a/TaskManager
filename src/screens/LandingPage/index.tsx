import React from 'react';
import {StyleSheet} from 'react-native';
import {P, H4, Container, Row} from '../../components/Primitives/Primitives';
import Logo from '../../assets/svgs/splash_screen_ic.svg';
import Shape from '../../assets/svgs/shape.svg';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

const LandingPage = () => {
  return (
    <Container style={styles.container}>
      <Row>
        <Shape />
      </Row>
      <Logo />
      <H4>Get things done with TODo</H4>
      <P style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
        donec commodo ornare.
      </P>
      <Row style={styles.but}>
        <ButtonPrimary title="Submit" />
      </Row>
    </Container>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  subTitle: {
    textAlign: 'center',
  },
  but: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },
});
