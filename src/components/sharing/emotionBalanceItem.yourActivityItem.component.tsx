import React from 'react';
import { View, Text, Image } from 'react-native-ui-lib';
import { ActivityIntf } from '../interface/emotionBalanceItem.yourActivityItem.interface';

const EmotionBalanceItemActivityItem = (props: ActivityIntf) => {
  const { styles, data } = props;
  return (
    <View br70 style={styles} padding-s10>
      <View row center style={{ justifyContent: 'space-between' }}>
        <View>
          <Text text60BO color={'white'}>
            {data.title}
          </Text>
        </View>
        <View>
          <Image source={data.imageUrl} />
        </View>
      </View>
    </View>
  );
};

export default EmotionBalanceItemActivityItem;
