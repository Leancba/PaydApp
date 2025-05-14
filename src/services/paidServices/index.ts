export const createOrder = async () => {
  try {
    const response = await fetch('https://payments.pre-bnvo.com/api/v1/orders/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Device-Id': 'd497719b-905f-4a41-8dbe-cf124c442f42',
      },
      body: JSON.stringify({
        expected_output_amount: 100.0,
      }),
    });

    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error creando la orden:', error);
  }
};
