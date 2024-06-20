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
export{GetAllProduct,SingleProduct,GetCartShop}