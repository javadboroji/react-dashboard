import React from 'react'
import { productsType, RateType } from '../../Hooks'
import { Col, Row, Spin } from 'antd'
import { IoIosStar } from 'react-icons/io'
import BtnBasComponent from '../Components/Buttons/BtnBasComponent'
import CounterProduct from './CounterProduct'
export type SingleProductType = {

    category: string
    description: string
    id: number
    image: string
    price: number
    rating: RateType
    title: string
}
export type SingleProductProps = {
    singleProductData?: SingleProductType;
};
const SingleProduct: React.FC<SingleProductProps> = ({ singleProductData }) => {
    if (singleProductData) {
        return (
            <div className='flex'>
                <Row gutter={[16, 16]} className='w-full py-8'>
                    <Col xs={24} lg={12}>
                        <div className=' w-full relative pt-[30%] md:pt-[60%] lg:pt-[90%] min-h-52 rounded-tl-lg rounded-tr-lg overflow-hidden'>
                            <img className='w-full h-full object-contain absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={singleProductData?.image} alt={singleProductData?.image} />
                        </div>
                    </Col>
                    <Col xs={24} lg={12}>
                        <p className='text-xl lg:text-2xl'>{singleProductData?.title}</p>
                        <span>{singleProductData?.description}</span>
                        <div className='pt-4'>
                            <span className='px-2'> دسته بندی:</span>
                            <span className='text-white bg-orang-100   rounded-lg px-2'> {singleProductData?.category}</span>

                        </div>
                        <div className='flex justify-between items-center py-8'>
                            <span> قیمت : <span className={`text-orange-400`}>{singleProductData?.price}  هزارتومان </span></span>
                            <p className=' flex'>  <IoIosStar size={18} color='#ffd70047' />  <span className='px-2 text-gray-400 '>{singleProductData?.rating.rate}</span></p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <BtnBasComponent basButtonsType='light' btnText='افزودن به سبد خرید' dyStyle='bg-blue-600  rounded-lg text-white px-9 my-4 py-3  transition ease-in-out delay-150 hover:bg-orang-100' size='sm' />
                            <CounterProduct/>
                        </div>
                    </Col>

                </Row>

            </div>
        )

    } else {
        return <div className='min-h-32 w-full flex justify-center items-center'><Spin size="large" /></div>
    }
}

export default SingleProduct