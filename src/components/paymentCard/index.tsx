import React from 'react';
import { View, Text } from 'react-native';
import { MoneyTime } from '../../icons';
import { PaymentCardProps } from '@interfaces/components';
import styles from './styles';

const PaymentCard = ({ amount, currency }: PaymentCardProps) => {
  return (
    <View style={styles.card}>
        <View style={styles.row}>
          <MoneyTime />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Solicitud de pago</Text>
            <Text style={styles.amount}>{amount} {currency}</Text>
          </View>
        </View>
      <Text style={styles.subtitle}>Comparte el enlace de pago con el cliente</Text>
    </View>
  );
};

export default PaymentCard;

