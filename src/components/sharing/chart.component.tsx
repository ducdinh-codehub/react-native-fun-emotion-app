import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import {
  BarChart,
  CurveType,
  DataSet,
  LineChart,
  PieChart,
  PopulationPyramid,
  RadarChart,
} from 'react-native-gifted-charts';
import { ChartIntf, ChartType } from '../interface/chart.interface';

const Chart = (props: ChartIntf) => {
  const { data, chartType } = props;

  const dataSet: Array<DataSet> = [
    {
      data: data,
      color: 'skyblue',
      dataPointsColor: '#3399ff',
      textColor: 'green',
      dataPointsRadius: 5,
      curved: true,
      curveType: CurveType.CUBIC,
      thickness: 5,
    },
  ];

  if (chartType === 'LineChart') {
    return (
      /*
      <LineChart
        dataSet={dataSet}
        stepChart
        height={250}
        showVerticalLines
        spacing={44}
        initialSpacing={0}
        dataPointsHeight={6}
        dataPointsWidth={6}
        textShiftY={-2}
        textShiftX={-5}
        
        showValuesAsDataPointsText
        yAxisOffset={80}
      />*/
      <LineChart
        dataSet={dataSet}
        yAxisTextStyle={{ color: 'white', fontSize: 10 }}
        xAxisLabelTextStyle={{ color: 'white', fontSize: 10 }}
        yAxisLabelSuffix={'%'}
      />
    );
  } else {
    return <></>;
  }
};

export default Chart;
