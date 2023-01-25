import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./AsyncThunk";
const initialState = {
  products: [],
  isLoading: false,
  hasError: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
      state.hasError = null;
      console.log('Products pending:: ');
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
      state.hasError = null
      console.log('Products payload:: ',payload);
    },
    [fetchProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = payload;
      console.log('Products error:: ',payload);
    },
  },
});

export default productsSlice.reducer;