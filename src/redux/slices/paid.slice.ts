import { createSlice } from '@reduxjs/toolkit';

const paidSlice = createSlice({
  name: 'paidInfo',
  initialState: {
    currency: 'USD',
    amount: 0,
    prefix: '+34',
  },
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setPrefix: (state, action) => {
      state.prefix = action.payload;
    },
  },
});

export const { setCurrency, setAmount, setPrefix } = paidSlice.actions;
export default paidSlice.reducer;
