import React, { useEffect, useState } from 'react';
import { EmotionBalanceIntf } from '../interface/emotionBalance.interface';
import { View, Text, Card } from 'react-native-ui-lib';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import CircleButton from './circle.button.component';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const EmotionBalanceItem: React.FC<EmotionBalanceIntf> = ({
  title,
  onPress,
  setIsDisplayCalendar,
  setIsDisplayActivityList,
  setHeightCalendar,
  setWidthCalendar,
  setupCalendarConfig,
  iconName,
  innerComponent,
  isAlwaysOpen = false,
  openItemSize = 350,
  styles = {
    width: '100%',
  },
  openActivityList,
  closeActivityList,
  setOpenNote,
  openYourNoteComponent,
  closeYourNoteComponent,
}) => {
  const DEFAULT_HEIGHT = 100;
  const [toggleItem, setToggleItem] = useState(false);

  console.log('toggleItem', toggleItem);

  const height = useSharedValue<number>(DEFAULT_HEIGHT);

  const handleIncreaseItem = () => {
    height.value = withSpring(height.value + openItemSize);
    if (setIsDisplayCalendar && setupCalendarConfig) {
      setIsDisplayCalendar(true);
      setupCalendarConfig({ width: '100%', height: 450, isOpen: true });
    }

    if (setIsDisplayActivityList && openActivityList) {
      setIsDisplayActivityList(true);
      openActivityList();
    }

    if (openYourNoteComponent && setOpenNote) {
      setOpenNote(true);
      //openYourNoteComponent();
    }
  };

  const handleDcreaseItem = () => {
    height.value = withSpring(height.value - openItemSize);
    if (setIsDisplayCalendar) {
      setIsDisplayCalendar(false);
    }

    if (setIsDisplayActivityList && closeActivityList) {
      setIsDisplayActivityList(false);
      closeActivityList();
    }

    if (closeYourNoteComponent && setOpenNote) {
      setOpenNote(false);
      //closeYourNoteComponent();
    }
  };

  return (
    <Animated.View
      style={{
        minHeight: isAlwaysOpen ? height.value + openItemSize : height,
        width: styles.width,
        backgroundColor: '#333333',
        borderRadius: 15,
      }}
    >
      <View br70 padding-s5 gap-s5 flex>
        <View row center style={{ justifyContent: 'space-between' }}>
          <View row gap-s2 center>
            {iconName ? (
              <FontAwesome6 size={25} name={iconName} color={'white'} />
            ) : (
              <></>
            )}
            <Text text60BL style={{ color: 'white' }}>
              {title}
            </Text>
          </View>
          {!isAlwaysOpen ? (
            <View>
              <CircleButton
                iconName={!toggleItem ? 'angle-down' : 'angle-up'}
                width={30}
                height={30}
                color={'grey'}
                textColor={'black'}
                onPress={() => {
                  var tmp = toggleItem;
                  if (tmp === false) {
                    handleIncreaseItem();
                    setToggleItem(true);
                  } else {
                    handleDcreaseItem();
                    setToggleItem(false);
                  }
                }}
                title="start"
                titleSize={15}
              />
            </View>
          ) : (
            <></>
          )}
        </View>
        <View
          height={1}
          style={{ width: '100%' }}
          bg-$backgroundElevatedLight
        ></View>
        {innerComponent}
      </View>
    </Animated.View>
  );
};

export default EmotionBalanceItem;
