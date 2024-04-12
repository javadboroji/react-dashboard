import React,{useState} from 'react'
import CusGrid from '../../Components/LocalComponents/CusGrid'
import { CiCirclePlus } from "react-icons/ci";
import { Button, TableProps } from 'antd';
import { columnProductType, rowProductType } from '../../Types/Types';

function Product() {

  const data: rowProductType[] = [
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
    const columns: columnProductType[]  = [
      {
        title: 'نام',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'دسته بندی',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: 'تعداد',
        dataIndex: 'count',
        key: 'count',
      },
      {
        title: 'قیمت',
        key: 'price',
        dataIndex: 'price',
  
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
      <CusGrid data={data} columns={columns} modal={true} modaltitle={'محصولات'}/>
    </div>
  )
}

export default Product