import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { navigate } from '@helpers/index';
import { Icons } from '@icons/index';
import PaymentCard from '@components/paymentCard';
import SendModal from '@components/sendModal';
import { createOrdeService } from '@actions/orderActions';
import { useSelector } from '@hooks/useSelector';

import styles from './styles';

const PaymentRequestScreen = () => {

	const selectedPrefix = useSelector((state) => state.paidInfo.prefix);
	const currency = useSelector((state) => state.paidInfo.currency);
	const amount = useSelector((state) => state.paidInfo.amount);
	const url = useSelector((state) => state.orderInfo.web_url);
	const loading = useSelector((state) => state.orderInfo.loading);

	const [whatsappNumber, setWhatsappNumber] = useState('');
	const [whatsAppLoading, setWhatsAppLoading] = useState(false);

	const [modalVisible, setModalVisible] = useState(false);


	useEffect(() => {
		const fetchOrder = async () => {
			if (amount) {
				await createOrdeService(amount);
			}
		};
		fetchOrder();
	}, [amount]);


	return (
		<View style={styles.container}>
			<PaymentCard amount={amount} currency={currency} />

			<View style={{ flex: 1, width: '100%' }} >
				<View style={styles.linkRow}>
					<TextInput
						value={url}
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
								<ActivityIndicator size={24} color="#035AC5" />
							) : (
								<Icons.ShareQR {...props} />
							)
						}
						onPress={() => navigate.to('QrScreen')}
						disabled={loading}
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
				onPress={() => console.log('Nueva solicitud')}
			>
				Nueva solicitud
			</Button>
			<SendModal visible={modalVisible} onClose={() => setModalVisible(false)} />
		</View>
	);
};

export default PaymentRequestScreen;

