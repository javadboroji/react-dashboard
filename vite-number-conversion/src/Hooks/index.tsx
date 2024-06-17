import { useQuery, QueryObserverResult, useMutation } from "@tanstack/react-query";
import { GetAllProduct } from "../Api";
import { Axios } from "axios";
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
    id:number
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
        let products = data?.data;
        return products
      }
    }
  
    );
  };
  export{useGetAllProducts}