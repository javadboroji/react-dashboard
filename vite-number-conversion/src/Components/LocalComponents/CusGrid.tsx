import React, { useEffect, useState } from 'react'
import { Col, Row, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import Buttons from '../Buttons/Buttons';
import { Button } from 'antd/es/radio';
import CusModal from './CusModal';
import Forms from '../Forms/Forms';
import FormText from '../Forms/FormText';
import FormSelect from '../Forms/FormSelect';

interface DataType {
  key: string;
  name: string;
  category: string;
  count: number | any;
  price: number | any;
}
function CusGrid() {
  //modal state
  const [open, setOpen] = useState(false);
  const [rowSelect, setRowSelect] = useState<DataType>({
    key: "",
    name: "",
    category: "",
    count: null,
    price: null
  });

  const columns: TableProps<DataType>['columns'] = [
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
    {
      title: 'عملیات',
      key: 'action',
      dataIndex: 'action  ',
      render: () => (
        <>
          <Button type-btn="edit" onClick={() => setOpen(true)}> ویرایش</Button>
          <Button type-btn="delete"> حذف</Button>
        </>
      )
    },

  ];

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

  const GridContent = () => {
    console.log(rowSelect);
    const category=[{lable:'1',value:'لباس' },{lable:'2',value:'کفش' },{lable:'3',value:'عینک' }]
    return (
      <div className='flex w-full'>
        <Row gutter={3} className='w-full flex items-stretch'>
          <Col xl={12}> <FormText placeholder='نام محصول' defaultValue={rowSelect.name} key={'productName'} style={"p-3 mb-3"} /></Col>
          <Col xl={12}> <FormText placeholder='تعداد' type='number' defaultValue={rowSelect.count} key={'count'} style={"p-3 mb-3"} /></Col>
          <Col xl={12}>   <FormText placeholder='قیمت' type='number' defaultValue={rowSelect.price} key={'price'} style={"p-3 mb-3"} /></Col>
          <Col xl={12}>   <FormSelect defualtValue={rowSelect.category} options={category} style={"p-0 w-full flex flex-grow flex-1"} /></Col>
        </Row>


      </div>
    )
  }


  useEffect(() => {
    console.log(rowSelect);

  }, [rowSelect])

  return (
    <div><Table columns={columns} dataSource={data} onRow={(record, index) => { return { onClick: (event) => setRowSelect(record) } }} />
      <CusModal open={open} setOpen={setOpen} data={<GridContent />} />
    </div>
  )
}

export default CusGrid;



