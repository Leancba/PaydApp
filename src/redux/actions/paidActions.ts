import { store } from '../store';
import {
  setCurrency,
  setAmount,
  setPrefix,
  resetPaidInfo,
  setConcept
} from '../slices/paid.slice';
import {
  resetOrder,
} from '../slices/order.slice';

export const updateCurrency = (currency: string) => {
  store.dispatch(setCurrency(currency));
};

export const updateAmount = (amount: string) => {
  store.dispatch(setAmount(amount));
};

export const updatePrefix = (currency: string) => {
  store.dispatch(setPrefix(currency));
};

export const updateConcept = (concept: string) => {
  store.dispatch(setConcept(concept));
};

export const resetPaymentState = () => {
  store.dispatch(resetPaidInfo());
  store.dispatch(resetOrder());
};
