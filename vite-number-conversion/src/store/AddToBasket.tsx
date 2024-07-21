import { create } from "zustand";
import { SingleProductType } from "../Pages/HomePage/SingleProduct";
import { RateType } from "../Hooks";
import Product from "../Pages/Dashboard/Product/Product";
type baskateProduct=SingleProductType&{
count:number
}
type bascketProductType={
    products:any,
    setProductBasket:(product:baskateProduct)=>void,
    incrementProductCount:(id:string|undefined ,count:number)=>void,
    removeProduct:(id:number|undefined)=>void,
    updateStore:(id:number|any ,count:number)=>void
}
const useAddToBasket=create<bascketProductType>((set)=>({
    products: [],
    setProductBasket: (product) => set((state) => ({
        products: [...state.products, product],
    })),
    incrementProductCount:(id,count)=>set((state)=>(
       { products: state.products.map((item:baskateProduct)=> item._id===id ? {...item,count:count}:item)}
        )),
    removeProduct:(id)=>set((state)=>({
        products:state.products.filter((product:SingleProductType)=> product._id!==id)
    })),
    updateStore:(id,count)=>set((state)=>({
        products:state.products.map((item:SingleProductType)=> item._id ===id ? {...item,count:count}:item)
    }))
}))

export default useAddToBasket