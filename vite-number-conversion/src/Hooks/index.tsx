import { useQuery, QueryObserverResult, useMutation } from "@tanstack/react-query";
import { GetAllProduct, GetCartShop, SingleProduct } from "../Api";
import { Axios, AxiosResponse } from "axios";
interface AxiosType{
    config:any,
    headers:any,
    status:number,
    statusText:string,
}
export type RateType={
    rate:number, 
    count: number
}
export type productsType={
    category :string
    description: string
    _id:number
    image : string
    price : number
    rating : RateType
    title: string
}
interface GetAllProductsType extends Axios{
data:productsType[]
}



const useGetAllProducts = () => {
    return useQuery({
      queryKey: ['products'],
      queryFn: GetAllProduct,
      refetchOnWindowFocus: false,
      select: (data: any) => {
        let products = data?.data?.data;
        return products
      }
    }
  
    );
  };
  const useSingleProduct = () => {
    return useMutation<AxiosResponse<any>, Error, any, string[]>({
        mutationFn: SingleProduct,
        onError: (error) => {
          console.log(error);
    
        },
     
      })
  };
  const useGetCarts = () => {
    return useQuery({
      queryKey: ['Carts'],
      queryFn: GetCartShop,
      refetchOnWindowFocus: false,
      select: (data: any) => {
        let products = data?.data;
        return products
      }
    }
  
    );
  };
  export{useGetAllProducts,useSingleProduct,useGetCarts}