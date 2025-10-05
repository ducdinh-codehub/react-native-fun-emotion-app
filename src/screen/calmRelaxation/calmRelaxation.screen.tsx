import CircleButton from '@app/components/sharing/circle.button.component';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  Carousel,
  Card,
  Spacings,
  SkeletonView,
} from 'react-native-ui-lib';
import Ionicons from '@expo/vector-icons/Ionicons';
import CalendarComponent from '@app/components/sharing/calendar.component';
import RenderRelaxContentItem from './renderRelaxContentItem.component';
import { LinearGradient } from 'expo-linear-gradient';

interface MusicBoxIntf {
  name: string;
  title: string;
  genre: string;
  long: string;
}
export interface RelaxItemIntf extends MusicBoxIntf {
  description: string;
}
export interface RelaxContetIntf {
  name: string;
  item: RelaxItemIntf[];
  isOpenListItem: boolean;
}

const CalmRelaxation = () => {
  const musicForRelaxation: MusicBoxIntf[] = [
    {
      name: 'comp1',
      title: "I don't know",
      genre: 'indie',
      long: '15 min',
    },
    {
      name: 'comp2',
      title: 'I Know',
      genre: 'indie',
      long: '10 min',
    },
    {
      name: 'comp3',
      title: "I'm thinking",
      genre: 'indie',
      long: '25 min',
    },
  ];

  const typeOfRelaxation: RelaxContetIntf[] = [
    {
      name: 'MEDITATIONS',
      item: [
        {
          name: 'sub-comp1',
          title: 'new 1',
          genre: 'meditations',
          long: '150 min',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'sub-comp2',
          title: 'new 1',
          genre: 'meditations',
          long: '150 min',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: 'sub-comp3',
          title: 'new 1',
          genre: 'meditations',
          long: '150 min',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
      isOpenListItem: false,
    },
    {
      name: 'ACTIVITIES',
      item: [
        {
          name: 'sub-comp1',
          title: 'new 2',
          genre: 'activities',
          long: '200 min',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
      isOpenListItem: false,
    },
    {
      name: 'SLEEPING',
      item: [
        {
          name: 'sub-comp1',
          title: 'new 3',
          genre: 'spleeping',
          long: '250 min',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
      isOpenListItem: false,
    },
  ];

  const renderItem = (item: MusicBoxIntf) => {
    return (
      <View>
        <Card
          width={'100%'}
          height={380}
          backgroundColor="black"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderBottomRightRadius: 100,
          }}
        >
          <LinearGradient
            style={{ flex: 1, borderBottomRightRadius: 100 }}
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
          >
            <View padding-s5 gap-s2>
              <Text text70BO color="white">
                {item.title}
              </Text>
              <Text text30BO color="white">
                {item.name}
              </Text>
              <Text text70BO color="white">
                {item.genre}
              </Text>
              <Text text70BO color="white">
                {item.long}
              </Text>
              <CircleButton
                onPress={() => {}}
                color="white"
                width={70}
                height={70}
                iconSize={25}
                iconName="play"
                iconColor="black"
              />
            </View>
          </LinearGradient>
        </Card>
      </View>
    );
  };

  const [relaxContetItems, setRelaxContentItems] = useState<RelaxItemIntf[]>(
    typeOfRelaxation[0].item,
  );

  console.log('relaxContetItems', relaxContetItems);

  const [favoriteItems, setFavouriteItems] = useState<RelaxItemIntf[]>([]);

  return (
    <View flex backgroundColor="black" center>
      <SafeAreaView padding-s2 style={{ width: '100%', height: '100%' }}>
        <View>
          <Carousel
            itemSpacings={Spacings.s3}
            pageControlPosition={Carousel.pageControlPositions.UNDER}
            containerStyle={{}}
          >
            {musicForRelaxation.map((item, index) => {
              return renderItem(item);
            })}
          </Carousel>
        </View>
        <View row center gap-s10 marginB-s5>
          {typeOfRelaxation.map(item => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setRelaxContentItems(item.item);
                  }}
                >
                  <View center padding-s5>
                    <Text text90BO color="white">
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            );
          })}
        </View>

        {relaxContetItems.length > 0 ? (
          <View>
            <Carousel
              pageWidth={300}
              itemSpacings={Spacings.s3}
              containerMarginHorizontal={Spacings.s1}
              containerStyle={{}}
            >
              {relaxContetItems.map((item, index) => {
                return (
                  <RenderRelaxContentItem
                    item={item}
                    setFavouriteItems={setFavouriteItems}
                    favoriteItems={favoriteItems}
                  />
                );
              })}
            </Carousel>
          </View>
        ) : (
          <></>
        )}
      </SafeAreaView>
    </View>
  );
};

export default CalmRelaxation;
