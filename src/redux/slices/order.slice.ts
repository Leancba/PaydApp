import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    web_url: null,
    identifier: null,
    loading: false,
  },
  reducers: {
    setWebUrl: (state, action) => {
      state.web_url = action.payload;
    },
    setIdentifier: (state, action) => {
      state.identifier = action.payload;
    },
    clearWebUrl: (state) => {
      state.web_url = null;
      state.identifier = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setWebUrl, setIdentifier, clearWebUrl, setLoading } = orderSlice.actions;
export default orderSlice.reducer;
