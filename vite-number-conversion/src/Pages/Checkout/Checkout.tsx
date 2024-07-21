import React, { useEffect, useState } from 'react'
import HeaderBasic from '../Components/Header/Header.basic'
import Footer from '../HomePage/Footer'
import CheckOutProducts from './CheckOutProducts'
import { Col, Row } from 'antd'
import CheckoutCalcolator from './CheckoutCalcolator'
import useAddToBasket from '../../store/AddToBasket'
import { RateType } from '../../Hooks'
export type SingleProductType = {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: RateType
  title: string
  _id?: number,
  count: number
}
function Checkout() {
  const { products } = useAddToBasket();
  /*======= discunt State =======*/
  const [discountSucess, setDiscountSucess] = useState(false)


  /*======= Price  =======*/


  const [totalPrice, settotalPrice] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const totalCountRender = () => {
    var sum = 0;
    products.forEach((product: SingleProductType) => {
      sum += product.count * product.price
    });
    settotalPrice(sum);
    if(discountSucess){
      setSubTotal((sum-100000/100)*100) 
    }else{
      setSubTotal(sum) 
    }
  }
  useEffect(() => {
    if (products) {
      totalCountRender()
    }
  
    
  }, [discountSucess,products])


  return (
    <div className='flex flex-col justify-between min-h-[100dvh]'>
      <HeaderBasic />
      <Row className='block'>
        <div className='container flex flex-col lg:flex-row  lg:mx-auto'>
          <Col xs={24} lg={8} >
            <CheckoutCalcolator
              totalPrice={totalPrice}
              subTotal={subTotal}
              discountSucess={discountSucess}
              setDiscountSucess={setDiscountSucess}
            />
          </Col>
          <Col xs={24} lg={16} >
            <CheckOutProducts />
          </Col>
        </div>
      </Row>


      <Footer />
    </div>
  )
}

export default Checkout