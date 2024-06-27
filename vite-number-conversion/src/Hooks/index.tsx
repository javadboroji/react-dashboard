import { useQuery, QueryObserverResult, useMutation, QueryClient, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, GetAllProduct, GetCartShop, removeProduct, SingleProduct, userRegisterApi } from "../Api";
import { Axios, AxiosResponse } from "axios";
import { ToastFn } from "../Pages/Dashboard/Product/NewProductForm";
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

const useRegister=()=>{
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: userRegisterApi,
    onError: (error) => {
      console.log(error);

    },
 
  })
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
//addNewProduct
  const useAddNewProduct=(notify:ToastFn)=>{
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse<any>, Error, any, string[]>({
      mutationFn: addNewProduct,
      onSuccess:()=>{
        queryClient.invalidateQueries({exact:'products'}as any),
        notify()},
      onError: (error) => {
        console.log(error);
  
      },
   
    })
  }

  
  const useDeleteProduct=(notify:()=>void)=>{
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse<any>, Error, any, string[]>({
     
      mutationFn: removeProduct,
      onSuccess:()=>{
        queryClient.invalidateQueries({exact:'products'}as any),
        notify()},
      onError: (error) => {
        console.log(error);
  
      },
   
    })
  }
  export{useGetAllProducts,useSingleProduct,useGetCarts,useAddNewProduct,useDeleteProduct,useRegister}