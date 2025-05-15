import { API_URL, DEVICE_ID } from '@env';
import { CreateOrderFn } from '@interfaces/components';

export const createOrder: CreateOrderFn = async (amount, currency, concept) => {
  const parsedAmount = parseFloat(amount.replace(',', '.'));

  try {

    const response = await fetch(`${API_URL}/orders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Device-Id': DEVICE_ID,
      },
      body: JSON.stringify({
        expected_output_amount: parsedAmount,
        notes: concept,
        fiat: currency,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creando la orden:', error);
    throw error;
  }
};
