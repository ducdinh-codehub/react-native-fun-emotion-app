import { TherapyCarouselIntf } from '../../components/interface/therapy.carousel.interface';

export interface WayToHandleIntf extends TherapyCarouselIntf {
  name: string;
  content: string;
}

export interface WorryReasonListData {
  label: string;
  color?: string;
  description: string;
  waysToHandle?: WayToHandleIntf[];
}
