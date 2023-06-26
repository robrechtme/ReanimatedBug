import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const angle = useSharedValue(0);

  useEffect(() => {
    angle.value = withRepeat(
      withTiming(360, {duration: 1000, easing: Easing.linear}),
      -1,
    );
  }, [angle]);

  const rotateStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${angle.value}deg`}],
    width: 100,
    height: 100,
    backgroundColor: 'red',
  }));

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={styles.background.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentContainer}>
        <Animated.View style={rotateStyle} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.darker,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '150%',
  },
});

export default App;
