import React, {useState, useEffect} from 'react';

import Home from '../login/Screens/home';
import FunandJoyScreen from '../login/Screens/fun&joy';
import ProfileScreen from '../login/Screens/profile';
import ChallengeScreen from '../login/Screens/challenge';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostFeedScreen from '../login/Screens/home/postfeed';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 30, width: 30}}
              source={{
                uri: 'https://cdn.onlinewebfonts.com/svg/img_281704.png',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Challenge"
        component={ChallengeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 30, width: 30}}
              source={{
                uri: 'https://static.thenounproject.com/png/620556-200.png  ',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Fun&Joy"
        component={FunandJoyScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 40, width: 40}}
              source={{
                uri: 'https://tse4.mm.bing.net/th?id=OIP.BRFT7rD3xV5QnYNmWR319wHaHa&pid=Api&P=0',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="PostFeed"
        component={PostFeedScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 40, width: 40}}
              source={{
                uri: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
              }}
            />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 20, width: 20}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/107/107247.png',
              }}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
