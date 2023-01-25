import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../axiosInstance";
import { requests } from "../../../../Requests";
import { useNavigate } from "react-router-dom";
import { validateToken } from "../../../../Common/common";

export const fetchOrders =createAsyncThunk("/orders", async (_, { rejectWithValue })=>{
    try{
        validateToken();
        const apiResponse = await axiosInstance.get(requests.getOrders);
        const jsonResponse = apiResponse.data?.orders;
        console.log("RESPONSE::",jsonResponse);
        return jsonResponse;
    }catch(err){
        var status_code = err.response.status;
        if(status_code == '403'){
          console.log('Token session expired. Please login again');
          console.log(err.response.status);
        }
        console.log(err);
        return rejectWithValue({message: err.message, status_code: status_code});
    }
});