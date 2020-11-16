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

function MemoriesView() {
  return (
    <View style={styles.screen}>
      <Text>Memories!</Text>
    </View>
  );  
}

const Stack = createStackNavigator();

export default function MemoriesScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Memories"
          component={MemoriesView}
          options={{
            title: 'Memory Collection',
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
