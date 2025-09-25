import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native-ui-lib';

export interface DataIntf {
  key: number;
  content: string;
  created: any;
}

export interface props {
  data: any;
  showFullList: boolean;
  dispatch: any;
  innerDispatchAction: string;
  setInnerDispatchAction: any;
}

const GrabableList = (props: props) => {
  const {
    data,
    showFullList,
    dispatch,
    innerDispatchAction,
    setInnerDispatchAction,
  } = props;
  var DATA = [...data];

  const renderItem = ({
    item,
    getIndex,
    drag,
    isActive,
  }: RenderItemParams<DataIntf>) => {
    const index = getIndex() ?? 0;
    if (showFullList) {
      return (
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={{ flex: 1, paddingTop: 10 }}
          onPress={() => {
            Alert.alert('Bye');
          }}
        >
          <View
            br70
            backgroundColor="black"
            width={'100%'}
            padding-5
            center
            row
            style={{ justifyContent: 'space-between' }}
          >
            <View width={'80%'}>
              <View paddingL-10 paddingB-10 paddingT-10>
                <Text color="white" text100BO>
                  Created: {item.created}
                </Text>
              </View>
              <View paddingL-10 paddingB-10 paddingT-10>
                <Text
                  text100
                  color={'white'}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                >
                  Note: {item.content}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                dispatch({
                  type: 'removing-note-by-key',
                  item: item,
                });
                setInnerDispatchAction('removing-note-by-key');
              }}
            >
              <View padding-15 center>
                <FontAwesome6 name="trash-can" color={'red'} size={25} />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    } else {
      if (index < 3) {
        return (
          <TouchableOpacity
            onLongPress={drag}
            disabled={isActive}
            style={{ flex: 1, paddingTop: 10 }}
          >
            <View br70 backgroundColor="black" width={'100%'} padding-5 centerV>
              <View paddingL-10 paddingB-10 paddingT-10>
                <Text color="white" text100BO>
                  Created: {item.created}
                </Text>
              </View>
              <View paddingL-10 paddingB-10 paddingT-10>
                <Text
                  text100
                  color={'white'}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                >
                  Note: {item.content}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }
    }
  };

  return (
    <GestureHandlerRootView>
      <DraggableFlatList
        data={
          innerDispatchAction !== 'updating-all-list' ? DATA.reverse() : DATA
        }
        onDragEnd={({ data }) => {
          console.log('relocatedata', data);

          dispatch({
            type: 'updating-all-list',
            listItems: [...data],
          });
          setInnerDispatchAction('updating-all-list');
        }}
        keyExtractor={item => '_' + item.key}
        renderItem={renderItem}
      />
    </GestureHandlerRootView>
  );
};

export default GrabableList;
