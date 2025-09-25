import React, { useState } from 'react';
import { ColorPalette, Text, View } from 'react-native-ui-lib';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../navigation.constants';
import {
  WayToHandleIntf,
  WorryReasonListData,
} from './therapy.screen.interface';

const TherayWorryPage = () => {
  const navigation = useNavigation();

  const DATA: WorryReasonListData[] = [
    {
      label: 'Sleepiness',
      color: '#000000',
      description:
        'Feeling excessively tired or drowsy, often struggling to stay awake during the day.',
      waysToHandle: [
        {
          name: 'Get natural sunlight exposure',
          image: 'https://via.placeholder.com/50?text=Sunlight',
          title: 'Sunlight Boost',
          content: 'Boosts alertness with morning light.',
          currentTime: new Date(),
          ownerName: 'Dr. SleepExpert',
          source: 'Health Journal',
          avatar: 'https://via.placeholder.com/30?text=DS',
          handleTherapy: 'Morning Walk',
          itemDfColor: '#FFD700',
          nameSymptom: 'Sleepiness',
        },
        {
          name: 'Take short power nap',
          image: 'https://via.placeholder.com/50?text=Nap',
          title: 'Power Nap',
          content: 'Recharges energy in 10-20 minutes.',
          currentTime: new Date(),
          ownerName: 'Dr. RestWell',
          source: 'Sleep Study',
          avatar: 'https://via.placeholder.com/30?text=RW',
          handleTherapy: 'Nap Schedule',
          itemDfColor: '#87CEEB',
          nameSymptom: 'Sleepiness',
        },
        {
          name: 'Exercise to boost energy',
          image: 'https://via.placeholder.com/50?text=Exercise',
          title: 'Energy Exercise',
          content: 'Increases stamina through daily movement.',
          currentTime: new Date(),
          ownerName: 'Coach Vitality',
          avatar: 'https://via.placeholder.com/30?text=CV',
          handleTherapy: 'Daily Stretching',
          itemDfColor: '#98FB98',
          nameSymptom: 'Sleepiness',
        },
      ],
    },
    {
      label: 'Sadness',
      color: '#000000',
      description:
        'A deep feeling of sorrow or unhappiness that can persist and affect daily life.',
      waysToHandle: [
        {
          name: 'Talk to trusted friend',
          image: 'https://via.placeholder.com/50?text=Talk',
          title: 'Friend Chat',
          content: 'Shares burden, lifts mood quickly.',
          currentTime: new Date(),
          ownerName: 'Therapist Joy',
          avatar: 'https://via.placeholder.com/30?text=TJ',
          handleTherapy: 'Support Call',
          itemDfColor: '#FFA500',
          nameSymptom: 'Sadness',
        },
        {
          name: 'Engage in joyful activities',
          image: 'https://via.placeholder.com/50?text=Joy',
          title: 'Joyful Moments',
          content: 'Sparks happiness with fun tasks.',
          currentTime: new Date(),
          ownerName: 'Life Coach',
          avatar: 'https://via.placeholder.com/30?text=LC',
          handleTherapy: 'Hobby Time',
          itemDfColor: '#FF69B4',
          nameSymptom: 'Sadness',
        },
        {
          name: 'Practice self-compassion',
          image: undefined,
          title: 'Self-Kindness',
          content: 'Eases pain with kind self-talk.',
          currentTime: new Date(),
          ownerName: 'Mindfulness Guru',
          avatar: undefined,
          handleTherapy: 'Meditation',
          itemDfColor: '#9370DB',
          nameSymptom: 'Sadness',
        },
      ],
    },
    {
      label: 'Anxiety',
      color: '#ADD8E6',
      description:
        'A state of unease or worry, often accompanied by restlessness or a racing heart.',
      waysToHandle: [
        {
          name: 'Practice deep breathing',
          image: 'https://via.placeholder.com/50?text=Breathe',
          title: 'Breathing Exercise',
          content: 'Calms nerves in minutes.',
          currentTime: new Date(),
          ownerName: 'Calm Expert',
          avatar: 'https://via.placeholder.com/30?text=CE',
          handleTherapy: 'Breath Work',
          itemDfColor: '#20B2AA',
          nameSymptom: 'Anxiety',
        },
        {
          name: 'Engage in physical activity',
          image: 'https://via.placeholder.com/50?text=Activity',
          title: 'Active Relief',
          content: 'Reduces tension with movement.',
          currentTime: new Date(),
          ownerName: 'Fitness Guru',
          avatar: 'https://via.placeholder.com/30?text=FG',
          handleTherapy: 'Yoga Session',
          itemDfColor: '#ADFF2F',
          nameSymptom: 'Anxiety',
        },
        {
          name: 'Challenge anxious thoughts',
          image: undefined,
          title: 'Thought Reframe',
          content: 'Reframe worries for peace.',
          currentTime: new Date(),
          ownerName: 'Mind Coach',
          avatar: undefined,
          handleTherapy: 'Journaling',
          itemDfColor: '#BA55D3',
          nameSymptom: 'Anxiety',
        },
      ],
    },
    {
      label: 'Stress',
      color: '#000000',
      description:
        'Tension or pressure from demanding situations, potentially leading to physical or mental strain.',
      waysToHandle: [
        {
          name: 'Practice daily mindfulness',
          image: 'https://via.placeholder.com/50?text=Mindful',
          title: 'Mindful Moments',
          content: 'Relaxes mind with focus.',
          currentTime: new Date(),
          ownerName: 'Zen Master',
          avatar: 'https://via.placeholder.com/30?text=ZM',
          handleTherapy: 'Meditation',
          itemDfColor: '#FFD700',
          nameSymptom: 'Stress',
        },
        {
          name: 'Incorporate regular exercise',
          image: 'https://via.placeholder.com/50?text=Exercise',
          title: 'Exercise Relief',
          content: 'Lowers stress with activity.',
          currentTime: new Date(),
          ownerName: 'Health Coach',
          avatar: 'https://via.placeholder.com/30?text=HC',
          handleTherapy: 'Daily Walk',
          itemDfColor: '#87CEEB',
          nameSymptom: 'Stress',
        },
        {
          name: 'Prioritize tasks effectively',
          image: undefined,
          title: 'Task Management',
          content: 'Manages workload calmly.',
          currentTime: new Date(),
          ownerName: 'Org Expert',
          avatar: undefined,
          handleTherapy: 'To-Do List',
          itemDfColor: '#98FB98',
          nameSymptom: 'Stress',
        },
      ],
    },
    {
      label: 'Loneliness',
      color: '#000000',
      description:
        'A sense of isolation or lack of connection with others, even in social settings.',
      waysToHandle: [
        {
          name: 'Reach out to friends',
          image: 'https://via.placeholder.com/50?text=Friends',
          title: 'Friend Connection',
          content: 'Builds connection fast.',
          currentTime: new Date(),
          ownerName: 'Social Guide',
          avatar: 'https://via.placeholder.com/30?text=SG',
          handleTherapy: 'Phone Call',
          itemDfColor: '#FFA500',
          nameSymptom: 'Loneliness',
        },
        {
          name: 'Join interest-based groups',
          image: 'https://via.placeholder.com/50?text=Group',
          title: 'Group Join',
          content: 'Meets like-minded people.',
          currentTime: new Date(),
          ownerName: 'Community Lead',
          avatar: 'https://via.placeholder.com/30?text=CL',
          handleTherapy: 'Club Meeting',
          itemDfColor: '#FF69B4',
          nameSymptom: 'Loneliness',
        },
        {
          name: 'Engage in self-care',
          image: undefined,
          title: 'Self-Care Time',
          content: 'Boosts inner comfort.',
          currentTime: new Date(),
          ownerName: 'Wellness Coach',
          avatar: undefined,
          handleTherapy: 'Relaxation',
          itemDfColor: '#9370DB',
          nameSymptom: 'Loneliness',
        },
      ],
    },
    {
      label: 'Insomnia',
      color: '#000000',
      description:
        'Difficulty falling or staying asleep, resulting in fatigue and impaired focus.',
      waysToHandle: [
        {
          name: 'Maintain consistent schedule',
          image: 'https://via.placeholder.com/50?text=Schedule',
          title: 'Sleep Schedule',
          content: 'Regulates sleep cycle.',
          currentTime: new Date(),
          ownerName: 'Sleep Doc',
          avatar: 'https://via.placeholder.com/30?text=SD',
          handleTherapy: 'Bedtime Routine',
          itemDfColor: '#20B2AA',
          nameSymptom: 'Insomnia',
        },
        {
          name: 'Create relaxing routine',
          image: 'https://via.placeholder.com/50?text=Relax',
          title: 'Relax Routine',
          content: 'Eases into sleep.',
          currentTime: new Date(),
          ownerName: 'Rest Coach',
          avatar: 'https://via.placeholder.com/30?text=RC',
          handleTherapy: 'Warm Bath',
          itemDfColor: '#ADFF2F',
          nameSymptom: 'Insomnia',
        },
        {
          name: 'Avoid screens before bed',
          image: undefined,
          title: 'Screen Break',
          content: 'Prevents sleep disruption.',
          currentTime: new Date(),
          ownerName: 'Tech Expert',
          avatar: undefined,
          handleTherapy: 'Read Instead',
          itemDfColor: '#BA55D3',
          nameSymptom: 'Insomnia',
        },
      ],
    },
    {
      label: 'Anger',
      color: '#000000',
      description:
        'A strong feeling of displeasure or frustration, sometimes leading to aggressive behavior.',
      waysToHandle: [
        {
          name: 'Take short time-out',
          image: 'https://via.placeholder.com/50?text=Timeout',
          title: 'Calm Break',
          content: 'Pauses to cool down.',
          currentTime: new Date(),
          ownerName: 'Anger Coach',
          avatar: 'https://via.placeholder.com/30?text=AC',
          handleTherapy: 'Deep Breaths',
          itemDfColor: '#FFD700',
          nameSymptom: 'Anger',
        },
        {
          name: 'Release tension physically',
          image: 'https://via.placeholder.com/50?text=Release',
          title: 'Tension Release',
          content: 'Releases anger safely.',
          currentTime: new Date(),
          ownerName: 'Fitness Trainer',
          avatar: 'https://via.placeholder.com/30?text=FT',
          handleTherapy: 'Punching Bag',
          itemDfColor: '#87CEEB',
          nameSymptom: 'Anger',
        },
        {
          name: 'Express feelings calmly',
          image: undefined,
          title: 'Calm Expression',
          content: 'Resolves conflict peacefully.',
          currentTime: new Date(),
          ownerName: 'Peace Guide',
          avatar: undefined,
          handleTherapy: 'Talk It Out',
          itemDfColor: '#98FB98',
          nameSymptom: 'Anger',
        },
      ],
    },
    {
      label: 'Apathy',
      color: '#ADD8E6',
      description:
        'A lack of interest or emotion, often making it hard to feel motivated or engaged.',
      waysToHandle: [
        {
          name: 'Set small goals',
          image: 'https://via.placeholder.com/50?text=Goals',
          title: 'Small Wins',
          content: 'Builds motivation gradually.',
          currentTime: new Date(),
          ownerName: 'Motivation Expert',
          avatar: 'https://via.placeholder.com/30?text=ME',
          handleTherapy: 'Daily Tasks',
          itemDfColor: '#FFA500',
          nameSymptom: 'Apathy',
        },
        {
          name: 'Try new activities',
          image: 'https://via.placeholder.com/50?text=New',
          title: 'New Fun',
          content: 'Sparks interest quickly.',
          currentTime: new Date(),
          ownerName: 'Activity Leader',
          avatar: 'https://via.placeholder.com/30?text=AL',
          handleTherapy: 'Explore Hobbies',
          itemDfColor: '#FF69B4',
          nameSymptom: 'Apathy',
        },
        {
          name: 'Practice gratitude journaling',
          image: undefined,
          title: 'Gratitude Log',
          content: 'Lifts mood daily.',
          currentTime: new Date(),
          ownerName: 'Wellness Guru',
          avatar: undefined,
          handleTherapy: 'Write Thanks',
          itemDfColor: '#9370DB',
          nameSymptom: 'Apathy',
        },
      ],
    },
    {
      label: 'Envy',
      color: '#000000',
      description:
        'A resentful desire for others’ success or possessions, which can breed discontent.',
      waysToHandle: [
        {
          name: 'Acknowledge without judgment',
          image: 'https://via.placeholder.com/50?text=Accept',
          title: 'Self-Acceptance',
          content: 'Accepts feelings honestly.',
          currentTime: new Date(),
          ownerName: 'Emotion Coach',
          avatar: 'https://via.placeholder.com/30?text=EC',
          handleTherapy: 'Self-Reflection',
          itemDfColor: '#20B2AA',
          nameSymptom: 'Envy',
        },
        {
          name: 'Practice daily gratitude',
          image: 'https://via.placeholder.com/50?text=Gratitude',
          title: 'Grateful Mind',
          content: 'Shifts focus positively.',
          currentTime: new Date(),
          ownerName: 'Positive Thinker',
          avatar: 'https://via.placeholder.com/30?text=PT',
          handleTherapy: 'Daily Notes',
          itemDfColor: '#ADFF2F',
          nameSymptom: 'Envy',
        },
        {
          name: 'Channel into growth',
          image: undefined,
          title: 'Growth Path',
          content: 'Turns envy into action.',
          currentTime: new Date(),
          ownerName: 'Growth Mentor',
          avatar: undefined,
          handleTherapy: 'Set Goals',
          itemDfColor: '#BA55D3',
          nameSymptom: 'Envy',
        },
      ],
    },
  ];

  const [choosingSymptoms, setChoosingSymptoms] = useState<WayToHandleIntf[]>(
    [],
  );

  console.log('choosingSymptoms', choosingSymptoms);
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ top: insets.top + 30, backgroundColor: 'black' }}>
      <View center paddingT-s10>
        <Text
          style={{
            fontSize: 29,
            color: 'white',
            fontWeight: '900',
          }}
        >
          What is worrying you ?
        </Text>
      </View>

      <View paddingT-s10 center paddingL-s5 paddingR-s5>
        <View
          row
          width={300}
          height={500}
          style={{
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
          padding-s2
          gap-s5
        >
          {DATA.map(item => {
            return choosingSymptoms.find(
              it => it.nameSymptom === item.label,
            ) ? (
              <TouchableOpacity
                onPress={() => {
                  const checkExist = choosingSymptoms.find(
                    it => it.nameSymptom === item.label,
                  );

                  var tmpChoosingData: any = [];
                  if (checkExist) {
                    const filterExist = choosingSymptoms.filter(
                      it => it.nameSymptom !== item.label,
                    );
                    tmpChoosingData = [...filterExist];
                  } else {
                    tmpChoosingData = [
                      ...choosingSymptoms,
                      ...item.waysToHandle,
                    ];
                  }

                  setChoosingSymptoms(tmpChoosingData);
                }}
              >
                <View
                  br70
                  width={120}
                  height={60}
                  bg-grey40
                  center
                  padding-s2
                  style={{ opacity: 0.7 }}
                >
                  <Text
                    style={{ fontSize: 15, fontWeight: 900, color: 'white' }}
                  >
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  const tmpChoosingData: any = [
                    ...choosingSymptoms,
                    ...item.waysToHandle,
                  ];
                  setChoosingSymptoms(tmpChoosingData);
                }}
              >
                <View
                  br70
                  width={120}
                  height={60}
                  bg-grey10
                  center
                  padding-s2
                  style={{ opacity: 0.7 }}
                >
                  <Text
                    style={{ fontSize: 15, fontWeight: 900, color: 'white' }}
                  >
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View center row style={{ bottom: 0, position: 'absolute' }} padding-s5>
        <TouchableOpacity>
          <View padding-s10 center>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: '700' }}>
              Skip
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={choosingSymptoms.length === 0}
          onPress={() => {
            navigation.navigate(screenName.therapyFinishPage, {
              listChosenSymptom: choosingSymptoms,
            });
          }}
        >
          <View
            width={220}
            height={50}
            br90
            style={{
              borderWidth: 1,
              backgroundColor:
                choosingSymptoms.length > 0 ? 'white' : '#0d1b2a',
            }}
            center
          >
            <Text style={{ fontSize: 17, fontWeight: '700' }}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TherayWorryPage;
