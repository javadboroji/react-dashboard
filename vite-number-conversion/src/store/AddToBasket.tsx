import { create } from "zustand";
import { SingleProductType } from "../Pages/HomePage/SingleProduct";
import { RateType } from "../Hooks";
type baskateProduct=SingleProductType&{
count:number
}
type bascketProductType={
    products:any,
    setProductBasket:(product:baskateProduct)=>void,
    incrementProductCount:(id:string|undefined ,count:number)=>void
}
const useAddToBasket=create<bascketProductType>((set)=>({
    products: [],
    setProductBasket: (product) => set((state) => ({
        products: [...state.products, product],
    })),
    incrementProductCount:(id,count)=>set((state)=>(
       { products: state.products.map((item:baskateProduct)=> item._id===id ? {...item,count:count}:item)}
        ))
}))

export default useAddToBasket