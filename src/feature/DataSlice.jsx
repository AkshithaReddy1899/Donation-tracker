import { createSlice } from '@reduxjs/toolkit';

const jsonData = require('../assets/data.json');

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: jsonData,
    list: [],
  },
  reducers: {
    fetchList: (state, action) => {
      console.log(action);
      return { ...state, data: [...state.data, action.payload] };
    },
    addToCart: (state, action) => {
      const cart = [];
      cart.push(action.payload);
      return { ...state, cart: [...state.cart, action.payload] };
    },
  },
});

export const { fetchList } = dataSlice.actions;

export default dataSlice.reducer;
