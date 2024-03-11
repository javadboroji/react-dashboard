import React from 'react'
import CusGrid from '../../Components/LocalComponents/CusGrid'
import { CiCirclePlus } from "react-icons/ci";
import { Button } from 'antd';
function Product() {
  return (
    <div className='flex flex-col flex-1'>
      <div className='flex justify-between mx-4 items-center'>
      <h1 className='text-orang-100 text-3xl py-4'>محصولات</h1>
     <Button style={{background:'transparent' ,boxShadow:'none' ,color:'blue'}}>
      افزودن
     </Button>
      </div>
      <CusGrid/>
    </div>
  )
}

export default Product