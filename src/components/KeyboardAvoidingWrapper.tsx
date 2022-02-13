import React, {useEffect, useRef} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  ScrollView,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {isIos} from '../helpers';
import metrices from '../theme/metrices';

function KeyboardAvoidingWrapper(props: KeyboardAvoidingViewProps) {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <KeyboardAvoidingView
      {...props}
      contentContainerStyle={styles.container}
      keyboardVerticalOffset={200}>
      <ScrollView
        ref={scrollRef}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}
        keyboardDismissMode="interactive"
        scrollToOverflowEnabled={true}>
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default KeyboardAvoidingWrapper;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  scrollStyle: {
    width: metrices.screenWidth,
    alignItems: 'center',
  },
});
