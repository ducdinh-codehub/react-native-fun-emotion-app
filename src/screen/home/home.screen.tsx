import React, { useCallback, useRef, useState } from 'react';
import { useSession, signIn } from '../../auth-client';

import { createAuthClient } from 'better-auth/client';
import { useStore } from '../../store/store.init';
import {
  View,
  Carousel,
  Card,
  Button,
  Text,
  SearchInput,
} from 'react-native-ui-lib';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ScallingButton from '../../components/sharing/scale.button.component';
import { ScallingButtonIntf } from '../../components/interface/scale.button.interface';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CircleButton from '../../components/sharing/circle.button.component';
import RectangleButton from '../../components/sharing/rectangle.button.component';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import RecommendItem from '../../components/sharing/recommend.item.component';
import { RecommendIntf } from '../../components/interface/recommend.item.interface';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '@app/navigation.constants';
import { BlurView } from '@react-native-community/blur';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

const DATA = [
  {
    title: 'First Item',
    listSubContent: [{ value: '5min' }, { value: 'Morning' }],
  },
  {
    title: 'Second Item',
    listSubContent: [{ value: '12min' }, { value: 'Night' }],
  },
  {
    title: 'Third Item',
    listSubContent: [{ value: '30min' }, { value: 'Afternoon' }],
  },
];

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const ticketBorder: ScallingButtonIntf[] = [
    {
      name: 'border1',
      size: {
        width: 190,
        height: 190,
      },
      imageBorder: {
        name: 'imageBorder1',
        size: {
          width: 135,
          height: 135,
        },
      },
      isFullContent: false,
    },
  ];

  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const searchInputRef = useRef('');

  const navigateEmotionalScreen = () => {
    console.log('Hello');

    navigation.navigate(screenName.emotionBalance);
  };

  const renderItem = (item: RecommendIntf) => {
    console.log('Rendering', item);

    return (
      <View padding-s5>
        <RecommendItem
          title={item.title}
          listSubContent={item.listSubContent}
        />
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <BlurView
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      >
        <View
          padding-s5
          row
          center
          style={{
            columnGap: 155,
            paddingTop: insets.top,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
            Hello, User 👋
          </Text>
          <View>
            <CircleButton
              iconName="bell"
              title="bell"
              onPress={() => {
                navigation.navigate(screenName.notification);
              }}
              width={39}
              height={39}
            />
          </View>
        </View>
      </BlurView>

      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: -insets.top,
          paddingBottom: -insets.bottom,
        }}
      >
        <ScrollView>
          <View paddingL-s5 paddingR-s5 paddingT-s10>
            <View style={{ backgroundColor: 'white' }} br100 center>
              <SearchInput
                ref={searchInputRef}
                testID={'searchInput'}
                placeholder={'Search'}
                onDismiss={() => {}}
              />
            </View>
          </View>

          <View paddingL-s5 paddingR-s5 paddingT-s5 row gap-s5 center>
            <RectangleButton
              label={'Emotional Balance'}
              content={'15 min'}
              width={175}
              height={215}
              backgroundColor={'black'}
              labelTextColor={'white'}
              labelTextSize={25}
              contentTextSize={16}
              contentTextColor={'white'}
              contentTextBackgroundcolor={'grey'}
              onPress={() => {
                navigation.navigate(screenName.emotionBalance);
              }}
            />

            <RectangleButton
              label={'Calm Relaxation'}
              content={'15 min'}
              width={175}
              height={215}
              backgroundColor={'white'}
              labelTextColor={'black'}
              labelTextSize={25}
              contentTextSize={16}
              contentTextColor={'black'}
              contentTextBackgroundcolor={'#F0F0ED'}
              onPress={() => {
                navigation.navigate(screenName.calmRelaxation);
              }}
            />
          </View>

          {
            <View
              paddingT-s5
              style={{
                bottom: 0,
                height: 650,
                width: '100%',
              }}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  height: '100%',
                  borderTopLeftRadius: 55,
                  borderTopRightRadius: 55,
                }}
              >
                <View style={{ alignItems: 'center' }} padding-s2>
                  <View
                    style={{ backgroundColor: 'grey' }}
                    width={35}
                    height={6}
                    br30
                  ></View>
                </View>

                <View row padding-s2 center style={{ columnGap: 125 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 600,
                    }}
                  >
                    Special for you
                  </Text>
                  <TouchableOpacity onPress={() => {}}>
                    <Text>See all</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ width: '100%', height: 500 }}>
                  <FlashList
                    data={DATA}
                    renderItem={({ item }) => renderItem(item)}
                  />
                </View>
              </View>
            </View>
          }
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {},
});

export default HomeScreen;
