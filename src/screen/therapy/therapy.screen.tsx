import React, { useState, useReducer, useRef } from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Image, Text, View } from 'react-native-ui-lib';
import { Marquee } from '@animatereactnative/marquee';
import { Dimensions, TouchableOpacity, Animated } from 'react-native';
import {
  MarqueeIntf,
  MarqueeItemIntf,
} from '../../components/interface/marquee.interface';
import MarqueeSimpleComponent from '../../components/sharing/marquee.simple.component';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../navigation.constants';
import PagerView, {
  PagerViewOnPageScrollEventData,
} from 'react-native-pager-view';
import TherayWorryPage from './therapy.screen.worry.page.screen';
import TherapyFinishPage from './therapy.screen.finish.page.screen';

import { ExpandingDot } from 'react-native-animated-pagination-dots';

const Therapy = () => {
  const navigation = useNavigation();
  const handleChoosingItem = (val: MarqueeItemIntf) => {
    setChoosingItem(val);
  };

  const handleSelectedItems = (val: MarqueeItemIntf) => {
    const checkExist = selectedItem?.title === val.title;
    if (!checkExist) {
      setSelectedItem(val);
      setChoosingItem(val);
    } else {
      setSelectedItem(undefined);
      setChoosingItem(undefined);
    }
  };

  const DATA: MarqueeIntf = {
    ItemList: [
      {
        title: 'Happiness',
        style: {
          color: '#f48498',
        },
        imageUrl: require('@assets/images/joy.png'),
      },
      {
        title: 'Disgust',
        style: {
          color: '#acd8aa',
        },
        imageUrl: require('@assets/images/disgus.png'),
      },
      {
        title: 'Suprise',
        style: {
          color: '#f2ccc3',
        },
        imageUrl: require('@assets/images/joy.png'),
      },
      {
        title: 'Fear',
        style: {
          color: '#fdffb6',
        },
        imageUrl: require('@assets/images/fear.png'),
      },
      {
        title: 'Anger',
        style: {
          color: '#7371fc',
        },
        imageUrl: require('@assets/images/angry.png'),
      },
      {
        title: 'Sadness',
        style: {
          color: '#79addc',
        },
        imageUrl: require('@assets/images/sadness.png'),
      },
    ],
    style: {
      width: 120,
      height: 45,
      borderWidth: 2,
      opacity: 0.7,
      backgroundColor: '#F0F0ED',
      itemTextSize: 15,
      itemTextWeight: '800',
    },
    onPress: () => {},
    setChoosingItem: () => {},
  };

  const [choosingItem, setChoosingItem] = useState<MarqueeItemIntf | undefined>(
    undefined,
  );

  console.log('choosingItem', choosingItem);

  const [selectedItem, setSelectedItem] = useState<MarqueeItemIntf | undefined>(
    undefined,
  );

  const insets = useSafeAreaInsets();

  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const INTRO_DATA = [{}, {}, {}];
  const inputRange = [0, INTRO_DATA.length];
  const width = Dimensions.get('window').width;

  const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, INTRO_DATA.length * width],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event<PagerViewOnPageScrollEventData>(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View
        width={100}
        height={100}
        style={{
          position: 'absolute',
          top: insets.top,
          width: '100%',
          height: 60,
          zIndex: 100,
        }}
        center
        row
        gap-s2
      >
        <ExpandingDot
          testID={'expanding-dot'}
          data={INTRO_DATA}
          expandingDotWidth={30}
          //@ts-ignore
          scrollX={scrollX}
          inActiveDotOpacity={0.6}
          dotStyle={{
            width: 100,
            height: 10,
            backgroundColor: '#347af0',
            borderRadius: 5,
            marginHorizontal: 5,
          }}
          containerStyle={{
            top: 30,
          }}
        />
      </View>
      <AnimatedPagerView
        onPageScroll={onPageScroll}
        style={{ flex: 1 }}
        initialPage={0}
      >
        <View key={1}>
          <View
            style={{
              height: '60%',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: choosingItem
                ? choosingItem.style?.color
                : DATA.ItemList[0].style?.color,
            }}
          >
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                borderRadius={100}
                width={300}
                height={300}
                source={
                  choosingItem
                    ? choosingItem.imageUrl
                    : DATA.ItemList[0].imageUrl
                }
              />
            </View>
          </View>

          <View padding-s5>
            <MarqueeSimpleComponent
              ItemList={DATA.ItemList}
              style={DATA.style}
              choosingItem={choosingItem}
              onPress={handleSelectedItems}
              setChoosingItem={handleChoosingItem}
              selectItem={selectedItem}
            />
          </View>
          <View padding-s2 center>
            <Text
              style={{
                fontSize: 29,
                color: 'white',
                fontWeight: '900',
              }}
            >
              How do you fell today ?
            </Text>
          </View>
          <View
            center
            row
            style={{ bottom: 0, position: 'absolute' }}
            padding-s5
          >
            <TouchableOpacity>
              <View padding-s10 center>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: '700',
                  }}
                >
                  Skip
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate(screenName.therapyWorryPage);
              }}
            >
              <View
                width={220}
                height={50}
                br90
                style={{ borderWidth: 1, backgroundColor: 'white' }}
                center
              >
                <Text style={{ fontSize: 17, fontWeight: '700' }}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View key={2}>
          <TherayWorryPage />
        </View>
        <View key={3}>
          <TherapyFinishPage />
        </View>
      </AnimatedPagerView>
    </View>
  );
};

export default Therapy;
