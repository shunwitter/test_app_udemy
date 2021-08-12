import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebaseConfig } from './env';
import firebase from 'firebase';

import HomeScreen from './src/screens/HomeScreen';
import PhotoUploaderScreen from './src/screens/PhotoUploaderScreen';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PhotoUploader" component={PhotoUploaderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
