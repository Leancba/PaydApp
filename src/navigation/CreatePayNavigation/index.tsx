import React from 'react';
import CreatePayScreen from '@screens/CreatePay';
import CurrencySelector from '@screens/CurrencySelector';

import Header from '@components/header';
import { Stack } from '@helpers/navigation';

const CreatePayNavigation = () => {
	return (
		<Stack.Navigator initialRouteName="CreatePayScreen">
			<Stack.Screen
				name="CreatePayScreen"
				component={CreatePayScreen}
				options={() => ({
					header: () => <Header title="Crear pago" isCurrency={true} back={false} />
				})}
			/>
			<Stack.Screen
				name="CurrencySelector"
				component={CurrencySelector}
				options={() => ({
					header: () => <Header title="Selecciona una divisa" />
				})}
			/>

		</Stack.Navigator>
	);
};

export default CreatePayNavigation;
