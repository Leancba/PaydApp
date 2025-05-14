import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SpainFlag, EquatorialGuineaFlag, GbpCurrency, GreciaFlag, GuatemalaFlag, GuyanaFlag, EurCurrency, UsdCurrency } from '@icons/index';
import { MainStackParamList } from '@interfaces/navigation';
import { CurrencyItem } from '@interfaces/components';

export const navigationRef = createNavigationContainerRef();

export const navigate = {
  to: (name: string, params?: object) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  },
  goBack: () => {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  },
  reset: (...args: Parameters<typeof navigationRef.reset>) => {
    if (navigationRef.isReady()) {
      navigationRef.reset(...args);
    }
  },
};

export const currencyOptions: CurrencyItem[] = [
  { id: 'EUR', title: 'Euro', description: 'Moneda europea', icon: EurCurrency },
  { id: 'USD', title: 'Dólar', description: 'Moneda estadounidense', icon: UsdCurrency },
  { id: 'GBP', title: 'Libra', description: 'Moneda británica', icon: GbpCurrency },
];

export const Stack = createNativeStackNavigator<MainStackParamList>();

export const CountryOptions = [
  { id: 'esp', title: '+34', description: 'España', icon: SpainFlag },
  { id: 'gui', title: '+240', description: 'Equatorial Guinea', icon: EquatorialGuineaFlag },
  { id: 'gre', title: '+30', description: 'Grecia', icon: GreciaFlag },
  { id: 'gbp', title: '+500', description: 'south georgia and the south sandwich islands', icon: GbpCurrency },
  { id: 'gua', title: '+502', description: 'Guatemala', icon: GuatemalaFlag },
  { id: 'guy', title: '+592', description: 'Guyana', icon: GuyanaFlag },
  { id: 'hog', title: '+852', description: 'Hong Kong', icon: GuatemalaFlag },
  { id: 'hon', title: '+504', description: 'Honduras', icon: GuatemalaFlag },
];
