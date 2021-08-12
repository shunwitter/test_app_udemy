import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LinkTestScreen({ route }) {
  const id = route.params ? route.params.id : null;
  return (
    <View style={styles.container}>
      <Text>{id || 'No ID provided'}</Text>
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
