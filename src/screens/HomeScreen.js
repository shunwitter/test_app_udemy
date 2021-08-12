import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to PhotoUploader"
        onPress={() => { navigation.navigate('PhotoUploader'); }}
      />
      <Button
        title="Go to LinkTest"
        onPress={() => { navigation.navigate('LinkTest'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
