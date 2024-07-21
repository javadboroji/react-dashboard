import { Col, Input, InputRef, Row } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import FilterOptions from './FilterOptions'
import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'
import SortingFilter from './SortingFilter'
import HeaderBasic from '../Components/Header/Header.basic'
import Footer from '../HomePage/Footer'
import SearchFilter from './SearchFilter'
import { useGetProductsFilter } from '../../Hooks'
import DisplayProducts from './DisplayProducts'
import Products from '../HomePage/Products'

export type FilterProductBodyType = {
  searchTerm: string,
  category: string,
  sorting: string
}
function Filter() {
  const [bodyValue, setBodyValue] = useState<FilterProductBodyType>({
    searchTerm: "",
    category: "",
    sorting: ""
  })
  const { mutate, data,isSuccess } = useGetProductsFilter();
  const inpRef = useRef<InputRef>(null);
  useEffect(() => {
  }, [data])
  useEffect(() => {
    mutate(bodyValue);
    
    //(bodyValue)
  }, [bodyValue])
  
  return (
    <>
      <HeaderBasic />
      <div className=' px-4'>
        <Row className=''>
          <Col xs={24} lg={6} className='shadow-lg p-8 rounded-lg'>
            <FilterOptions>
              <p className='text-center text-orange-400'> جستجو</p>
              <SearchFilter
                inpRef={inpRef}
                setBodyValue={setBodyValue}
              />
            </FilterOptions>
            <FilterOptions>
              <p className='text-center text-orange-400'> دسته بندی</p>
              <CategoryFilter setBodyValue={setBodyValue}/>
            </FilterOptions>
            <FilterOptions>
              <p className='text-center text-orange-400'> قیمت </p>
              <PriceFilter />
            </FilterOptions>
            <FilterOptions>
              <p className='text-center text-orange-400'> مرتب کردن </p>
              <SortingFilter />
            </FilterOptions>
          </Col>
          <Col xs={24} lg={18} className=' p-8 rounded-lg'>
            {/* <DisplayProducts data={data?.data.data} /> */}
            <Products  data={data?.data.data}  isSuccess={isSuccess}/>
          </Col>
        </Row>
      </div>
      <Footer />
    </>

  )
}

export default Filter