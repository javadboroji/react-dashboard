import React, { useState } from 'react'
import { productsType, useGetAllProducts } from '../../Hooks';
import { Row } from 'antd';
import { ShoppCard } from '../Components/Cards/Cards.basic';
import CusModal from '../../Components/LocalComponents/CusModal';
import BtnBasComponent from '../Components/Buttons/BtnBasComponent';



function Products() {
    const [open, setOpen] = useState(false);
    const OpenViewProduct=()=>{
        setOpen(true)
    }
    //*View Product  Button
    const ViewButton =  <BtnBasComponent
     btnEvent={OpenViewProduct}
     basButtonsType='light'
      btnText='مشاهده' 
      dyStyle='bg-wihte rounded-lg text-black px-8 my-4 transition ease-in-out delay-150 hover:bg-orang-100' 
      size='sm' />

        
   
    /*================================ Products Api ==============================*/
    const { data, isLoading } = useGetAllProducts()

    return (
        <div className='container mx-auto mt-16 py-8'>
            <Row gutter={[24, 24]}>
                {data && data.map((product: productsType) => (
                    <ShoppCard key={product.id} 
                    orderImage={product.image}
                     orderName={product.title}
                      orderPrice={product.price}
                       priceColor='text-orang-100'
                        category={product.category} 
                        rate={product.rating} 
                        viewButton={ViewButton}
                        />
                ))}
            </Row>
            <CusModal open={open} setOpen={setOpen}>
                <p> product</p>
            </CusModal>
        </div>
    )
}

export default Products