import React from 'react';
import { StyleSheet, View } from 'react-native';
import CEPInfo from './CEPInfo.js';

export default function App() {
  return (
    <View style={styles.container}>
      <CEPInfo />
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
