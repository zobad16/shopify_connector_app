import { createSlice } from "@reduxjs/toolkit";
import { fetchStores } from "./AsyncThunk";
const initialState = {
  stores: [],
  isLoading: false,
  hasError: "",
};

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStores.pending]: (state) => {
      state.isLoading = true;
      state.hasError = null;
      console.log('Stores pending:: ');
    },
    [fetchStores.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.stores = payload;
      state.hasError = null
      console.log('Stores payload:: ',payload);
    },
    [fetchStores.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = payload;
      console.log('Stores error:: ',payload);
    },
  },
});

export default storesSlice.reducer;