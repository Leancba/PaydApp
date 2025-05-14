import { configureStore } from '@reduxjs/toolkit';
import paidReducer from "./slices/paid.slice";

export const store = configureStore({
  reducer: {
    paidInfo: paidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
