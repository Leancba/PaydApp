import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SuccessfulPayScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>Pago recibido.</Text>
      <Text style={styles.whiteText}>El pago se ha confirmado con éxito.</Text>
    </View>
  );
};

export default SuccessfulPayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#035AC5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteText: {
    color: 'red',
  }
});
