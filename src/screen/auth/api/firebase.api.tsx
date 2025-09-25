import { useContext } from 'react';
import { useStore } from '../../../store/store.init';
import { UserInformation } from '../auth.interface';

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@react-native-firebase/auth';
import { AuthContext } from '../../../context/auth.context';
import { storage } from '../../../storages/storages';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../../navigation.constants';

export const signOutByFirebase = async (
  setSignIn: (input: boolean) => void,
  navigation: any,
) => {
  await storage.set(false);
  setSignIn(storage.get() === 'true');
  signOut(getAuth()).then(() => console.log('User signed out!'));
};
export const loginByFirebase = (
  props: UserInformation,
  setSignIn: (input: boolean) => void,
) => {
  signInWithEmailAndPassword(getAuth(), props.userName, props.password)
    .then(async () => {
      console.log('User signed in successfully!');

      await storage.set(true);
      setSignIn(storage.get() === 'true');
    })
    .catch(error => {
      if (error.code === 'auth/user-not-found') {
        console.log('No user found with this email.');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      if (error.code === 'auth/wrong-password') {
        console.log('Incorrect password.');
      }

      console.error(error);
    });
  console.log('finish');
};

export const createAccByFirebase = (
  props: UserInformation,
  setSignIn: (input: boolean) => void,
) => {
  createUserWithEmailAndPassword(getAuth(), props.userName, props.password)
    .then(async () => {
      console.log('User account created & signed in!');
      setSignIn(true);
      await storage.set(true);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};
