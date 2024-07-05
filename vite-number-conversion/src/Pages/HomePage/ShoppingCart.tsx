import React, { useEffect, useState } from 'react'
import useAddToBasket from '../../store/AddToBasket';



const ShoppingCart=()=> {
    const baskateData=useAddToBasket(state=>state.products);
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
       if(baskateData){
        setProducts(baskateData)
       }
        
    }, [baskateData])
    useEffect(() => {
        console.log(products);
        
    }, [products])
    
    return (
        <div>{
            products?.map((product:any)=>{
                return(
                   <div className='flex justify-between'>
                        <img className='w-[100px] h-[100px]' src={`../../../public/file/${product.image}`} alt={product.image}/>
                        <div className='flex flex-col'>
                            <span> {product.title}</span>
                            <span className='text-red-500 my-2'> قیمت:{product.price} </span>
                            <span className='text-sucess-text my-2'>تعداد: { product.count}</span>
                        </div>
                   </div>
                )
            })}</div>
      )
 
}

export default ShoppingCart