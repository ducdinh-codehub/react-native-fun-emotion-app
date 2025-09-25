import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native-ui-lib';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { CalendarIntf } from '../interface/calendar.interface';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { DimensionValue } from 'react-native';

const CalendarComponent = (props: CalendarIntf) => {
  const { width, height, getCalendarConfig } = props;

  const adj_width = useSharedValue(0);
  const adj_height = useSharedValue(0);

  var [isDisplay, setIsDisplay] = useState<boolean>(false);

  useEffect(() => {
    if (getCalendarConfig) {
      setIsDisplay(getCalendarConfig().isOpen);
    }
  }, [getCalendarConfig]);

  if (isDisplay) {
    console.log('Open');
    adj_width.value = withSpring(adj_width.value + 370);
    adj_height.value = withSpring(adj_height.value + 350);
  } else {
  }

  return (
    <Animated.View style={{ height: height, width: width }}>
      <Calendar
        style={{
          height: 350,
          width: width,
          borderRadius: 20,
          backgroundColor: '#f2f2f2',
          borderColor: '#1a1a1a',
          borderWidth: 3,
        }}
        onDayPress={day => {
          console.log('selected day', day);
        }}
        theme={{
          calendarBackground: '#e6e6e6',
        }}
      />
    </Animated.View>
  );
};

export default CalendarComponent;
