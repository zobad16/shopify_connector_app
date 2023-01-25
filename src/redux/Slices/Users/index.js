import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./AsyncThunk";
const initialState = {
  users: [],
  isLoading: false,
  hasError: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.users = payload;
      console.log("Users Payloadd", payload);
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = payload;
    },
  },
});

export default usersSlice.reducer;
