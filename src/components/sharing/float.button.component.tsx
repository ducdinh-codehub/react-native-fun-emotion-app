import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface Props {
  onPress?: any;
}
const FloatButton = (props: Props) => {
  const { onPress } = props;
  const isExpanded = useSharedValue(false);

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const plusIconStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(Number(isExpanded.value), [0, 1], [0, 2]);
    const translateValue = withTiming(moveValue);
    const rotateValue = isExpanded.value ? '0deg' : '360deg';

    return {
      transform: [
        { translateX: translateValue },
        { rotate: withTiming(rotateValue) },
      ],
    };
  });

  const handlePress = () => {
    isExpanded.value = !isExpanded.value;
    if (onPress) {
      onPress();
    }
  };

  return (
    <AnimatedPressable
      onPress={handlePress}
      style={[styles.shadow, mainButtonStyles.button]}
    >
      <Animated.View style={[plusIconStyle]}>
        <FontAwesome6 name="user-check" size={20} color="white" />
      </Animated.View>
    </AnimatedPressable>
  );
};

const mainButtonStyles = StyleSheet.create({
  button: {
    bottom: 10,
    zIndex: 1,
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
});

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    height: 260,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#82cab2',
    position: 'absolute',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -2,
    flexDirection: 'row',
  },
  buttonContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -0.5, height: 3.5 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  content: {
    color: '#f8f9ff',
    fontWeight: 500,
  },
});

export default FloatButton;
