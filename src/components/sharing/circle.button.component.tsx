import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CircleButtonProps } from '../interface/circle.button.interface';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const CircleButton = (props: CircleButtonProps) => {
  const {
    title,
    onPress,
    iconName,
    iconSize,
    iconColor,
    width,
    height,
    color,
    textColor,
    titleSize,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: width,
          height: height,
          backgroundColor: color ? color : 'black',
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: textColor ? textColor : 'white',
            fontSize: titleSize ? titleSize : 10,
          },
        ]}
      >
        {iconName ? (
          <FontAwesome6
            color={iconColor}
            name={iconName}
            size={iconSize ? iconSize : 20}
          />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30, // Half of width/height for a perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    padding: 3,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 9,
  },
});

export default CircleButton;
