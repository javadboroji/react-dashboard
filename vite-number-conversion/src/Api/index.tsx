import axios from "axios"
import { strorBaseUrl } from "../env"
import { personLogin } from "../Types/Types"

const userRegisterApi=async(body:personLogin)=>{
    return await axios.post(`http://localhost:3000/api/register`,body,{
        headers: {
            "accept": "application/json",
          },
    })
}
const userLoginApi=async(body:personLogin)=>{
    return await axios.post(`http://localhost:3000/api/login`,body,{
        headers: {
            "accept": "application/json",
          },
    })
}
const GetAllProduct=async()=>{
    return await axios.get(`http://localhost:3000/api/getProducts`,{
        headers: {
            "accept": "application/json",
          },
    })
}
const SingleProduct=async(id:string)=>{
    return await axios.get(`http://localhost:3000/api/getSingleProduct?id=${id}`,{
        headers: {
            "accept": "application/json",
          },
    })

}
const GetCartShop=async()=>{
    return await axios.get(`${strorBaseUrl}/carts`,{
        headers: {
            "accept": "application/json",
          },
    })

}

const addNewProduct=async(body:any)=>{
    return await axios.post(`http://localhost:3000/api/addNewProduct`,body,{
        headers: {
            "Content-Type": "multipart/form-data"
          },
    })
}


const removeProduct=async(id:string)=>{
    return await axios.delete(`http://localhost:3000/api/deleteProduct?id=${id}`,{
        headers: {
            "accept": "application/json",
          },
    })
}
export{GetAllProduct,SingleProduct,GetCartShop,addNewProduct,removeProduct,userRegisterApi,userLoginApi}