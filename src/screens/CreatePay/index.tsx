import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styles from './styles';
import { useSelector } from '../../hooks/useState';
import { navigate } from '@helpers/index';

const CreatePayScreen = () => {

	const [text, setText] = useState("");
	const [concept, setConcept] = useState("");
	const selectedCurrency = useSelector((state) => state.paidInfo.currency);
	const isEur = selectedCurrency === 'EUR';

	return (

		<View style={styles.container}>
			<View style={styles.inputWrapper}>
				<TextInput
					placeholder={'0.00'}
					placeholderTextColor={"#C0CCDA"}
					value={text}
					onChangeText={setText}
					left={
						!isEur && (
							<TextInput.Icon
								size={40}
								icon="currency-usd"
								color={!!text ? "#035AC5" : "#C0CCDA"}
							/>
						)
					}
					right={
						isEur && (
							<TextInput.Icon
								size={40}
								icon="currency-eur"
								color={!!text ? "#035AC5" : "#C0CCDA"}
							/>
						)
					}
					mode="flat"
					style={styles.amountInput}
					contentStyle={styles.amountInputContent}
					textColor={!!text ? "#035AC5" : "#C0CCDA"}
					keyboardType="numeric"
					underlineColor="transparent"
					activeUnderlineColor="transparent"
				/>
			</View>

			<View style={{ flex: 1, width: '100%' }} >
				<Text style={styles.conceptLabel}>Concepto</Text>
				<TextInput
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
				onPress={() => navigate.to('PaymentRequestScreen')}
				labelStyle={styles.buttonLabel}
				style={styles.button}
			>
				Continuar
			</Button>
		</View>
	);
};

export default CreatePayScreen;
