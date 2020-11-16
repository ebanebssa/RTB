import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {styles} from "../styles/Styles.js";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

function HomeView() {
  return (
    <View style={styles.screen}>
      <Text>Home!</Text>
    </View>
  );  
}

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            title: 'Rose-Thorn-Bud',
            headerStyle: {
              backgroundColor: 'lightskyblue', // https://reactnative.dev/docs/colors
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center',
              fontFamily: 'sans-serif', // https://github.com/react-native-training/react-native-fonts
            },
          }}
        />
      </Stack.Navigator>
    );
  }
  
