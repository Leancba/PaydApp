import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { ShareQR, Link, Mail, WhatsApp, Share, WalletAdd } from '@icons/index';

import PaymentCard from '@components/paymentCard';

import { navigate } from '../../helpers';
import { useSelector } from '../../hooks/useState';
import { createOrder } from '@services/paidServices';

import styles from './styles';


const PaymentRequestScreen = () => {

	const selectedPrefix = useSelector((state) => state.paidInfo.prefix);
	const currency = useSelector((state) => state.paidInfo.currency);

	const [whatsappNumber, setWhatsappNumber] = useState('');

	const [paydData, setPaydData] = useState('');
	const [loading, setLoading] = useState(true);


	// useEffect(() => {
	// 	const loadOrder = async () => {
	// 		try {
	// 			const response = await createOrder();
	// 			setPaydData(response)
	// 		} catch (err) {
	// 			console.error('Error al crear orden:', err);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};
	// 	loadOrder();
	// }, []);

	const test = 'wwww.google.com.ar'



	return (
		<View style={styles.container}>
			<PaymentCard amount="56,00" currency={currency} />

			<View style={{ flex: 1, width:'100%' }} >

				<View style={styles.linkRow}>
					<TextInput
						value={test}
						style={{ backgroundColor: 'transparent', flex: 1, maxHeight: 56 }}
						contentStyle={styles.textInputContent}
						mode="outlined"
						activeOutlineColor="#035AC5"
						outlineColor="#E5E9F2"
						left={<TextInput.Icon icon={() => <Link />} />}
					/>
					<IconButton
						style={styles.iconButtonQR}
						icon={(props) =>
							loading ? (
								<ActivityIndicator size={24} color="#035AC5" />
							) : (
								<ShareQR {...props} />
							)
						}
						onPress={() => {
							if (!loading) {
								navigate.to('QrScreen', { paydData: paydData });
							}
						}}
						disabled={loading}
					/>
				</View>
				<View style={styles.linkRow}>
					<TextInput
						value={test}
						style={{ backgroundColor: 'transparent', flex: 1, maxHeight: 56 }}
						contentStyle={styles.textInputContent}
						mode="outlined"
						activeOutlineColor="#035AC5"
						outlineColor="#E5E9F2"
						left={<TextInput.Icon icon={() => <Mail />} />}
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
						left={<TextInput.Icon icon={() => <WhatsApp />} />}
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
							onPress={() => navigate.to('SelectCountry')}
						>
							Enviar
						</Button>
					)}
				</View>
				<View style={styles.linkRow}>
					<TextInput
						style={{ backgroundColor: 'transparent', flex: 1, maxHeight: 56 }}
						mode="outlined"
						activeOutlineColor="#035AC5"
						outlineColor="#E5E9F2"
						left={<TextInput.Icon icon={() => <Share />} />}
					/>
				</View>
			</View>
			<Button
				mode="contained"
				icon={() => <WalletAdd />}
				style={styles.newRequestButton}
				labelStyle={styles.newRequestLabel}
				onPress={() => console.log('Nueva solicitud')}
			>
				Nueva solicitud
			</Button>
		</View>
	);
};

export default PaymentRequestScreen;

