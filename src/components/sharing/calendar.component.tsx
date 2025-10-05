import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text } from 'react-native-ui-lib';
import {
  Calendar,
  CalendarList,
  Agenda,
  CalendarUtils,
} from 'react-native-calendars';
import { CalendarIntf } from '../interface/calendar.interface';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { DimensionValue } from 'react-native';

import { eachDayOfInterval, format } from 'date-fns';

const current_date = new Date();

const INITIAL_DATE = current_date.toISOString();

const CalendarComponent = (props: CalendarIntf) => {
  const { width, height, getSelectedDate } = props;

  const [selected, setSelected] = useState<{
    startingDate: string;
    endingDate: string;
  }>({
    startingDate: '',
    endingDate: '',
  });

  console.log('selected', selected);

  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  const handleGetEachDayInterval = useCallback(() => {
    var result: any = [];

    console.log('Start rendering');

    if (selected.endingDate && selected.startingDate) {
      const tmp_result = eachDayOfInterval({
        start: selected.startingDate,
        end: selected.endingDate,
      });
      result = tmp_result.splice(1, tmp_result.length - 2);
      result = result.map((item: any) => {
        return format(new Date(item), 'yyyy-MM-dd');
      });
    }

    return result.length > 0 ? result : [];
  }, [selected.endingDate, selected.startingDate]);

  const startEndindRate = handleGetEachDayInterval();

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const markData = useCallback(() => {
    var rst = {};
    if (startEndindRate) {
      for (let i = 0; i < startEndindRate.length; i++) {
        rst = {
          ...rst,
          [startEndindRate[i]]: {
            color: '#90e0ef',
            textColor: 'white',
            marked: true,
            dotColor: 'white',
          },
        };
      }

      rst = {
        ...rst,
        [selected.startingDate]: {
          startingDay: true,
          color: '#48cae4',
          textColor: 'white',
          dotColor: 'white',
        },

        [selected.endingDate]: {
          endingDay: true,
          color: '#0096c7',
          textColor: 'white',
          dotColor: 'white',
        },
      };
    }

    return rst;
  }, [startEndindRate]);

  return (
    <View style={{ height: height, width: width }}>
      <Calendar
        onDayPress={day => {
          if (selected.startingDate !== '' && selected.endingDate !== '') {
            const tmp = { ...selected };
            tmp.startingDate = day.dateString;
            tmp.endingDate = '';
            setSelected(tmp);
            return;
          }

          if (selected.startingDate === '') {
            const tmp = { ...selected };
            tmp.startingDate = day.dateString;
            setSelected(tmp);
            return;
          }

          if (selected.endingDate === '') {
            var tmp = { ...selected };
            tmp.endingDate = day.dateString;

            if (
              new Date(tmp.startingDate).getDate() >
              new Date(tmp.endingDate).getDate()
            ) {
              const abc = {
                startingDate: tmp.endingDate,
                endingDate: tmp.startingDate,
              };
              tmp = abc;
            }

            setSelected(tmp);

            return;
          }
        }}
        style={{
          height: 350,
          width: width,
          borderRadius: 20,
          backgroundColor: '#f2f2f2',
          borderColor: '#1a1a1a',
          borderWidth: 3,
        }}
        markingType={'period'}
        markedDates={markData()}
        theme={{
          textInactiveColor: '#a68a9f',
          inactiveDotColor: '#a68a9f',
          textSectionTitleDisabledColor: 'grey',
          textSectionTitleColor: '#319e8e',
          arrowColor: '#319e8e',
        }}
      />
    </View>
  );
};

export default CalendarComponent;
