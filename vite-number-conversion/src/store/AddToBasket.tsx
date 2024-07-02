import { create } from "zustand";
import { SingleProductType } from "../Pages/HomePage/SingleProduct";
import { RateType } from "../Hooks";
type baskateProduct=SingleProductType&{
count:number
}
type bascketProductType={
    products:any,
    setProductBasket:(product:baskateProduct)=>void,
    incrementProductCount:(id:string|undefined)=>void
}
const useAddToBasket=create<bascketProductType>((set)=>({
    products: [],
    setProductBasket: (product) => set((state) => ({
        products: [...state.products, product],
    })),
    incrementProductCount:(id)=>set((state)=>(
       { products: state.products.map((item:baskateProduct)=> item._id===id ? {...item,count:item.count+1}:item)}
        ))
}))

export default useAddToBasket