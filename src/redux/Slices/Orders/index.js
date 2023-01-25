import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./AsyncThunk";

const initialState = {
    orders: [],
    isLoading: false,
    hasError: "",
  };
  const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: {
      [fetchOrders.pending]: (state) => {
        state.isLoading = true;
        state.hasError = null;
        console.log('Orders pending:: ');
      },
      [fetchOrders.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.orders = payload;
        state.hasError = null
        console.log('Orders payload:: ',payload);
      },
      [fetchOrders.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.hasError = payload;
        console.log('Orders error:: ',payload);
      },
    },
  });
  
  export default ordersSlice.reducer;  