import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { navigate } from '@helpers/index';
import logo from '../../assets/congrats.png';
import styles from './styles';

const CongratsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image source={logo} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Pago recibido</Text>
        <Text style={styles.subtitle}>El pago se ha confirmado con éxito</Text>
      </View>
      <Button
        mode="contained"
        onPress={() =>
          navigate.reset({
            index: 0,
            routes: [{ name: 'CreatePayScreen' }],
          })
        }
        labelStyle={styles.buttonLabel}
        style={styles.finishButton}
      >
        Finalizar
      </Button>
    </View>
  );
};

export default CongratsScreen;
