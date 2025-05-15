import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-paper';
import Modal from 'react-native-modal';
import { SendModalProps } from '@interfaces/components';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';

const SendModal = ({ visible, onClose }: SendModalProps) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={styles.modal}
      backdropOpacity={1}
      customBackdrop={
        <View style={StyleSheet.absoluteFill}>
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={2}
            reducedTransparencyFallbackColor="white"
          />
        </View>
      }
    >
      <View style={styles.container}>
        <View style={styles.iconCircle}>
          <Icon source="check" color="#1ED6EB" size={40} />
        </View>

        <Text style={styles.title}>Solicitud enviada</Text>
        <Text style={styles.subtitle}>
          Tu solicitud de pago enviada ha sido enviada con éxito por WhatsApp.
        </Text>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={onClose}
        >
          Entendido
        </Button>
      </View>
    </Modal>
  );
};

export default SendModal;
