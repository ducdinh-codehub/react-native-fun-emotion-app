export interface props {
  value: ScallingButtonIntf;
  minButtonSize: number;
  maxButtonSize: number;
  minButtonImageBorderSize: number;
  maxButtonImageBorderSize: number;
}

export interface ScallingButtonIntf {
  name: string;
  size: { width: number; height: number };
  imageBorder: {
    name: string;
    size: { width: number; height: number };
  };
  isFullContent: boolean;
}
