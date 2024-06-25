import axios from "axios"
import { strorBaseUrl } from "../env"

const GetAllProduct=async()=>{
    return await axios.get(`${strorBaseUrl}/products`,{
        headers: {
            "accept": "application/json",
          },
    })
}
const SingleProduct=async(id:number)=>{
    return await axios.get(`${strorBaseUrl}/products/${id}`,{
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
const addNewProduct=async()=>{
    return await axios.get(`${strorBaseUrl}/addNewProduct`,{
        headers: {
            "content-type": "multipart/form-data",

          },
    })

}
export{GetAllProduct,SingleProduct,GetCartShop,addNewProduct}