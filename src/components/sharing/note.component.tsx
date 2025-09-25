import React, { useReducer, useState } from 'react';
import { Dimensions, DimensionValue, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import {
  View,
  Text,
  Card,
  TextField,
  Colors,
  Button,
} from 'react-native-ui-lib';
import { StyleSheet, TextInput } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FontWeight } from '@shopify/react-native-skia';
import DraggableFlatList, {
  NestableDraggableFlatList,
  NestableScrollContainer,
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GrabableList from './grabable.list.component';

export interface NotePropsIntf {
  height?: any;
  width?: any;
  data: any;
  isDisplayNote: boolean;
  setIsShowFullNote?: any;
  setIsShowDrawing?: any;
  dispatch?: any;
  innerDispatchAction: any;
  setInnerDispatchAction: any;
}

export interface NoteDataIntf {
  key: number;
  content: string;
  created: any;
}

const Note = (props: NotePropsIntf) => {
  const {
    height,
    width,
    data,
    isDisplayNote,
    setIsShowFullNote,
    setIsShowDrawing,
    dispatch,
    innerDispatchAction,
    setInnerDispatchAction,
  } = props;
  const [content, onChangeContent] = useState('');

  return (
    <Animated.View style={{ width: '100%', height: '100%', gap: 15 }}>
      {isDisplayNote ? (
        <>
          <View width={'100%'} center>
            <Card height={height} width={'100%'} padding-10 gap-5>
              <View width={'100%'} row right gap-s2>
                <TouchableOpacity
                  onPress={() => {
                    setIsShowDrawing();
                  }}
                >
                  <View
                    br60
                    backgroundColor="#f66"
                    row
                    width={65}
                    padding-2
                    center
                    gap-7
                  >
                    <Text text100BO color="white">
                      Draw
                    </Text>
                    <View
                      br100
                      backgroundColor="grey"
                      padding-3
                      style={{ opacity: 0.7 }}
                    >
                      <FontAwesome6
                        name="hand-pointer"
                        size={10}
                        style={{ color: 'white', FontWeight: 'bold' }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    dispatch({
                      type: 'adding-note',
                      item: {
                        key: data[data.length - 1].key + 1,
                        content: content,
                        created: new Date().toLocaleString(),
                      },
                    });
                    setInnerDispatchAction('adding-note');
                  }}
                >
                  <View
                    br60
                    backgroundColor="#659ae0"
                    row
                    width={65}
                    height={25}
                    padding-2
                    center
                    gap-7
                  >
                    <Text text100BO color="white">
                      Save
                    </Text>
                    <View
                      br100
                      backgroundColor="grey"
                      padding-3
                      style={{ opacity: 0.7 }}
                    >
                      <FontAwesome6
                        name="check"
                        size={10}
                        style={{ color: 'white', FontWeight: 'bold' }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <TextInput
                placeholder="Writing"
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                onChangeText={text => onChangeContent(text)}
                value={content}
                style={styles.textInput}
              />
            </Card>
          </View>
          <View
            height={1}
            style={{ width: '100%' }}
            bg-$backgroundElevatedLight
          ></View>
          <View
            row
            center
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
            padding-10
          >
            <View>
              <Text text60 color="white">
                Your note
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (setIsShowFullNote) {
                  setIsShowFullNote();
                }
              }}
            >
              <View>
                <Text color="grey">See all</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View gap-10>
            <GrabableList
              innerDispatchAction={innerDispatchAction}
              setInnerDispatchAction={setInnerDispatchAction}
              dispatch={dispatch}
              data={data}
              showFullList={false}
            />
            {/*<GestureHandlerRootView>
              <DraggableFlatList
                data={threeFirstNewNote}
                onDragEnd={({ data }) => setYourNoteData(data)}
                keyExtractor={item => '_' + item.key}
                renderItem={renderItem}
              />
            </GestureHandlerRootView>*/}
          </View>
        </>
      ) : (
        <></>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    height: 300,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Note;
