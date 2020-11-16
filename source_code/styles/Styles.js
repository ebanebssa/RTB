import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  
  export const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'lavender',
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: 'white',
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'black',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: 'coral',
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: 'coral',
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    screen: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    screenTitle: {
      textAlign: 'center',
      backgroundColor: "lavender",
      justifyContent: 'center',
      fontSize: 30,
      color: 'black',
    },
  
  });
  