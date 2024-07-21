import React from 'react'
import { SingleProductType } from '../HomePage/SingleProduct'
import { Row } from 'antd'
import { ShoppCard } from '../Components/Cards/Cards.basic'
import { productsType } from '../../Hooks'

type DisplayProductsProps = {
    data: SingleProductType[]
}
const DisplayProducts: React.FC<DisplayProductsProps> = ({ data }) => {
    return (
        <div className='container mx-auto' >
            <Row gutter={[16,16]}>
                
                {data?.map((product: SingleProductType) => {
                   return <ShoppCard
                        key={product._id}
                        orderImage={product.image}
                        orderName={product.title}
                        orderPrice={product.price}
                        priceColor='text-orang-100'
                        category={product.category}
                        rate={product.rating}
                        //viewButtonFn={OpenViewProduct}
                        productId={product._id}
                    />
                })}
            </Row>
        </div>
    )
}

export default DisplayProducts