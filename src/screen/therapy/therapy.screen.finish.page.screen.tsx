import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native-ui-lib';
import { Confetti, ConfettiMethods } from 'react-native-fast-confetti';
import { TherapyCarouselIntf } from '../../components/interface/therapy.carousel.interface';
import TherapyCarousel from '../../components/sharing/therapy.carousel.component';
import { WayToHandleIntf } from './therapy.screen.interface';

const TherapyFinishPage = (params: any) => {
  return <></>;

  /*

  const { listChosenSymptom } = params.route.params;

  console.log('listChosenSymptom', listChosenSymptom);

  const navigation = useNavigation();
  const confettiRef = useRef<ConfettiMethods>(null);

  useEffect(() => {
    confettiRef.current?.restart();
  }, []);

  useEffect(() => {
    if (listChosenSymptom) {
    }
  }, [listChosenSymptom]);

  const data: WayToHandleIntf[] = listChosenSymptom;

  console.log('data', data);

  return (
    <SafeAreaProvider style={{ backgroundColor: 'black' }}>
      <Confetti autoplay={false} ref={confettiRef} />
      <SafeAreaView>
        <View row gap-s2 center padding-s2>
          <View
            br90
            height={3}
            width={100}
            style={{
              backgroundColor: 'white',
              opacity: 1,
            }}
          ></View>

          <View
            br90
            height={3}
            width={100}
            style={{
              backgroundColor: 'white',
              opacity: 1,
            }}
          ></View>

          <View
            br90
            height={3}
            width={100}
            style={{
              backgroundColor: 'white',
              opacity: 1,
            }}
          ></View>
        </View>
      </SafeAreaView>
      <View center paddingT-s10 padding-s10>
        <Text
          style={{
            fontSize: 29,
            color: 'white',
            fontWeight: '900',
          }}
        >
          Hey, let's relax and improve one step at a time!
        </Text>
      </View>

      <View>
        <TherapyCarousel data={data} />
      </View>

      <View center row style={{ bottom: 0, position: 'absolute' }} padding-s5>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View padding-s10 center>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: '700' }}>
              Prev
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View
            width={220}
            height={50}
            br90
            style={{ borderWidth: 1, backgroundColor: 'white' }}
            center
          >
            <Text style={{ fontSize: 17, fontWeight: '700' }}>Do it later</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );*/
};

export default TherapyFinishPage;
