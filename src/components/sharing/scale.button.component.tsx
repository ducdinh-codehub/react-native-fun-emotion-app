import React from 'react';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { Button, TouchableOpacity, View } from 'react-native-ui-lib';
import { props } from '../interface/scale.button.interface';

const handlePress = (
  item: any,
  maxButtonSize: number,
  minButtonSize: number,
  minButtonImageBorderSize: number,
  maxButtonImageBorderSize: number,
) => {
  if (
    item.size.width.value === maxButtonSize &&
    item.size.height.value === maxButtonSize
  ) {
    item.size.width.value = minButtonSize;
    item.size.height.value = minButtonSize;
    item.imageBorder.size.width.value = minButtonImageBorderSize;
    item.imageBorder.size.height.value = minButtonImageBorderSize;
    item.isFullContent = false;
  } else {
    item.size.width.value = maxButtonSize;
    item.size.height.value = maxButtonSize;
    item.imageBorder.size.width.value = maxButtonImageBorderSize;
    item.imageBorder.size.height.value = maxButtonImageBorderSize;

    item.isFullContent = true;
  }
};

const ScallingButton = (props: props) => {
  const {
    value: tmp_item,
    minButtonSize,
    maxButtonSize,
    minButtonImageBorderSize,
    maxButtonImageBorderSize,
  } = props;

  const item = {
    name: tmp_item.name,
    size: {
      width: useSharedValue<number>(tmp_item.size.width),
      height: useSharedValue<number>(tmp_item.size.height),
    },
    imageBorder: {
      name: tmp_item.imageBorder.name,
      size: {
        width: useSharedValue<number>(tmp_item.imageBorder.size.width),
        height: useSharedValue<number>(tmp_item.imageBorder.size.height),
      },
    },
    isFullContent: tmp_item.isFullContent,
  };
  return (
    <TouchableOpacity
      onPress={() =>
        handlePress(
          item,
          maxButtonSize,
          minButtonSize,
          minButtonImageBorderSize,
          maxButtonImageBorderSize,
        )
      }
    >
      <Animated.View
        style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          width: item.size.width,
          height: item.size.height,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View padding-s5 center gap-s5>
          <Animated.View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 20,
              width: item.imageBorder.size.width,
              height: item.imageBorder.size.height,
            }}
          ></Animated.View>
          {item.isFullContent ? (
            <Button bg-black label="Show details" />
          ) : (
            <></>
          )}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ScallingButton;
