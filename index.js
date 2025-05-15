import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Main = () => {
	return (
		<PaperProvider>
			<Provider store={store}>
				<App />
			</Provider >
		</PaperProvider>

	);
};

AppRegistry.registerComponent(appName, () => Main);
