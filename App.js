import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import { startClock } from 'react-native-reanimated';

const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="SpaceCrafts"
          component={SpaceCrafts}
        />
        <Stack.Screen name="StarMap" component={StarMap}></Stack.Screen>
        <Stack.Screen name="DailyPic" component={DailyPic}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

