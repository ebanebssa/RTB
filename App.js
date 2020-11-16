import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {styles} from "./source_code/styles/Styles.js"

import HomeScreen from "./source_code/screens/HomeScreen.js"
import AddEntryScreen from "./source_code/screens/AddEntryScreen.js"
import MemoriesScreen from "./source_code/screens/MemoriesScreen.js"

// const HomeStack = createStackNavigator({
//   Home: HomeScreen
// })
// const AddEntryStack = createStackNavigator({
//   AddEntry: AddEntryScreen
// })
// const MemoriesStack = createStackNavigator({
//   Memories: MemoriesScreen
// })


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AddEntry" component={AddEntryScreen} />
        <Tab.Screen name="Memories" component={MemoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
