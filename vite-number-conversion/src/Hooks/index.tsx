import {
  useQuery,
  QueryObserverResult,
  useMutation,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import Cookies from "js-cookie";
import {
  addNewProduct,
  discountSubmit,
  GetAllProduct,
  GetCartShop,
  getCategoryList,
  getProductsFilter,
  getRoles,
  getUsers,
  removeProduct,
  SingleProduct,
  userLoginApi,
  userRegisterApi,
} from "../Api";
import { Axios, AxiosResponse } from "axios";
import { ToastFn } from "../Pages/Dashboard/Product/NewProductForm";
import { useNavigate } from "react-router-dom";
import { ProductsFilter } from "../Types/Types";
import useUserLogin from "../store/UserAuth";
interface AxiosType {
  config: any;
  headers: any;
  status: number;
  statusText: string;
}
export type RateType = {
  rate: number;
  count: number;
};
export type productsType = {
  category: string;
  description: string;
  _id: number;
  image: string;
  price: number;
  rating: RateType;
  title: string;
};
interface GetAllProductsType extends Axios {
  data: productsType[];
}

const useRegister = (notify: any) => {
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: userRegisterApi,
    onSuccess: () => {
      notify();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

type setUserLogin = React.Dispatch<React.SetStateAction<boolean>>;
const useLogin = (notify: any, setUseLogin: setUserLogin) => {
  const { setUser } = useUserLogin();
  const navgate = useNavigate();
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: userLoginApi,
    onSuccess: (data) => {
      const { token } = data.data;
      Cookies.set("_token", token, { expires: 1 });
      if (token) {
        setUser(data.data.data);

        navgate("/dashboard");
      } else {
        notify();
      }
    },
    onError: (error) => {
      console.log(error);
      notify();
    },
  });
};
const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: GetAllProduct,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let products = data?.data?.data;
      return products;
    },
  });
};
const useSingleProduct = () => {
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: SingleProduct,
    onError: (error) => {
      console.log(error);
    },
  });
};
const useGetCarts = () => {
  return useQuery({
    queryKey: ["Carts"],
    queryFn: GetCartShop,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let products = data?.data;
      return products;
    },
  });
};
//addNewProduct
const useAddNewProduct = (notify: ToastFn) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: addNewProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: "products" } as any), notify();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

const useDeleteProduct = (
  notify: () => void,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: removeProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: "products" } as any), notify();
      setOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
//discountSubmit
const useDiscountSubmit = () => {
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: discountSubmit,
  });
};
const useGetCategoryList = () => {
  return useQuery({
    queryKey: ["CategoryList"],
    queryFn: getCategoryList,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      const categoryes = data?.data.data;
      return categoryes;
    },
  });
};

const useGetProductsFilter = () => {
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: getProductsFilter,
    onSuccess: (data: any) => {
      return data;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let products = data?.data.data;
      return products;
    },
  });
};
const useGetRoles = () => {
  return useQuery({
    queryKey: ["Roles"],
    queryFn: getRoles,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let products = data?.data.data;
      return products;
    },
  });
};
export {
  useGetAllProducts,
  useSingleProduct,
  useGetCarts,
  useAddNewProduct,
  useDeleteProduct,
  useRegister,
  useLogin,
  useDiscountSubmit,
  useGetCategoryList,
  useGetProductsFilter,
  useGetUsers,
  useGetRoles,
};
