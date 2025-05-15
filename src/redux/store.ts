import { configureStore } from '@reduxjs/toolkit';
import paidReducer from "./slices/paid.slice";
import orderReducer from "./slices/order.slice"

export const store = configureStore({
  reducer: {
    paidInfo: paidReducer,
    orderInfo: orderReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
