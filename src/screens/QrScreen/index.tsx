import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Icon } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

import { navigate } from '@helpers/index';

const QrScreen = () => {
  const route = useRoute();
  const { paydData } = route.params;

	console.log(paydData)

  const socketRef = useRef(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (!paydData?.identifier) return;

    const wsUrl = `wss://payments.pre-bnvo.com/ws/merchant/${paydData.identifier}`;
    const socket = new WebSocket(wsUrl);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('WebSocket conectado');
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('Mensaje recibido:', data);

        if (data.status && data.status !== status) {
          setStatus(data.status);

          if (data.status === 'CO') {
            navigate.to('SuccessfulPayScreen')
          }
        }
      } catch (e) {
        console.warn('Error al procesar mensaje:', e);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error.message);
    };

    socket.onclose = () => {
      console.log('WebSocket cerrado');
    };

    return () => {
      socket.close();
    };
  }, [paydData?.identifier, status]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <Icon source="camera" color={'#fff'} size={20} />
        <Text style={styles.whiteText}>
          Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
        </Text>
      </View>

      <QRCode size={300} value={paydData?.url} />
      
      <Text style={[styles.whiteText, { marginTop: 24 }]}>56,00 €</Text>
      <Text style={styles.whiteText}>Estado actual: {status}</Text>
      <Text style={styles.whiteText}>Esta pantalla se actualizará automáticamente.</Text>
    </View>
  );
};

export default QrScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#035AC5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteText: {
    color: '#fff',
    marginLeft: 8
  }
});
