export interface navigationIntf {
  name: string;
  component: any;
  screenIcon: string | null;
  options?: any;
}

export interface tabItemIntf {
  name: string;
  component: any;
  tabIcon?: string | null;
  options?: any;
}

export interface drawerItemIntf {
  name: string;
  component: any;
  tabIcon?: string | null;
  options?: any;
}
