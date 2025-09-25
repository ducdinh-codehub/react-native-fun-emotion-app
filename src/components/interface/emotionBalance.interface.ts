import { DimensionValue } from 'react-native';

interface StyleConfigIntf {
  width?: number | string;
  height?: number;
}

export interface setupCalendarConfigProps {
  height: DimensionValue;
  width: DimensionValue;
  isOpen: boolean;
}

export interface EmotionBalanceIntf {
  title: string;
  onPress?: any;
  styles?: any;
  innerComponent?: any;
  isAlwaysOpen?: boolean;
  openItemSize?: number;
  iconName?: string;
  setIsDisplayCalendar?: (val: boolean) => void;
  setIsDisplayActivityList?: (val: boolean) => void;
  setHeightCalendar?: (val: DimensionValue) => void;
  setWidthCalendar?: (val: DimensionValue) => void;
  setupCalendarConfig?: (props: setupCalendarConfigProps) => void;
  openActivityList?: () => void;
  closeActivityList?: () => void;
  setOpenNote?: (val: boolean) => void;
  openYourNoteComponent?: () => void;
  closeYourNoteComponent?: () => void;
}
