import { Card, View, Text, TouchableOpacity } from 'react-native-ui-lib';
import { RelaxContetIntf, RelaxItemIntf } from './calmRelaxation.screen';
import { useState } from 'react';
import CircleButton from '@app/components/sharing/circle.button.component';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  item: RelaxItemIntf;
  setFavouriteItems: any;
  favoriteItems: any;
}

const RenderRelaxContentItem = (props: Props) => {
  const { item, setFavouriteItems, favoriteItems } = props;
  const [isFavouriteContent, setIsFavouriteContent] = useState(false);

  return (
    <Card
      width={'100%'}
      height={300}
      backgroundColor="black"
      style={{
        borderWidth: 1,
        borderColor: 'gray',
      }}
    >
      <LinearGradient
        style={{ width: '100%', height: '100%', borderRadius: 10 }}
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
      >
        <View padding-s5 style={{ flex: 1, justifyContent: 'space-between' }}>
          <View row style={{ justifyContent: 'space-between' }}>
            <View
              style={{ borderRadius: 30, backgroundColor: 'gray' }}
              padding-s2
            >
              <Text text90BO color="white">
                {item.long}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  const tmp = [...favoriteItems];

                  const isChose = favoriteItems.some(
                    ele => ele.name === item.name,
                  );

                  if (!isChose) {
                    tmp.push(item);
                    setFavouriteItems(tmp);
                  } else {
                    setFavouriteItems(
                      tmp.filter(val => val.name !== item.name),
                    );
                  }

                  setIsFavouriteContent(isChose ? false : true);
                }}
              >
                {!isFavouriteContent ? (
                  <Ionicons name="heart-outline" color="white" size={30} />
                ) : (
                  <Ionicons name="heart-sharp" color="gray" size={30} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View gap-s5>
            <Text text40BO color="white">
              {item.name}
            </Text>
            <Text text90BO color="white" numberOfLines={2} ellipsizeMode="tail">
              {item.description}
            </Text>

            <CircleButton
              onPress={() => {}}
              color="white"
              width={30}
              height={30}
              iconSize={15}
              iconName="play"
              iconColor="black"
            />
          </View>
        </View>
      </LinearGradient>
    </Card>
  );
};

export default RenderRelaxContentItem;
