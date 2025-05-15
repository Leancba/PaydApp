let socket: WebSocket | null = null;

export const connectToPaymentSocket = ( identifier: string, onStatusChange: (status: string) => void) => {
  if (!identifier) return;

  const wsUrl = `wss://payments.pre-bnvo.com/ws/merchant/${identifier}`;
  socket = new WebSocket(wsUrl);

  socket.onopen = () => {
    console.log('WebSocket conectado');
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      console.log('Mensaje recibido:', data);

      if (data.status) {
        onStatusChange(data.status);
      }
    } catch (e) {
      console.warn('Error al procesar mensaje:', e);
    }
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error.message);
  };

  socket.onclose = () => {
    console.log('WebSocket cerrado');
  };
};

export const closePaymentSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};
