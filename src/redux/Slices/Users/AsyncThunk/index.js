import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUsers = createAsyncThunk(
  "/users",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get("https://reqres.in/api/users");
      console.log(resp.data.data);
      return resp.data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
