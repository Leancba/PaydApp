import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styles from './styles';
import { navigate } from '@helpers/index';
import { useSelector } from '@hooks/useSelector';
import { updateAmount } from '@actions/paidActions';

const CreatePayScreen = () => {

	const [concept, setConcept] = useState("");
	const selectedCurrency = useSelector((state) => state.paidInfo.currency);
	const amount = useSelector((state) => state.paidInfo.amount);
	const isEur = selectedCurrency === 'EUR';

	return (

		<View style={styles.container}>
			<View style={styles.inputWrapper}>
				<TextInput
					placeholder={'0.00'}
					placeholderTextColor={"#C0CCDA"}
					value={amount}
					onChangeText={updateAmount}
					left={
						!isEur && (
							<TextInput.Icon
								size={40}
								icon="currency-usd"
								color={!!amount ? "#035AC5" : "#C0CCDA"}
							/>
						)
					}
					right={
						isEur && (
							<TextInput.Icon
								size={40}
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
					onChangeText={setConcept}
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
				onPress={() => navigate.to('PayNavigation')}
				labelStyle={styles.buttonLabel}
				style={styles.button}
				disabled={amount?.trim() === ''}
			>
				Continuar
			</Button>
		</View>
	);
};

export default CreatePayScreen;