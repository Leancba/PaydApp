import React from 'react';
import PaymentRequestScreen from '@screens/PaymentRequest';
import SelectCountry from '@screens/SelectCountry';
import QrScreen from '@screens/QrScreen';
import SuccessfulPayScreen from '@screens/SuccessfulPay';

import Header from '@components/header';
import { Stack } from '@helpers/navigation';

const PayNavigation = () => {
	return (
		<Stack.Navigator initialRouteName="PaymentRequestScreen">
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
					header: () => <Header/>
				})}
			/>
			<Stack.Screen
				name="SuccessfulPayScreen"
				component={SuccessfulPayScreen}
				options={() => ({
					header: () => <Header banner={true} back={false} />
				})}
			/>
		</Stack.Navigator>
	);
};

export default PayNavigation;
