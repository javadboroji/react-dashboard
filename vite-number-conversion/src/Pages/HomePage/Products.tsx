import React, { lazy, Suspense, useState } from 'react'
import { productsType, useGetAllProducts, useSingleProduct } from '../../Hooks';
import { Row, Spin } from 'antd';
import { ShoppCard } from '../Components/Cards/Cards.basic';
import CusModal from '../../Components/LocalComponents/CusModal';
import BtnBasComponent from '../Components/Buttons/BtnBasComponent';
import SingleProduct from './SingleProduct';
const LasySingleProduct=lazy(()=>import('./SingleProduct'))


function Products() {
    const [open, setOpen] = useState(false);


    const OpenViewProduct=(prop:any)=>{
        const productId=prop
        setOpen(true);
        mutate(productId)
    }
   
    /*================================ Products Api ==============================*/
    const { data, isLoading ,isSuccess} = useGetAllProducts()
    const{mutate ,data:singleProduct}= useSingleProduct()
    return (
        <div className='container mx-auto mt-16 py-8'>
            <Row gutter={[24, 24]}>
                {data && data?.map((product: productsType) => (
                    <ShoppCard key={product._id} 
                    orderImage={product.image}
                     orderName={product.title}
                      orderPrice={product.price}
                       priceColor='text-orang-100'
                        category={product.category} 
                        rate={product.rating} 
                        viewButtonFn={OpenViewProduct}
                        productId={product._id}
                        />
                ))}
            </Row>
            <CusModal open={open} setOpen={setOpen}>
                   {isSuccess&& <SingleProduct singleProductData={singleProduct?.data?.data}/>}
            </CusModal>
        </div>
    )
}

export default Products