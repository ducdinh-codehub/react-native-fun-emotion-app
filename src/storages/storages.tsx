import { MMKV } from 'react-native-mmkv';

const storageMMKV = new MMKV();
const auth_key = 'auth-is-signin';

const get = () => {
  return storageMMKV.getString(auth_key);
};

const set = async (input: boolean) => {
  await storageMMKV.set(auth_key, input ? 'true' : 'false');
};

export const storage = {
  get,
  set,
};
