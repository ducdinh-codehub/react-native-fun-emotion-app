import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screen/home/home.screen';
import {
  drawerItemIntf,
  navigationIntf,
  tabItemIntf,
} from '../../navigation.interface';
import Settings from '../../screen/settings/settings.screen';
import News from '../../screen/news/news.screen';
import { screenName } from '../../navigation.constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Login from '../../screen/auth/login/login';
import { useStore } from '../../store/store.init';
import { useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { AuthContext } from '../../context/auth.context';
import { signOutByFirebase } from '../../screen/auth/api/firebase.api';
import { storage } from '../../storages/storages';
import { useMMKVBoolean } from 'react-native-mmkv';
import Therapy from '../../screen/therapy/therapy.screen';
import TherayWorryPage from '../../screen/therapy/therapy.screen.worry.page.screen';
import TherapyFinishPage from '../../screen/therapy/therapy.screen.finish.page.screen';
import Notification from '@app/screen/notification/notification';
import { BlurView } from '@react-native-community/blur';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import EmotionBalance from '@app/screen/emotionBalance/emotionBalance.screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainDrawer = (props: any) => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerType: 'slide',
        headerShown: false,
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name={props.name} component={props.component} />
    </Drawer.Navigator>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        headerTitleAlign: 'center',
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderWidth: 0.3,
          borderRadius: 30,
          borderColor: 'black',
        },
        tabBarBackground: () => (
          <BlurView
            blurType="xlight"
            blurAmount={30}
            reducedTransparencyFallbackColor="white"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              borderRadius: 30,
            }}
          />
        ),
      })}
    >
      {tabItems.map(item => {
        return (
          <Tab.Screen
            name={item.name}
            component={() => (
              <MainDrawer name={item.name} component={item.component} />
            )}
            options={item.options}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const CustomDrawerContent = (props: any) => {
  const { navigation } = props;
  const { setSignIn } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      {drawerItems.map(item => {
        return (
          <DrawerItem
            label={item.name}
            onPress={() => navigation.navigate(item.name)}
          />
        );
      })}
      <DrawerItem
        label={'SignOut'}
        onPress={async () => await signOutByFirebase(setSignIn, navigation)}
      />
    </DrawerContentScrollView>
  );
};

const routes: navigationIntf[] = [
  {
    name: screenName.mainTabs,
    component: MainTabs,
    screenIcon: null,
    options: {
      animationEnabled: true,

      headerTitle: '',
      headerShown: false,
    },
  },
  {
    name: screenName.home,
    component: HomeScreen,
    screenIcon: null,
    options: {
      animationEnabled: true,

      headerShown: false,
    },
  },
  {
    name: screenName.settings,
    component: Settings,
    screenIcon: null,
    options: {
      animationEnabled: true,
    },
  },
  {
    name: screenName.news,
    component: News,
    screenIcon: null,
    options: {
      animationEnabled: true,
    },
  },
  {
    name: screenName.notification,
    component: Notification,
    screenIcon: null,
    options: {
      animationEnabled: true,

      headerShown: false,
    },
  },
  {
    name: screenName.therapy,
    component: Therapy,
    screenIcon: null,
    options: {
      animationEnabled: true,

      headerShown: false,
      tabBarStyle: {
        display: 'none',
      },
    },
  },
  {
    name: screenName.therapyWorryPage,
    component: TherayWorryPage,
    screenIcon: null,
    options: {
      animationEnabled: true,

      headerShown: false,
      tabBarStyle: {
        display: 'none',
      },
    },
  },
  {
    name: screenName.therapyFinishPage,
    component: TherapyFinishPage,
    screenIcon: null,
    options: {
      animationEnabled: true,

      headerShown: false,
      tabBarStyle: {
        display: 'none',
      },
    },
  },
  {
    name: screenName.emotionBalance,
    component: EmotionBalance,
    screenIcon: null,
    options: {
      animationEnabled: true,

      headerShown: false,
      tabBarStyle: {
        display: 'none',
      },
    },
  },
];

const drawerItems: drawerItemIntf[] = [
  {
    name: screenName.home,
    component: HomeScreen,
    tabIcon: null,
  },
  {
    name: screenName.news,
    component: News,
    tabIcon: null,
  },
];

const tabItems: tabItemIntf[] = [
  {
    name: screenName.home,
    component: HomeScreen,
    tabIcon: null,
    options: {
      tabBarIcon: () => <FontAwesome6 name="house" size={20} />,
    },
  },
  {
    name: screenName.news,
    component: News,
    tabIcon: null,
    options: {
      tabBarIcon: () => <FontAwesome6 name="newspaper" size={20} />,
    },
  },
  {
    name: screenName.settings,
    component: Settings,
    tabIcon: null,
    options: {
      tabBarIcon: () => <FontAwesome6 name="gear" size={20} />,
    },
  },
  {
    name: screenName.therapy,
    component: Therapy,
    tabIcon: null,
    options: {
      tabBarStyle: {
        display: 'none',
      },
      tabBarIcon: () => (
        <FontAwesome6 name="hand-holding-hand" size={20} color="#7CC6F2" />
      ),
    },
  },
];

const Routes = () => {
  const { getSignIn } = useContext(AuthContext);

  const signInState = storage.get()
    ? storage.get() === 'true'
      ? true
      : false
    : false;

  return (
    <Stack.Navigator>
      {signInState ? (
        <>
          {routes.map(item => {
            return (
              <Stack.Screen
                key={item.name}
                name={item.name}
                component={item.component}
                options={item.options}

                //options={item.options}
              />
            );
          })}
        </>
      ) : (
        <Stack.Screen
          key={screenName.login}
          name={screenName.login}
          options={{ headerShown: false }}
          component={Login}
        />
      )}
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default Navigation;
