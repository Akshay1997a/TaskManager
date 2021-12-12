import React, {useEffect, useRef} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  ScrollView,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {isIos} from '../helpers';

function KeyboardAvoidingWrapper(props: KeyboardAvoidingViewProps) {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <KeyboardAvoidingView {...props} style={styles.container}>
      <ScrollView
        ref={scrollRef}
        bounces={false}
        contentContainerStyle={styles.container}
        scrollToOverflowEnabled={true}>
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default KeyboardAvoidingWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
