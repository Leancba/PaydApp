import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  web_url: null,
  identifier: null,
  loading: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setWebUrl: (state, action) => {
      state.web_url = action.payload;
    },
    setIdentifier: (state, action) => {
      state.identifier = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetOrder: () => initialState,
  },
});

export const {
  setWebUrl,
  setIdentifier,
  setLoading,
  resetOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
