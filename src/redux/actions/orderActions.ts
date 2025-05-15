import { store } from '../store';
import { setWebUrl, setLoading, setIdentifier } from '../slices/order.slice';
import { createOrder } from '@services/paidServices';

export const createOrdeService = async (amount: number) => {
 try {
    store.dispatch(setLoading(true));

    const data = await createOrder(amount);
    if (data?.web_url) {
      store.dispatch(setWebUrl(data.web_url));
    }

    if (data?.identifier) {
      store.dispatch(setIdentifier(data.identifier));
    }

  } catch (error) {
    console.error('Error al crear orden:', error);
  } finally {
    store.dispatch(setLoading(false));
  }
};
