import React, { useState } from 'react';
import { View, Text, Alert  } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styles from './styles';
import { navigate } from '@helpers/navigation';
import { formatAmountInput } from '@helpers/options';
import { useSelector } from '@hooks/useSelector';
import { updateAmount, updateConcept } from '@actions/paidActions';
import { createOrdeService } from '@actions/orderActions';

const CreatePayScreen = () => {

	const concept = useSelector((state) => state.paidInfo.concept);
	const currency = useSelector((state) => state.paidInfo.currency);
	const amount = useSelector((state) => state.paidInfo.amount);
	const loading = useSelector((state) => state.orderInfo.loading);
	const isEur = currency === 'EUR';

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

		<View style={styles.container}>
			<View style={styles.inputWrapper}>
				<TextInput
					placeholder={'0.00'}
					placeholderTextColor={"#C0CCDA"}
					value={amount ?? ''}
					onChangeText={(text) => {
						const formatted = formatAmountInput(text);
						updateAmount(formatted);
					}}
					left={
						!isEur && (
							<TextInput.Icon
								size={40}
								rippleColor={'transparent'}
								icon="currency-usd"
								color={!!amount ? "#035AC5" : "#C0CCDA"}

							/>
						)
					}
					right={
						isEur && (
							<TextInput.Icon
								size={40}
								rippleColor={'transparent'}
								icon="currency-eur"
								color={!!amount ? "#035AC5" : "#C0CCDA"}
							/>
						)
					}
					mode="flat"
					style={styles.amountInput}
					contentStyle={styles.amountInputContent}
					textColor={!!amount ? "#035AC5" : "#C0CCDA"}
					keyboardType="numeric"
					underlineColor="transparent"
					activeUnderlineColor="transparent"
				/>
			</View>
			<View style={{ flex: 1, width: '100%' }} >
				<Text style={styles.conceptLabel}>Concepto</Text>
				<TextInput
					placeholder='Añade descripción del pago'
					placeholderTextColor={"#647184"}
					value={concept}
					onChangeText={updateConcept}
					maxLength={140}
					style={styles.conceptInput}
					mode="outlined"
					activeOutlineColor="#035AC5"
					outlineColor="#E5E9F2"
				/>
				<Text style={styles.conceptCounter}>
					{concept.length}/144
				</Text>
			</View>
			<Button
				mode="contained"
				onPress={handleContinue}
				labelStyle={amount ? styles.enabledButtonLabel : styles.disabledButtonLabel}
				style={amount ? styles.enabledButton : styles.disabledButton}
				loading={loading}
				disabled={(amount ?? '').trim() === ''}
			>
				Continuar
			</Button>
		</View>
	);
};

export default CreatePayScreen;