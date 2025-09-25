import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import CircleButton from './circle.button.component';

interface RectangleButtonProps {
  label?: string;
  content?: string;
  height?: number;
  width?: number;
  backgroundColor?: string;
  labelTextColor?: string;
  labelTextSize?: number;
  contentTextColor?: string;
  contentTextSize?: number;
  contentTextBackgroundcolor?: string;
  onPress?: any;
  onPressSmallCircleButton?: any;
}
const RectangleButton = (props: RectangleButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        br70
        padding-s5
        style={{
          height: props.height,
          width: props.width,
          backgroundColor: props.backgroundColor,
          rowGap: 65,
        }}
      >
        <View center>
          <Text
            color={props.labelTextColor}
            style={{ fontSize: props.labelTextSize, fontWeight: 500 }}
          >
            {props.label}
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            minHeight: 45,
            backgroundColor: props.contentTextBackgroundcolor,
            alignItems: 'center',
            padding: 5,
            justifyContent: 'space-between',
          }}
          row
          br70
        >
          <Text
            color={props.contentTextColor}
            style={{ fontSize: props.contentTextSize, fontWeight: 500 }}
          >
            {props.content}
          </Text>
          <CircleButton
            iconSize={15}
            iconName="play"
            title="start"
            width={35}
            height={35}
            onPress={
              props.onPressSmallCircleButton
                ? props.onPressSmallCircleButton
                : props.onPress
            }
            color="#7CC6F2"
            textColor="black"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RectangleButton;
