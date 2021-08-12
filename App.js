import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import { firebaseConfig } from './env';
import firebase from 'firebase';

import { navigate, navigationRef } from './src/navigations/RootNavigation';
import HomeScreen from './src/screens/HomeScreen';
import PhotoUploaderScreen from './src/screens/PhotoUploaderScreen';
import LinkTestScreen from './src/screens/LinkTestScreen';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const prefix = Linking.createURL('/');

const Stack = createNativeStackNavigator();

export default function App() {
  const linking = {
    prefixes: [prefix],
  };
  // For Universal Links
  // const linking = {
  //   prefixes: ['https://workabroad.jp', 'https://*.workabroad.jp'],
  // };

  // Run this command to test deep link (escaping ? string make it work on Simulator).
  // npx uri-scheme open exp://192.168.11.3:19000/--/screens/linktest\?id=123 --ios

  function handleUrl(url) {
    console.log(url);
    const { path, queryParams } = Linking.parse(url);
    switch(path) {
      case 'screens/photouploader':
        navigate('PhotoUploader', queryParams);
        break;
      case 'screens/linktest':
        navigate('LinkTest', queryParams);
        break;
      default:
        console.log('No path matches');
    }
  }

  Linking.addEventListener('url', (event) => {
    console.log('Linking.addEventListener');
    if (event.url) {
      handleUrl(event.url);
    }
  });

  Linking.getInitialURL().then((url) => {
    console.log('Linking.getInitialURL');
    handleUrl(url);
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        linking={linking}
        fallback={<Text>Loading...</Text>}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PhotoUploader" component={PhotoUploaderScreen} />
        <Stack.Screen name="LinkTest" component={LinkTestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
