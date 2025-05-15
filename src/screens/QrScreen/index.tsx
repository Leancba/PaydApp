import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Icon } from 'react-native-paper';
import logo from '../../assets/logo.jpg';
import styles from './styles';
import { navigate } from '@helpers/navigation';
import { qrSize } from '@helpers/index';
import { useSelector } from '@hooks/useSelector';
import { connectToPaymentSocket, closePaymentSocket } from '@services/websocketService';


const QrScreen = () => {

  const currency = useSelector((state) => state.paidInfo.currency);
  const amount = useSelector((state) => state.paidInfo.amount);
  const identifier = useSelector((state) => state.orderInfo.identifier);

  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (!identifier) return;

    connectToPaymentSocket(identifier, (newStatus) => {
      if (newStatus !== status) {
        setStatus(newStatus);

        if (newStatus === 'CO') {
          navigate.to('SuccessfulPayScreen');
        }
      }
    });

    return () => {
      closePaymentSocket();
    };
  }, [identifier]);

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <View style={styles.iconCircle}>
          <Icon source="exclamation-thick" color={'#002859'} size={20} />
        </View>
        <Text style={styles.whiteText}>
          Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
        </Text>
      </View>

      <View style={styles.qrWrapper}>
        <QRCode
          size={qrSize}
          logo={logo}
          logoSize={80}
          logoBackgroundColor="transparent"
        />
      </View>

      <Text style={styles.priceText}>{amount} {currency}</Text>
      <Text style={styles.subtitleText}>
        Esta pantalla se actualizará automáticamente.
      </Text>
    </View>
  );
};

export default QrScreen;
