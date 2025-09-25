import { create } from 'zustand';
import { itemStore, itemStoreIntf } from './store.list';

import { combine } from 'zustand/middleware';

export const useStore = create(
  combine(itemStore, (set, get) => {
    return {
      setUserName: (e: any) => {
        set((state: itemStoreIntf) => ({
          userName: typeof e === 'function' ? e(state.userName) : e,
        }));
      },
      setOsPlatform: (e: any) => {
        set((state: itemStoreIntf) => ({
          osPlatform: typeof e === 'function' ? e(state.osPlatform) : e,
        }));
      },
      setSignedIn: (e: any) => {
        set((state: itemStoreIntf) => ({
          isSignedIn: typeof e === 'function' ? e(state.isSignedIn) : e,
        }));
      },
    };
  }),
);
