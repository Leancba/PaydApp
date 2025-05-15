import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: 'USD',
  amount: null,
  prefix: '+34',
  concept: ''
};

const paidSlice = createSlice({
  name: 'paidInfo',
  initialState,
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
    setConcept: (state, action) => {
      state.concept = action.payload;
    },
    resetPaidInfo: () => initialState
  },
});

export const {
  setCurrency,
  setAmount,
  setPrefix,
  resetPaidInfo,
  setConcept
} = paidSlice.actions;

export default paidSlice.reducer;
