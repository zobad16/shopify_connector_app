import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "./AsyncThunk";

const initialState = {
  dashboard: [],
  isLoading: false,
  hasError: "",
};

const dashboardSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.dashboard = payload;
    },
    [fetchComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = payload;
    },
  },
});

export default dashboardSlice.reducer;
