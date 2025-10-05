import { DimensionValue } from 'react-native';
import { setupCalendarConfigProps } from './emotionBalance.interface';

export interface CalendarIntf {
  isDisplay: boolean;
  width?: DimensionValue;
  height?: DimensionValue;
  getCalendarConfig?: () => setupCalendarConfigProps;
  getSelectedDate?: any;
}
