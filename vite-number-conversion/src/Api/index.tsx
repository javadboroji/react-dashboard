import axios from "axios"
import { strorBaseUrl } from "../env"

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
export{GetAllProduct,SingleProduct,GetCartShop,addNewProduct}