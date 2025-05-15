import { store } from '../store';
import { setWebUrl, setLoading, setIdentifier } from '../slices/order.slice';
import { createOrder } from '@services/paidServices';
import { CreateOrdeServiceFn } from '@interfaces/components';

export const createOrdeService: CreateOrdeServiceFn = async (amount, currency, concept, dispatch = store.dispatch) => {
  try {

    dispatch(setLoading(true));
    const data = await createOrder(amount, currency, concept);

    if (data?.web_url) {
      dispatch(setWebUrl(data.web_url));
    }

    if (data?.identifier) {
      dispatch(setIdentifier(data.identifier));
    }
  } catch (error) {
    throw error
  } finally {
    dispatch(setLoading(false));
  }
};
