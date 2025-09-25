export interface itemStoreIntf {
  userName: string | null;
  osPlatform: string | null;
  isSignedIn: boolean;
}

export const itemStore: itemStoreIntf = {
  userName: '',
  osPlatform: '',
  isSignedIn: false,
};
