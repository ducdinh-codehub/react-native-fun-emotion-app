export interface MarqueeItemIntf {
  title: string;
  style?: {
    color: string;
  };
  imageUrl: string;
}

export interface MarqueeItemStyle {
  color?: string;
  width?: number;
  height?: number;
  borderWidth?: number;
  opacity?: number;
  backgroundColor?: string;
  itemTextSize?: number;
  itemTextWeight?: any;
}

export interface MarqueeIntf {
  ItemList: MarqueeItemIntf[];
  style?: MarqueeItemStyle;
  choosingItem?: MarqueeItemIntf;
  setChoosingItem: (val: MarqueeItemIntf) => void;
  onPress: (val: MarqueeItemIntf) => void;
  selectItem?: MarqueeItemIntf;
}
