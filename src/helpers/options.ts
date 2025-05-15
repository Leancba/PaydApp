import { Icons } from '@icons/index';
import { Dimensions } from 'react-native';
import { CurrencyItem } from '@interfaces/components';

export const currencyOptions: CurrencyItem[] = [
  { id: 'EUR', title: 'Euro', description: 'Moneda europea', icon: Icons.EurCurrency },
  { id: 'USD', title: 'Dólar', description: 'Moneda estadounidense', icon: Icons.UsdCurrency },
  { id: 'GBP', title: 'Libra', description: 'Moneda británica', icon: Icons.GbpCurrency },
];

export const CountryOptions = [
  { id: 'esp', title: '+34', description: 'España', icon: Icons.SpainFlag },
  { id: 'gui', title: '+240', description: 'Guinea Ecuatorial', icon: Icons.EquatorialGuineaFlag },
  { id: 'gre', title: '+30', description: 'Grecia', icon: Icons.GreciaFlag },
  { id: 'gbp', title: '+500', description: 'South Georgia', icon: Icons.GbpCurrency },
  { id: 'gua', title: '+502', description: 'Guatemala', icon: Icons.GuatemalaFlag },
  { id: 'guy', title: '+592', description: 'Guyana', icon: Icons.GuyanaFlag },
  { id: 'hog', title: '+852', description: 'Hong Kong', icon: Icons.HongKongFlag },
  { id: 'hon', title: '+504', description: 'Honduras', icon: Icons.HondurasFlag },
];

const screenWidth = Dimensions.get('window').width;
export const qrSize = screenWidth - 96;
