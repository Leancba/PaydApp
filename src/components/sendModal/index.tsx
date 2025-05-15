import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-paper';
import Modal from 'react-native-modal';

type SendModalProps = {
  visible: boolean;
  onClose: () => void;
};

const SendModal = ({ visible, onClose }: SendModalProps) => {

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={styles.modal}
      backdropTransitionOutTiming={0}
    >
      <View style={styles.container}>
        <View style={{ backgroundColor: '#1ED6EB66', borderRadius: 99, height: 60, width: 60, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }} >
          <Icon
            source="check"
            color={"#1ED6EB"}
            size={40}
          />
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

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#002859',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#647184',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#035AC5',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%'

  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
  },
});
