import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {styles} from "../styles/Styles.js"

import {createStackNavigator} from '@react-navigation/stack';

function AddEntryView() {
  return (
    <View style={styles.screen}>
      <Text>Add Entry!</Text>
    </View>
  );  
}

const Stack = createStackNavigator();

export default function AddEntryScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AddEntry"
          component={AddEntryView}
          options={{
            title: 'Add RTB Entry',
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
