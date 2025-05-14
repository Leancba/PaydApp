import { store } from '../store';
import { setCurrency, setAmount, setPrefix } from '../slices/paid.slice';

export const updateCurrency = (currency: string) => {
  store.dispatch(setCurrency(currency));
};

export const updateAmount = (amount: number) => {
  store.dispatch(setAmount(amount));
};

export const updatePrefix = (currency: string) => {
  store.dispatch(setPrefix(currency));
};
