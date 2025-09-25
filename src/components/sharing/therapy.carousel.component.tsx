import React, { useState } from 'react';
import { TherapyCarouselProps } from '../interface/therapy.carousel.interface';
import { Text, View } from 'react-native-ui-lib';

import Animated, {
  Extrapolation,
  FadeInUp,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';

import { FadeIn, FadeOut } from 'react-native-reanimated';

const PAGE_WIDTH = 500;

const TherapyCarousel = (props: TherapyCarouselProps) => {
  const { data } = props;
  const progress = useSharedValue<number>(0);
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.6,
  } as const;

  const ref = React.useRef<ICarouselInstance>(null);

  const defaultDataWith6Colors = [
    '#B0604D',
    '#899F9C',
    '#B3C680',
    '#5C6265',
    '#F5D399',
    '#F1F1F1',
  ];

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  const [activeIndex, setActiveIndex] = useState(0);

  console.log('activeIndex', activeIndex);

  return (
    <View marginB-s10>
      <Animated.View
        key={activeIndex}
        entering={FadeInUp.springify()
          .damping(1)
          .mass(1)
          .stiffness(5)
          .energyThreshold(6e-8)}
        exiting={FadeOut.springify()
          .damping(1)
          .mass(1)
          .stiffness(5)
          .energyThreshold(6e-8)}
        style={{
          paddingLeft: 35,
          paddingBottom: 10,
          paddingTop: 5,
        }}
      >
        <View row gap-s5>
          <View
            width={50}
            height={50}
            br100
            style={{
              backgroundColor: data[activeIndex].itemDfColor,
            }}
          ></View>
          <View gap-s1>
            <View center br70 bg-$backgroundDarkElevated padding-s1>
              <Text color={'white'} style={{ fontSize: 11 }}>
                {data[activeIndex].ownerName}
              </Text>
            </View>
            <View center br70 bg-$backgroundDarkElevated padding-s1>
              <Text color={'white'} style={{ fontSize: 9 }}>
                {data[activeIndex].currentTime.toISOString()}
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>

      <View paddingR-s10 paddingL-s10 paddingT-s2>
        <Carousel
          onSnapToItem={index => {
            setActiveIndex(index);
          }}
          ref={ref}
          {...baseOptions}
          onProgressChange={progress}
          style={{
            marginBottom: 15,
          }}
          data={data}
          renderItem={item => {
            return (
              <View
                center
                br70
                width={335}
                bg-$backgroundNeutralLight
                padding-s5
              >
                <View
                  width={320}
                  height={180}
                  br70
                  center
                  style={{
                    backgroundColor: item.item.itemDfColor,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: '600' }}>
                    {item.item.handleTherapy}
                  </Text>
                </View>
                <View gap-s2 marginT-s5>
                  <Text style={{ fontStyle: 'italic', fontSize: 15 }}>
                    {item.item.content}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <Pagination.Basic<{ item: any }>
          progress={progress}
          data={data.map(item => ({ item }))}
          size={20}
          dotStyle={{
            borderRadius: 100,
            backgroundColor: '#595959',
            width: 10,
            height: 10,
          }}
          activeDotStyle={{
            borderRadius: 100,
            overflow: 'hidden',
            backgroundColor: '#a5a5a5',
          }}
          containerStyle={[
            {
              gap: 5,
              marginBottom: 10,
            },
          ]}
          horizontal
          onPress={onPressPagination}
        />
      </View>
    </View>
  );
};

export default TherapyCarousel;
