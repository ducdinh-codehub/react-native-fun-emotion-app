import { setupCalendarConfigProps } from '@app/components/interface/emotionBalance.interface';
import { ItemDataIntf } from '@app/components/interface/emotionBalanceItem.yourActivityItem.interface';
import CalendarComponent from '@app/components/sharing/calendar.component';
import Chart from '@app/components/sharing/chart.component';
import CircleButton from '@app/components/sharing/circle.button.component';
import Drawing from '@app/components/sharing/drawing.component';
import EmotionBalanceItem from '@app/components/sharing/emotionBalanceItem.component';
import EmotionBalanceItemActivityItemList from '@app/components/sharing/emotionBalanceItem.yourActivityItemList.component';
import GrabableList from '@app/components/sharing/grabable.list.component';
import Note, { NoteDataIntf } from '@app/components/sharing/note.component';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BlurView } from '@react-native-community/blur';
import React, { useCallback, useRef, useState } from 'react';
import { DimensionValue, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View, Text, Slider } from 'react-native-ui-lib';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const EmotionBalance = () => {
  const insets = useSafeAreaInsets();
  const lineData = [
    { value: 60, label: '1/9' },
    { value: 80, label: '2/9' },
    { value: 50, label: '3/9' },
    { value: 50, label: '4/9' },
    { value: 90, label: '5/9' },
    { value: 70, label: '6/9' },
    { value: 50, label: '7/9' },
    { value: 100, label: '8/9' },
    { value: 100, label: '9/9' },
    { value: 0, label: '10/9' },
    { value: 0, label: '11/9' },
    { value: 0, label: '12/9' },
    { value: 0, label: '13/9' },
    { value: 0, label: '14/9' },
    { value: 0, label: '15/9' },
    { value: 0, label: '16/9' },
    { value: 0, label: '17/9' },
    { value: 0, label: '18/9' },
    { value: 0, label: '19/9' },
    { value: 0, label: '20/9' },
    { value: 0, label: '21/9' },
    { value: 0, label: '22/9' },
    { value: 0, label: '23/9' },
    { value: 0, label: '24/9' },
    { value: 0, label: '25/9' },
    { value: 0, label: '26/9' },
    { value: 0, label: '27/9' },
    { value: 0, label: '28/9' },
    { value: 0, label: '29/9' },
    { value: 0, label: '30/9' },
  ];

  const activityItem: ItemDataIntf[] = [
    { title: 'Matial art', imageUrl: require('@assets/images/matial-art.png') },
    { title: 'Swim', imageUrl: require('@assets/images/swim.png') },
    { title: 'Marathon', imageUrl: require('@assets/images/marathon.png') },
    { title: 'Football', imageUrl: require('@assets/images/football.png') },
    { title: 'Volleyball', imageUrl: require('@assets/images/volleyball.png') },
    { title: 'Basketball', imageUrl: require('@assets/images/basketball.png') },
  ];

  const [isDisplayCalendar, setIsDisplayCalendar] = useState<boolean>(false);
  const [isDisplayActivityList, setIsDisplayActivityList] =
    useState<boolean>(false);

  const [heightCalendar, setHeightCalendar] = useState<DimensionValue>(0);
  const [widthCalendar, setWidthCalendar] = useState<DimensionValue>(0);

  const setupCalendarConfig = (props: setupCalendarConfigProps) => {
    setHeightCalendar(props.height);
    setWidthCalendar(props.width);
    setIsDisplayCalendar(props.isOpen);
  };

  const getCalendarConfig = (): setupCalendarConfigProps => {
    return {
      width: widthCalendar,
      height: heightCalendar,
      isOpen: isDisplayCalendar,
    };
  };

  const activityListHeight = useSharedValue<number>(0);
  const activityListwidth = useSharedValue<number>(0);

  const yourNoteComponentHeight = useSharedValue<number>(0);
  const yourNoteComponentWidth = useSharedValue<number>(0);

  const [isOpenNote, setIsOpenNote] = useState(false);

  const [isShowFullYourNote, setIsShowFullNote] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const drawingSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = ['75%']; // Example with percentage values

  const openActivityList = () => {
    activityListHeight.value = withSpring(activityListHeight.value + 350);
    activityListwidth.value = withSpring(activityListwidth.value + 370);
  };

  const closeActivityList = () => {
    activityListHeight.value = withSpring(activityListHeight.value - 350);
    activityListwidth.value = withSpring(activityListwidth.value - 370);
  };

  const openYourNoteComponent = () => {
    yourNoteComponentHeight.value = withSpring(
      yourNoteComponentHeight.value + 550,
    );
    yourNoteComponentWidth.value = withSpring(
      yourNoteComponentWidth.value + 350,
    );
  };

  const closeYourNoteComponent = () => {
    yourNoteComponentHeight.value = withSpring(
      yourNoteComponentHeight.value - 350,
    );
    yourNoteComponentWidth.value = withSpring(
      yourNoteComponentWidth.value - 370,
    );
  };

  const [NoteData, setNoteData] = useState<NoteDataIntf[]>([
    {
      key: 2,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created: '22/09/2025',
    },
    {
      key: 3,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      created: '22/09/2025',
    },
    {
      key: 4,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      created: '22/09/2025',
    },
    { key: 1, content: 'I promise I will', created: '22/09/2025' },
  ]);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsShowFullNote(true);
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handlePresentDrawingModalPress = useCallback(() => {
    drawingSheetModalRef.current?.present();
    setIsShowFullNote(true);
  }, []);
  const handleDrawingSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  const addingNewNoteData = (note: NoteDataIntf[]) => {
    setNoteData(note);
  };

  const [emotionSliderValue, setEmotionSliderValue] = useState(50);
  console.log('emotionSliderValue', emotionSliderValue);

  const handleValueChange = (newValue: number) => {
    setEmotionSliderValue(newValue);
  };

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <View flex gap-s2>
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
        <View height={150} style={{ backgroundColor: '#66a3ff' }} center>
          <Text text50BO style={{ fontWeight: '800' }} color={'white'}>
            Improve Yourself Everyday
          </Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View padding-s2 gap-s5>
            <EmotionBalanceItem
              openItemSize={0}
              iconName="masks-theater"
              title="How Do You feel Today ?"
              isAlwaysOpen={true}
              innerComponent={
                <View row center gap-5>
                  <FontAwesome6
                    size={30}
                    name="face-sad-tear"
                    style={{ color: 'white' }}
                  />
                  <View width={270} padding-5>
                    <Slider
                      onValueChange={handleValueChange}
                      minimumTrackTintColor="blue"
                      maximumTrackTintColor="orange"
                      minimumValue={0}
                      maximumValue={100}
                      value={emotionSliderValue}
                      style={{ width: '100%' }}
                    />
                  </View>
                  <FontAwesome6
                    size={30}
                    name="face-smile-beam"
                    style={{ color: 'white' }}
                  />
                </View>
              }
            />
            <EmotionBalanceItem
              setupCalendarConfig={setupCalendarConfig}
              setHeightCalendar={setHeightCalendar}
              setWidthCalendar={setWidthCalendar}
              setIsDisplayCalendar={setIsDisplayCalendar}
              iconName="calendar-check"
              title="Calendar"
              isAlwaysOpen={true}
              innerComponent={
                <CalendarComponent
                  getCalendarConfig={getCalendarConfig}
                  width={'100%'}
                  height={'100%'}
                  isDisplay={isDisplayCalendar}
                />
              }
            />
            <EmotionBalanceItem
              setIsDisplayActivityList={setIsDisplayActivityList}
              iconName="person-running"
              title="Your Activity"
              openActivityList={openActivityList}
              closeActivityList={closeActivityList}
              innerComponent={
                <EmotionBalanceItemActivityItemList
                  width={activityListHeight}
                  height={activityListwidth}
                  data={activityItem}
                  isDisplayActivityList={isDisplayActivityList}
                />
              }
            />
            <EmotionBalanceItem
              iconName="note-sticky"
              title="Note"
              setOpenNote={setIsOpenNote}
              openYourNoteComponent={openYourNoteComponent}
              closeYourNoteComponent={closeYourNoteComponent}
              innerComponent={
                <Note
                  setIsShowDrawing={handlePresentDrawingModalPress}
                  setNoteData={setNoteData}
                  width={yourNoteComponentWidth}
                  height={yourNoteComponentHeight}
                  data={NoteData}
                  isDisplayNote={isOpenNote}
                  setIsShowFullNote={handlePresentModalPress}
                />
              }
            />
            <EmotionBalanceItem
              iconName="bars-progress"
              title="Progress"
              isAlwaysOpen={true}
              openItemSize={200}
              innerComponent={<Chart data={lineData} chartType="LineChart" />}
            />
          </View>
        </ScrollView>

        <BottomSheetModalProvider>
          <BottomSheetModal
            index={1}
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
          >
            <BottomSheetView
              style={{
                flex: 1,
                alignItems: 'center',
              }}
            >
              <View padding-10 center>
                <Text text60BO>Your Note</Text>
                <View>
                  <GrabableList
                    data={NoteData}
                    setData={addingNewNoteData}
                    showFullList={true}
                  />
                </View>
              </View>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>

        <BottomSheetModalProvider>
          <BottomSheetModal
            index={1}
            ref={drawingSheetModalRef}
            onChange={handleDrawingSheetChanges}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
          >
            <BottomSheetView
              style={{
                flex: 1,
                alignItems: 'center',
              }}
            >
              <View flex padding-10 center width={'100%'} height={550}>
                <Text text60BO>Drawing</Text>
                <Drawing />
              </View>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </GestureHandlerRootView>
  );
};

export default EmotionBalance;
