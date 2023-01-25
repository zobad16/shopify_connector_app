import React from "react";
import { fetchOrders } from "../redux/Slices/Orders/AsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";
import axiosInstance from "../axiosInstance";
import { requests } from "../Requests";
import { validateToken } from "../Common/common";

async function callAPI(url){
    try{
        //check if token dont exist. Set from local storage
        validateToken();
        
        const apiResponse = await axiosInstance.get(url);
        const jsonResponse = apiResponse.data;
        return jsonResponse;
      
      }catch(err){
        var status_code = err.response?.status;
        if(status_code == '403'){
          console.log('Token session expired. Please login again');
          console.log(err.response.status);
          //navigate("/login");
        }
        console.log(err);
        return null;
    }
}

const uploads = {
    Products: 1,
    Orders: 2,
    Customers: 3
  };
export const SeedComponent=()=>{
    const seedJob = async ()=>{
        console.log("Starting seed job: ");
        const result = await callAPI(requests.adminSeed+'?store=melo');
        console.log(result);
    };
    const upload= async (i)=>{
        let result;
        switch(i) {
            case uploads.Products:
                result = await callAPI(requests.productUpload);
                console.log("Uploading Products: ",result);
                break;
            case uploads.Orders:
              // code block
                result = await callAPI(requests.orderUpload);                
                console.log("Uploading Orders: ", result);
                break;
            case uploads.Customers:
            // code block
                result = await callAPI(requests.customerUpload);
                console.log("Uploading Customers: ",result);
                break;
            default:
              // code block
              console.log("Invalid param");
                break;
          }
        
    };
    return(
        <>
       <div class="flex flex-col pt-5  min-w-[640px]">
        <div class ="flex flex-col">
            <div class="flex flex-col w-4/5 pl-5 align-middle">
                <h1 className="text-left pl-5 font-bold" >Data Seeding</h1>
                <p className="text-left pl-5 py-5" >Click the button to start the initial Seeding job. This button would start the initial seed job.</p>
                <button className="w-full h-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px:auto border border-blue-500 hover:border-transparent rounded"
                    onClick={(e)=>{seedJob(1)}}>Click me</button>
            </div>
            <div class="flex flex-col w-4/5 pl-5 pt-5 align-middle">
            <h1 className="text-left pl-5 font-bold" >Products Upload</h1>
                <p className="text-left pl-5 py-5" >Click the button to start Seeding job. This button would start the initial seed job.</p>
                <button className="w-full h-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px:auto border border-blue-500 hover:border-transparent rounded"
                onClick={(e)=>{upload(uploads.Products)}}>Click me</button>
            </div>
            <div class="flex flex-col w-4/5 pl-5 pt-5 align-middle">
                <h1 className="text-left pl-5 font-bold" >Orders Upload</h1>
                <p className="text-left pl-5 py-5" >Click the button to start Seeding job. This button would start the initial seed job.</p>
                <button className="w-full h-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px:auto border border-blue-500 hover:border-transparent rounded"
                onClick={(e)=>{upload(uploads.Orders)}}>Click me</button>
            </div>
            <div class="flex flex-col w-4/5 pl-5 py-5 align-middle">
                <h1 className="text-left pl-5 font-bold" >Customers Upload</h1>
                <p className="text-left pl-5 py-5" >Click the button to start Seeding job. This button would start the initial seed job.</p>
                <button className="w-full h-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px:auto border border-blue-500 hover:border-transparent rounded"
                onClick={(e)=>{upload(uploads.Customers)}}>Click me</button>
            </div>
            
            
        </div>
        </div>
        
        
        </>
    );
};

export default SeedComponent;