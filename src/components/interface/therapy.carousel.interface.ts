export interface TherapyCarouselIntf {
  image?: string;
  title: string;
  content?: string;
  currentTime: Date;
  ownerName: string;
  source?: string;
  avatar?: string;
  handleTherapy: string;
  itemDfColor: string;
  nameSymptom: string;
  onPress?: (val?: any) => void;
}

export interface TherapyCarouselProps {
  data: TherapyCarouselIntf[];
  onPress?: (val?: any) => void;
}
