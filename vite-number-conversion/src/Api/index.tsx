import axios from "axios"
import { strorBaseUrl } from "../env"

const GetAllProduct=async()=>{
    return await axios.get(`${strorBaseUrl}/products`,{
        headers: {
            "accept": "application/json",
          },
    })
}

export{GetAllProduct}