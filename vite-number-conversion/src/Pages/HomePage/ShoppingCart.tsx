import React, { useEffect, useState } from 'react'
import { useGetCarts, useSingleProduct } from '../../Hooks'
import { Spin } from 'antd';
import { SingleProductType } from './SingleProduct';

interface cartType{
    id:number,
    userId:number,
    date:Date,
    products:[{productId:number,quantity:number}]
}
type ProductCartType = {
    productId: number;
    quantity: number;
};
type UserProductsType = ProductCartType[];
type singleProductCart=SingleProductType[]
const ShoppingCart=()=> {
    const [userProducts, setUserProducts] = useState<UserProductsType>([])
    const [products, setProducts] = useState<singleProductCart>([])
    const [counter, setCounter] = useState(0)
       /*=========Get Cart Api===============*/
       const{data ,isLoading}= useGetCarts();

       const giveProductCartInfo=(data:[cartType],userId:number)=>{
        if(data?.length>0){
             const findProducts= data?.filter((cart)=>cart.userId ===userId);
             findProducts.forEach(element => {
                    element.products.forEach(cartProduct => {
                        setUserProducts((prev)=>[ ...prev,cartProduct]) 
                    });
             });
        }
       }

       const giveProductDetail=async(carts:ProductCartType[])=>{
        if(carts.length>0){
            await  carts.forEach(element => {
                setTimeout(async() => {
                  await  mutate(element.productId) ;
                  setCounter((prev)=>prev+1)
                }, 1000);
            });
        }
       }
    /*================================ Get Single Product ==============================*/
    const{mutate ,data:singleProduct,isSuccess }= useSingleProduct()
    


    useEffect(() => {
      }, [data])
      
       useEffect(() => {
       }, [userProducts])

        useEffect(() => {            
        setProducts((prev)=>[ ...prev,singleProduct?.data])
        
        }, [counter])
       
       useEffect(() => {       
       }, [products])
       
 if(isLoading){
    return <div className='min-h-32 w-full flex justify-center items-center'><Spin size="large" /></div>
 }else{
    return (
        <div>ShoppingCart</div>
      )
 }
}

export default ShoppingCart