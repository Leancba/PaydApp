import React from 'react';
import CreatePayScreen from '@screens/CreatePay';
import CurrencySelector from '@screens/CurrencySelector';
import PaymentRequestScreen from '@screens/PaymentRequest';
import SelectCountry from '@screens/SelectCountry';
import QrScreen from '@screens/QrScreen';
import SuccessfulPayScreen from '@screens/SuccessfulPay';

import Header from '@components/header';
import { Stack } from '@helpers/index';

const MainStack = () => {
	return (
		<Stack.Navigator initialRouteName="CreatePayScreen">
			<Stack.Screen
				name="CreatePayScreen"
				component={CreatePayScreen}
				options={() => ({
					header: () => <Header title="Crear pago" isCurrency={true} back={false} />
				})}
			/>
			{/* <Stack.Screen
				name="CurrencySelector"
				component={CurrencySelector}
				options={() => ({
					header: () => <Header title="Selecciona una divisa" />
				})}
			/>
			<Stack.Screen
				name="PaymentRequestScreen"
				component={PaymentRequestScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SelectCountry"
				component={SelectCountry}
				options={() => ({
					header: () => <Header title="Seleccionar país" />
				})}
			/>
			<Stack.Screen
				name="QrScreen"
				component={QrScreen}
				options={() => ({
					header: () => <Header title="" />
				})}
			/>
			<Stack.Screen
				name="SuccessfulPayScreen"
				component={SuccessfulPayScreen}
				options={() => ({
					header: () => <Header title="" />
				})}
			/> */}
		</Stack.Navigator>
	);
};

export default MainStack;
