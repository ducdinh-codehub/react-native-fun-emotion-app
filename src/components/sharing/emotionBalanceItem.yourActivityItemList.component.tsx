import { ScrollView } from 'react-native';
import React from 'react';
import EmotionBalanceItemActivityItem from './emotionBalanceItem.yourActivityItem.component';
import { Button, View } from 'react-native-ui-lib';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const EmotionBalanceItemActivityItemList = (props: any) => {
  //const height = useSharedValue<number>(0);
  //const width = useSharedValue<number>(0);
  const { height, width, data, isDisplayActivityList } = props;

  console.log('height', height);
  console.log('width', width);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            height: height,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
          }}
        >
          <ScrollView
            style={{ flex: 1, height: 300, width: '100%' }}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                flex: 1,
                rowGap: 12,
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {props.data.map(item => {
                return (
                  <EmotionBalanceItemActivityItem
                    data={item}
                    styles={{
                      height: 120,
                      backgroundColor: 'black',

                      justifyContent: 'center',
                      alignItem: 'center',
                    }}
                  />
                );
              })}
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </>
  );
};

export default EmotionBalanceItemActivityItemList;
