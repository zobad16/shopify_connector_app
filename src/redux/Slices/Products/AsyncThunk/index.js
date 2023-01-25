import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../axiosInstance";
import { requests } from "../../../../Requests";
import { useNavigate } from "react-router-dom";
import { validateToken } from "../../../../Common/common";
//const navigate = useNavigate();
export const fetchProducts = createAsyncThunk(
  "/products",
  async (_, { rejectWithValue }) => {
    try{
        //check if token dont exist. Set from local storage
        validateToken();
        
        const apiResponse = await axiosInstance.get(requests.getProducts);
        const jsonResponse = apiResponse.data?.products;
        console.log("RESPONSE::",jsonResponse);
        return jsonResponse;
      
      }catch(err){
        var status_code = err.response.status;
        if(status_code == '403'){
          console.log('Token session expired. Please login again');
          console.log(err.response.status);
          //navigate("/login");
        }
        console.log(err);
        return rejectWithValue({message: err.message, status_code: status_code});
      }    
  }
);