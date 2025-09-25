import React from 'react';
import { Text, View } from 'react-native-ui-lib';
import CircleButton from './circle.button.component';
import { RecommendIntf } from '../interface/recommend.item.interface';

const RecommendItem = (props: RecommendIntf) => {
  const { title, listSubContent } = props;
  return (
    <View
      padding-s5
      br70
      style={{
        minWidth: 300,
        borderWidth: 2,
        borderColor: '#E6E5E4',
        borderStyle: 'solid',
        flexDirection: 'column',
        backgroundColor: '#F0F0ED',
      }}
      gap-s5
    >
      <View>
        <Text style={{ fontSize: 17, fontWeight: 700 }}>{title}</Text>
      </View>
      <View
        row
        style={{
          columnGap: 100,
        }}
      >
        <View row gap-s5 center>
          {listSubContent.map(item => {
            return (
              <View
                style={{
                  borderWidth: 3,
                  minWidth: 70,
                  backgroundColor: '#ECECEC',
                  height: 37,
                  borderColor: '#E6E5E4',
                  borderStyle: 'solid',
                }}
                padding-s2
                br50
                center
              >
                <Text
                  style={{ color: 'black', fontSize: 12, fontWeight: '700' }}
                >
                  {item.value}
                </Text>
              </View>
            );
          })}
        </View>

        <CircleButton
          iconName="play"
          width={65}
          height={65}
          color={'#7CC6F2'}
          textColor={'black'}
          onPress={() => {}}
          title="start"
          titleSize={15}
        />
      </View>
    </View>
  );
};

export default RecommendItem;
