import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Drawing from '@app/components/sharing/drawing.component';

const News = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Drawing />
    </SafeAreaView>
  );
};

export default News;
