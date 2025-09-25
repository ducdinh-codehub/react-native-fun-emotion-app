import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useStore } from '../../../store/store.init';
import {
  View,
  Text,
  Card,
  Button,
  TextField,
  Image,
} from 'react-native-ui-lib';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import { UserInformation } from '../auth.interface';
import { createAccByFirebase, loginByFirebase } from '../api/firebase.api';
import { AuthContext } from '../../../context/auth.context';
import * as LocalAuthentication from 'expo-local-authentication';
import { storage } from '../../../storages/storages';

const Login = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { setSignIn } = useContext(AuthContext);

  const snapPoints = ['75%']; // Example with percentage values

  const [userInformation, setUserInformation] = useState<UserInformation>({
    userName: '',
    password: '',
  });

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  const [createdUserInformation, setCreatedUserInformation] =
    useState<UserInformation>({
      userName: '',
      password: '',
    });

  const handleAuthentication = async () => {
    console.log('Let Authentication!');

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate to continue',
    });

    if (result.success) {
      console.log('Authentication successful!');
      await storage.set(true);
      setSignIn(true);

      // Navigate to the home screen or another authenticated part of your app
    } else {
      console.log('Authentication failed or was canceled.');
    }
  };

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setUserInformation({
      userName: '',
      password: '',
    });
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <View center padding-s2>
          <Card center padding-s5 gap-s4 width={370} style={{ minHeight: 370 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Đăng nhập
            </Text>
            <TextField
              autoCapitalize="none"
              label="Tài khoản"
              preset="outline"
              placeholder="Nhập tài khoản"
              fieldStyle={{
                minWidth: 270,
              }}
              value={userInformation.userName}
              onChangeText={e =>
                setUserInformation({
                  userName: e,
                  password: userInformation.password,
                })
              }
            />
            <TextField
              label="Mật khẩu"
              preset="outline"
              placeholder="Nhập mật khẩu"
              secureTextEntry
              grey10
              helperText="Ít nhất 8 kí tự"
              fieldStyle={{
                minWidth: 270,
              }}
              value={userInformation.password}
              onChangeText={e =>
                setUserInformation({
                  userName: userInformation.userName,
                  password: e,
                })
              }
            />
            <Button
              bg-$backgroundGeneralHeavy
              text-$backgroundElevatedLight
              marginT-s2
              label="Đăng nhập"
              onPress={() => {
                loginByFirebase(userInformation, setSignIn);
              }}
            />
            <View padding-s2 center gap-s5>
              <Text onPress={handlePresentModalPress}>
                Tôi chưa có tài khoản
              </Text>
              <View center row gap-s2>
                <Text
                  onPress={() => {
                    handleAuthentication();
                  }}
                >
                  Mở khoá bằng gương mặt
                </Text>
                <View>
                  <Image
                    width={25}
                    height={25}
                    source={require('../../../../assets/icons/face-scan.png')}
                  />
                </View>
              </View>
            </View>
          </Card>
          <BottomSheetModal
            index={1}
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                Đăng ký tài khoản
              </Text>
              <Card
                marginT-s5
                center
                padding-s5
                gap-s4
                width={320}
                height={320}
              >
                <TextField
                  autoCapitalize="none"
                  label="Tài khoản"
                  preset="outline"
                  placeholder="Nhập tài khoản"
                  fieldStyle={{
                    minWidth: 270,
                  }}
                  value={createdUserInformation.userName}
                  onChangeText={e => {
                    setCreatedUserInformation({
                      userName: e,
                      password: createdUserInformation.password,
                    });
                  }}
                />
                <TextField
                  label="Mật khẩu"
                  preset="outline"
                  placeholder="Nhập mật khẩu"
                  secureTextEntry
                  grey10
                  helperText="Ít nhất 8 kí tự"
                  fieldStyle={{
                    minWidth: 270,
                  }}
                  value={createdUserInformation.password}
                  onChangeText={e => {
                    setCreatedUserInformation({
                      userName: createdUserInformation.userName,
                      password: e,
                    });
                  }}
                />
                <Button
                  bg-$backgroundGeneralHeavy
                  text-$backgroundElevatedLight
                  marginT-s2
                  label="Đăng ký"
                  onPress={() => {
                    createAccByFirebase(createdUserInformation, setSignIn);
                  }}
                />
              </Card>
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Login;
