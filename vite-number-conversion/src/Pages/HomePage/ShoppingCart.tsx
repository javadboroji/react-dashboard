import React, { useEffect, useState } from 'react'
import useAddToBasket from '../../store/AddToBasket';
import BtnBasComponent from '../Components/Buttons/BtnBasComponent';
import { Link, useNavigate } from 'react-router-dom';
import { SingleProductType } from './SingleProduct';



const ShoppingCart = () => {
    const baskateData = useAddToBasket(state => state.products);
    const [products, setProducts] = useState<any>([]);


    /**======================
     * Payment Button
     *========================**/
    const navgate=useNavigate()
    const paymentHandler = () => {
        navgate("/Checkout")
    }
    useEffect(() => {
        if (baskateData) {
            setProducts(baskateData)
        }

    }, [baskateData])
    useEffect(() => {

    }, [products])

    return (
        <div>{
            products?.map((product: SingleProductType ,i:string) => {
                return (
                    <div className='flex justify-between' key={i+'product'}>
                        <img className='w-[100px] h-[100px]' src={`../../../public/file/${product.image}`} alt={product.image} />
                        <div className='flex flex-col'>
                            <span> {product.title}</span>
                            <span className='text-red-500 bg-blue-8 00 my-2'> قیمت:{product.price} </span>
                            <span className='text-sucess-text my-2'>تعداد: {product.count}</span>
                        </div>
                    </div>
                )
            })}
            <div className='flex'>
               <Link to={"/Checkout"} className='w-full'>
               <BtnBasComponent
                // btnEvent={() => paymentHandler()}
                  basButtonsType='light' 
                  btnText='تسویه حساب ' 
                  dyStyle='w-full bg-blue-800 w-full  rounded-lg text-white px-9 my-4 py-3  transition ease-in-out delay-150 hover:bg-orang-100' 
                  size='sm'
                   />
               </Link>

            </div>
        </div>
    )

}

export default ShoppingCart