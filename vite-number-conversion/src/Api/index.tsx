import axios from "axios";
import { strorBaseUrl } from "../env";
import { personLogin, ProductsFilter } from "../Types/Types";
import instance from "../Routes/axios";

const userRegisterApi = async (body: personLogin) => {
  return await axios.post(`http://localhost:8080/api/users/register`, body, {
    headers: {
      accept: "application/json",
    },
  });
};
const userLoginApi = async (body: personLogin) => {
  return await axios.post(`http://localhost:8080/api/users/login`, body, {
    headers: {
      accept: "application/json",
    },
  });
};
const GetAllProduct = async () => {
  return await axios.get(`http://localhost:3000/api/getProducts`, {
    headers: {
      accept: "application/json",
    },
  });
};
const SingleProduct = async (id: string) => {
  return await axios.get(
    `http://localhost:3000/api/getSingleProduct?id=${id}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
};
const GetCartShop = async () => {
  return await axios.get(`${strorBaseUrl}/carts`, {
    headers: {
      accept: "application/json",
    },
  });
};

const addNewProduct = async (body: any) => {
  return await axios.post(`http://localhost:3000/api/addNewProduct`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const removeProduct = async (id: string) => {
  return await axios.delete(
    `http://localhost:3000/api/deleteProduct?id=${id}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
};
const discountSubmit = async (body: string) => {
  return await axios.post(`http://localhost:3000/api/discount`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const getCategoryList = async () => {
  return await axios.get("http://localhost:3000/api/category", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getProductsFilter = async (body: ProductsFilter) => {
  return await axios.post("http://localhost:3000/api/getFilterProducts", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const getUsers = async () => {
  return instance.get("http://localhost:8080/api/users/getAllUsers", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const getRoles = async () => {
  return instance.get("http://localhost:8080/api/users/getAllRoles", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export {
  GetAllProduct,
  SingleProduct,
  GetCartShop,
  addNewProduct,
  removeProduct,
  userRegisterApi,
  userLoginApi,
  discountSubmit,
  getCategoryList,
  getProductsFilter,
  getUsers,
  getRoles
};
