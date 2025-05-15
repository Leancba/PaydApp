import React from 'react';
import Header from '@components/header';
import CreatePayNavigation from './CreatePayNavigation/';
import PayNavigation from './PayNavigation';
import { Stack } from '@helpers/navigation';

const MainStack = () => {
	return (
		<Stack.Navigator initialRouteName="CreatePayNavigation" screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="CreatePayNavigation"
				component={CreatePayNavigation}
				options={() => ({
					header: () => <Header title="Crear pago" isCurrency={true} back={false} />
				})}
			/>
			<Stack.Screen
				name="PayNavigation"
				component={PayNavigation}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default MainStack;
