import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native-ui-lib';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { File, Paths } from 'expo-file-system';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
    priority: Notifications.AndroidNotificationPriority.HIGH, // High priority for better visibility
  }),
});
const Notification = () => {
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);

  const [pushTokenString, setPushTokenString] = useState<string>();
  const projectId =
    Constants?.expoConfig?.extra?.eas?.projectId ??
    Constants?.easConfig?.projectId;
  console.log('GO TO NOTIFICATION SCREEN');
  console.log('Constants?.expoConfig:', Constants.expoConfig);
  function handleRegistrationError(errorMessage: string) {
    alert(errorMessage);
    throw new Error(errorMessage);
  }

  const reqisterIOS = () => {
    const file = new File('./AuthKey_7M2AF9A8HV.p8');
    console.log('authFile', file); // Hello, world!

    /*

    const authorizationToken = jwt.sign(
      {
        iss: '55T58WTSHF',
        iat: Math.round(new Date().getTime() / 1000),
      },

      fs.readFileSync('./AuthKey_7M2AF9A8HV.p8', 'utf8'),
      {
        header: {
          alg: 'ES256',
          kid: '7M2AF9A8HV',
        },
      },
    );

    console.log('authorizationToken', authorizationToken);*/
  };
  const register = async () => {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      handleRegistrationError(
        'Permission not granted to get push token for push notification!',
      );
      return;
    }

    const tmp = (
      await Notifications.getExpoPushTokenAsync({
        projectId: '40a4e7f3-afa0-4caf-b67f-a1df55d9cf17',
      })
    ).data;

    setPushTokenString(tmp);
  };

  useEffect(() => {
    reqisterIOS();
  }, []);

  useEffect(() => {
    const notificationListener = Notifications.addNotificationReceivedListener(
      notification => {
        setNotification(notification);
      },
    );

    const responseListener =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log('NotificationResponse:', response);
      });

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, [pushTokenString]);

  return (
    <>
      <SafeAreaView>
        <View padding-s1 center>
          <View padding-s1>
            <Text>This is notification screen</Text>
          </View>
        </View>
        ;
      </SafeAreaView>
    </>
  );
};

export default Notification;
