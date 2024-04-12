import React from 'react'
import CusGrid from '../../Components/LocalComponents/CusGrid'
import { CiCirclePlus } from "react-icons/ci";
import { Button } from 'antd';
interface DataType {
  key: string;
  name: string;
  category: string;
  count: number | any;
  price: number | any;
}
function Product() {
  const data: DataType[] = [
      {
        key: '1',
        name: 'محصول',
        category: 'لباس',
        count: 12,
        price: 15000000,
      },
      {
        key: '2',
        name: '2محصول',
        category: 'لباس',
        count: 10,
        price: 18000000,
      },
      {
        key: '3',
        name: '3محصول',
        category: 'لباس',
        count: 15,
        price: 19000000,
      },
  
    ];
  
  return (
    <div className='flex flex-col flex-1'>
      <div className='flex justify-between mx-4 items-center'>
      <h1 className='text-orang-100 text-3xl py-4'>محصولات</h1>
     <Button style={{background:'transparent' ,boxShadow:'none' ,color:'blue'}}>
      افزودن
     </Button>
      </div>
      <CusGrid data={data}/>
    </div>
  )
}

export default Product