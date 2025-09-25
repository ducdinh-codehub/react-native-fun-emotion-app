import React, { useEffect, useRef } from 'react';
import { MarqueeIntf } from '../interface/marquee.interface';
import { Text, View } from 'react-native-ui-lib';
import { TouchableOpacity } from 'react-native';
import { Marquee } from '@animatereactnative/marquee';

const MarqueeSimpleComponent = (props: MarqueeIntf) => {
  const {
    ItemList: items,
    style,
    choosingItem,
    setChoosingItem,
    onPress,
    selectItem,
  } = props;

  const itemColor = items.find(item => item.title === choosingItem?.title)
    ?.style?.color;

  var itemIndex = 0;

  useEffect(() => {
    if (!selectItem) {
      const intervalId = setInterval(() => {
        if (itemIndex < items.length) {
          itemIndex = itemIndex + 1;
          console.log('Hello', itemIndex);
        }

        if (itemIndex === items.length) {
          itemIndex = 0;
        }

        setChoosingItem(items[itemIndex]);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [selectItem]);

  return (
    <Marquee speed={0.5} withGesture>
      <View
        style={{
          flexDirection: 'row',
          rowGap: 350,
        }}
      >
        {items.map(item => {
          return item.title === choosingItem?.title ? (
            <TouchableOpacity
              onPress={() => {
                onPress(item);
              }}
            >
              <View
                width={style?.width}
                height={style?.height}
                br70
                center
                padding-s2
                style={{
                  borderWidth: style?.borderWidth,
                  backgroundColor: itemColor,
                  opacity: style?.opacity,
                }}
              >
                <Text
                  style={{
                    fontSize: style?.itemTextSize,
                    fontWeight: style?.itemTextWeight,
                    color: 'black',
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                onPress(item);
              }}
            >
              <View
                width={style?.width}
                height={style?.height}
                br70
                center
                padding-s2
                style={{
                  borderWidth: style?.borderWidth,
                  backgroundColor: '#DBD7D2',
                  opacity: style?.opacity,
                }}
              >
                <Text
                  style={{
                    fontSize: style?.itemTextSize,
                    fontWeight: style?.itemTextWeight,
                    color: 'white',
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Marquee>
  );
};

export default MarqueeSimpleComponent;
