import React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import BottomTabNavigator from './src/bottombar/bottombar';
import ChallengeScreen from './src/login/Screens/challenge';
import FunandJoyScreen from './src/login/Screens/fun&joy';
import ProfileScreen from './src/login/Screens/profile';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginpagescreen from './src/bottombar/signup/Login';
import SignUppagescreen from './src/bottombar/signup/SignUp';
import AgeGroupscreen from './src/bottombar/signup/AgeGroup';
import PayOptionScreen from './src/bottombar/signup/Payment';

const Stack = createNativeStackNavigator();
const StackPageScreen = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Loginpagescreen}
        />
        <Stack.Screen
          name="SignUppage"
          options={{headerShown: false}}
          component={SignUppagescreen}
        />
        <Stack.Screen
          name="AgeGroupPage"
          options={{headerShown: true}}
          component={AgeGroupscreen}
        />
        <Stack.Screen
          name="PaymentDetail"
          options={{headerShown: true}}
          component={PayOptionScreen}
        />
        <Stack.Screen
          name="BottomPage"
          options={{headerShown: false}}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="Profile"
          options={{headerShown: false}}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackPageScreen;
