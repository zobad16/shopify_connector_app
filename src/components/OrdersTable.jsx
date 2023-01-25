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
import { useSearchParams } from "react-router-dom";

export const OrdersTable=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const orders = useSelector((state) => state?.orders?.orders);
    const isLoadingOrders = useSelector((state) => state?.orders?.isLoading);
    const ordersError = useSelector((state) => state?.orders?.hasError);
    useEffect(() => {
      dispatch(fetchOrders());
      
    }, []);
    if(ordersError && ordersError!=''){
        console.log('ERROR::',ordersError);
        if(ordersError.status_code == '401'){
            console.log("Token session has expired");
            navigate("/login");
        }
        else if(ordersError.status_code == '403'){
            console.log("Token not found"); 
            navigate("/login");
        }
      }
      console.log("ORDERS::",orders);

      let orders_list = new Array();
      orders.forEach(elm=>{
        elm.line_items.forEach(i=>{
            let temp = {};
            //["Order Number","Customer Name","Product Name", "Variant Name","Quantity", "Price", "Total Line Item Price"
            temp["store_name"]="";
            temp["order_number"]= elm.name;
            temp["first_name"]= elm.customer.first_name;
            temp["last_name"]= elm.customer.last_name;
            temp["product_id"]= elm.product_id;
            temp["product_name"]= i.title;
            temp["variant_id"]= i.variant_id;
            temp["variant_name"]= i.variant_title;
            temp["quantity"]= i.quantity;
            temp["price"]= elm.total_price;
            temp["total_line_item_price"]= elm.total_line_items_price;
            temp["financial_status"]= elm.financial_status;
            temp["order_status_url"]= elm.order_status_url ;
            temp["refunds_total"]="";
            elm.refunds.forEach(ref=>{
                temp['refund_date']=ref?.processed_at;
                ref?.transactions.forEach((trans)=>{
                    temp["refunds_total"] =trans?.amount;
                    // parsedObject['refund_date']=trans?.processed_at;
                });
            });
            orders_list.push(temp);
        }); 
        
      });

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
                    {["Order Number","Customer Name","Product Name", "Variant Name","Quantity", "Price", "Total Line Item Price","Financial Status","Refunds Total", "Order Status URL"
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
                   orders_list?.map(
                   ( key) => {
                    return(
                    <tr>
                        <td className="py-3 px-6">
                        <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >                                
                                {key.order_number}
                          </Typography>
                            </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.first_name} {key.last_name}
                        </Typography>
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.product_name}
                        </Typography>  
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.variant_name} 
                        </Typography>  
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.quantity}
                        </Typography>  
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.price}
                        </Typography>  
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.total_line_item_price}
                        </Typography>  
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.financial_status}
                        </Typography>  
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          {key.refunds_total}
                        </Typography>  
                        </td>
                        <td className="py-3 px-6">
                        <Typography
                              variant="small"
                              className="text-s font-medium text-blue-gray-600"
                            >
                          <a href={key.order_status_url}>Status</a>
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

export default OrdersTable;