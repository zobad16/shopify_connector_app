import React from "react";
import { fetchOrders } from "../redux/Slices/Orders/AsyncThunk";
import { fetchStores } from "../redux/Slices/Stores/AsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

export const StoresTable=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const stores = useSelector((state) => state?.stores?.stores);
    const isLoadingStores = useSelector((state) => state?.stores?.isLoading);
    const storesError = useSelector((state) => state?.stores?.hasError);
    useEffect(() => {
      dispatch(fetchStores());
      
    }, []);
    if(storesError && storesError!=''){
        console.log('ERROR::',storesError);
        if(storesError.status_code == '401'){
            console.log("Token session has expired");
            console.log("Returning to login screen");
            navigate("/login");
        }
        else if(storesError.status_code == '403'){
            console.log("Token not found"); 
            console.log("Returning to login screen");
            navigate("/login");
        }
      }
      console.log("STORES DATA::",stores);

      let stores_list = new Array();
      if(stores){
        stores.forEach(elm=>{
            let temp={};
            temp["store_name"]= elm.store_name;
            temp["store_url"] = elm.store_url;
            temp["api_key"]= elm.api_key;
            temp["api_token"]= elm.api_token;
            temp["scopes"] = elm.scopes.toString();
            temp["api_version"] = elm.api_version;
            stores_list.push(temp);   
        });
    }   

      const clickHandler = (id) => {
        navigate(`/tables/data?id=${id}`);
        // console.log(id, "vclick");
      };
      return(
        <>
           <Card className="overflow-hidden xl:col-span-2">
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
                <thead>
                    <tr>
                    {["Store Name","Store URL","API Key", "API Token", "Scopes", "API Version"
                    ,].map((el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                  {
                   stores_list?.map(
                   ( key) => {
                    return(
                    <tr>
                        <td className="py-3 px-6">
                        <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >                                
                                {key.store_name}
                          </Typography>
                            </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.store_url}
                        </Typography>
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.api_key}
                        </Typography>  
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.api_token} 
                        </Typography>  
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.scopes}
                        </Typography>  
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.api_version}
                        </Typography>  
                        </td>
                        
                    </tr>)
                   })
                    } 
           </tbody>
            </table>
            </CardBody>
            </Card>
        </>
      );
}

export default StoresTable;