import { createSlice } from '@reduxjs/toolkit';

const jsonData = require('../assets/data.json');

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: jsonData,
    list: [],
  },
  reducers: {
    fetchList: (state, action) => ({ ...state, data: [...state.data, action.payload] }),
    addToCart: (state, action) => {
      const cart = [];
      cart.push(action.payload);
      return { ...state, cart: [...state.cart, action.payload] };
    },
    addDonation: (state, action) => {
      const list = [];
      list.push(action.payload);
      return { ...state, list: [...state.list, action.payload] };
    },
  },
});

export const { fetchList, addDonation } = dataSlice.actions;

export default dataSlice.reducer;
