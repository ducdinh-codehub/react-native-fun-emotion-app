export type ChartType =
  | 'BarChart'
  | 'LineChart'
  | 'PieChart'
  | 'PopulationPyramid'
  | 'RadarChart';

export interface ChartIntf {
  data: any;
  styles?: any;
  chartType: ChartType;
}
