import React, { useState } from 'react';
import { View, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { navigate } from '@helpers/navigation';
import { Icons } from '@icons/index';
import PaymentCard from '@components/paymentCard';
import SendModal from '@components/sendModal';
import { useSelector } from '@hooks/useSelector';
import styles from './styles';
import { createOrdeService } from '@actions/orderActions';

const PaymentRequestScreen = () => {

	const selectedPrefix = useSelector((state) => state.paidInfo.prefix);
	const currency = useSelector((state) => state.paidInfo.currency);
	const concept = useSelector((state) => state.paidInfo.concept);
	const amount = useSelector((state) => state.paidInfo.amount);
	const url = useSelector((state) => state.orderInfo.web_url);
	const loading = useSelector((state) => state.orderInfo.loading);

	const [whatsappNumber, setWhatsappNumber] = useState('');
	const [whatsAppLoading, setWhatsAppLoading] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	const handleContinue = async () => {
		try {
			if (amount) {
				await createOrdeService(amount, currency, concept);
				navigate.to('PayNavigation');
			} else {
				console.warn('El monto no es válido');
			}
		} catch (error) {
			Alert.alert('Hubo un error al intentar generar el pago')
			console.error('Error al crear la orden:', error);
		}
	};

	return (
		<ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>

			<PaymentCard amount={amount} currency={currency} />

			<View style={styles.inputContainer} >
				<View style={styles.linkRow}>
					<TextInput
						value={url ?? ''}
						style={{ backgroundColor: 'transparent', flex: 1, maxHeight: 56 }}
						contentStyle={styles.textInputContent}
						mode="outlined"
						activeOutlineColor="#035AC5"
						outlineColor="#E5E9F2"
						left={<TextInput.Icon icon={() => <Icons.Link />} />}
					/>
					<IconButton
						style={styles.iconButtonQR}
						icon={(props) =>
							loading ? (
								<ActivityIndicator size={20} color="#035AC5" />
							) : (
								<Icons.ShareQR {...props} />
							)
						}
						onPress={() => navigate.to('QrScreen')}
					/>
				</View>
				<View style={styles.linkRow}>
					<TextInput
						placeholder="Enviar por correo electrónico"
						placeholderTextColor={'#002859'}
						style={styles.textInputTransparent}
						contentStyle={styles.textInputContent}
						mode="outlined"
						activeOutlineColor="#035AC5"
						outlineColor="#E5E9F2"
						left={<TextInput.Icon icon={() => <Icons.Mail />} />}
						disabled
					/>
				</View>
				<View style={styles.linkRow}>
					<TextInput
						placeholder="Enviar a número de WhatsApp"
						placeholderTextColor={'#002859'}
						onChangeText={setWhatsappNumber}
						style={styles.textInputTransparent}
						contentStyle={!!whatsappNumber ? styles.textInputContentShifted : styles.textInputContent}
						mode="outlined"
						activeOutlineColor="#035AC5"
						outlineColor="#E5E9F2"
						left={<TextInput.Icon icon={() => <Icons.WhatsApp />} />}
					/>
					{!!whatsappNumber && (
						<Button
							mode="text"
							labelStyle={{ color: '#002859', fontFamily: 'Mulish-Regular' }}
							contentStyle={{ flexDirection: 'row-reverse' }}
							style={styles.whatsappPrefixButton}
							icon="chevron-down"
							onPress={() => navigate.to('SelectCountry')}
							rippleColor={'transparent'}
						>
							{selectedPrefix}
						</Button>
					)}
					{!!whatsappNumber && (
						<Button
							mode="text"
							labelStyle={{ color: '#FFFFFF', fontFamily: 'Mulish-Regular' }}
							contentStyle={{ flexDirection: 'row-reverse' }}
							style={styles.sendButton}
							onPress={() => {
								setWhatsAppLoading(true);
								setTimeout(() => {
									setWhatsAppLoading(false);
									setModalVisible(true);
								}, 3000);
							}}
							loading={whatsAppLoading}
						>
							Enviar
						</Button>
					)}
				</View>
				<View style={styles.linkRow}>
					<TextInput
						placeholder="Compartir con otras aplicaciones"
						placeholderTextColor={'#002859'}
						style={styles.textInputTransparent}
						contentStyle={styles.textInputContent}
						mode="outlined"
						activeOutlineColor="#035AC5"
						outlineColor="#E5E9F2"
						left={<TextInput.Icon icon={() => <Icons.WalletAdd />} />}
						disabled
					/>
				</View>
			</View>
			<Button
				mode="contained"
				icon={() => <Icons.WalletAdd />}
				style={styles.newRequestButton}
				labelStyle={styles.newRequestLabel}
				onPress={handleContinue}
				loading={loading}
			>
				Nueva solicitud
			</Button>
			<SendModal visible={modalVisible} onClose={() => setModalVisible(false)} />
		</ScrollView>
	);
};

export default PaymentRequestScreen;

