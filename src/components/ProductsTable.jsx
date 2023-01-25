import React from "react";
import { fetchProducts } from "../redux/Slices/Products/AsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const ProductsTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.users?.users);
  const isLoading = useSelector((state) => state?.users?.isLoading);
  const products = useSelector((state) => state?.products?.products);
  const isLoadingProducts = useSelector((state) => state?.products?.isLoading);
  const productsError = useSelector((state) => state?.products?.hasError);
  useEffect(() => {
    dispatch(fetchProducts());
    //dispatch(fetchUsers());
    
  }, []);
  //console.log(users);
  if(productsError && productsError!=''){
    console.log('ERROR::',productsError);
    if(productsError.status_code == '401'){
        console.log("Token session has expired");
        navigate("/login");
    }
    else if(productsError.status_code == '403'){
        console.log("Token not found"); 
        navigate("/login");
    }
  }
  console.log("PRODUCTS::",products);
  
  let products_list = new Array();
  products.forEach(elm => {
    let temp = {};
    temp['product_title']='';
    temp['product_type']= '';
      temp['variant_title']='';
      temp['option_title']='';
      temp['price']='';
      temp['vendor']='';
      temp['status']='';
      temp['images']=new Array();
    //elm.option.for  
    elm.images.forEach(img=>{
      temp['images'].push(img.src);
    });
    elm.variants.forEach(item =>{
      temp['product_title']=elm.title;
      temp['product_type']=elm.product_type;
      temp['variant_title']=item.title;
      temp['option_title']='';
      temp['price']=item.price;
      temp['vendor']=elm.vendor;
      temp['status']=elm.status;
      products_list.push(temp);
    });
    
  }); 
  console.log(products_list[0]);


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
                {["Image","title","type", "variant name","vendor", "price", "status"].map((el) => (
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
               products_list?.map(
               ( key) => {
                return(
                <tr>
                  <></>
                  <td className="py-3 px-6">
                      <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          ><div className="flex flex-nowrap max-w-8 ">
                            <img src={key.images[0]} className="w-12"/>
                          </div>
                            
                      </Typography>
                    </td>
                    <td className="py-3 px-6">
                      <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {key.product_title}
                      </Typography>
                    </td>
                    <td className="py-3 px-6">
                    <Typography
                          variant="small"
                          className="text-s font-medium text-blue-gray-600"
                        >
                      {key.product_type}
                    </Typography>
                    </td>
                    <td className="py-3 px-6">
                    <Typography
                          variant="small"
                          className="text-s font-medium text-blue-gray-600"
                        >
                      {key.variant_title}
                    </Typography>
                    </td>
                    <td className="py-3 px-6">
                    <Typography
                          variant="small"
                          className="text-s font-medium text-blue-gray-600"
                        >
                      {key.vendor}
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
                      {key.status}
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
};

export default ProductsTable;
