import React, { useEffect, useState } from 'react'
import { Col, Row, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import Buttons from '../Buttons/Buttons';
import { Button } from 'antd/es/radio';
import CusModal from './CusModal';
import Forms from '../Forms/Forms';
import FormText from '../Forms/FormText';
import FormSelect from '../Forms/FormSelect';
import { columnProductType, rowProductType } from '../../Types/Types';


type DataType = {
  data: rowProductType[],
  columns: columnProductType[],
  modal?: boolean,
  modaltitle?: string,
  deleteApi?:any
}
const CusGrid: React.FC<DataType> = ({ data, columns, modal, modaltitle ,deleteApi }) => {
  //modal state
  const [open, setOpen] = useState(false);
  const [rowSelect, setRowSelect] = useState<rowProductType>({
    _id:"",
    key: "",
    name: "",
    category: "",
    count: null,
    price: null
  });



  const GridContent = () => {
    console.log(rowSelect);
    const category = [{ lable: '1', value: 'لباس' }, { lable: '2', value: 'کفش' }, { lable: '3', value: 'عینک' }]
    return (
      <div className='flex w-full'>
        <Row gutter={3} className='w-full flex items-stretch'>
          <Col xl={12}> <FormText placeholder='نام محصول' defaultValue={rowSelect.name} key={'productName'} style={"p-3 mb-3"} /></Col>
          <Col xl={12}> <FormText placeholder='تعداد' type='number' defaultValue={rowSelect.count} key={'count'} style={"p-3 mb-3"} /></Col>
          <Col xl={12}>   <FormText placeholder='قیمت' type='number' defaultValue={rowSelect.price} key={'price'} style={"p-3 mb-3"} /></Col>
          <Col xl={12}>   <FormSelect defualtValue={rowSelect.category} options={category} style={"p-0 w-full flex flex-grow flex-1 h-12"} /></Col>
        </Row>
      </div>
    )
  }

  //column 
  const col = [...columns, {
    title: 'عملیات',
    key: 'action',
    dataIndex: 'action  ',
    render: (render:any) => (
      <>
        <Button type-btn="edit" onClick={() => setOpen(true)}> ویرایش</Button>{deleteApi&&<Button onClick={()=>deleteApi(rowSelect._id)} type-btn="delete"> حذف</Button>}
      </>
    )
  }]

  useEffect(() => {
    console.log(rowSelect);

  }, [rowSelect])

  return (
    <div>
      <Table columns={col} dataSource={data} onRow={(record, index) => { return { onClick: (event) => setRowSelect(record) } }} />
      {modal && <CusModal title={modaltitle} open={open} setOpen={setOpen} >
        <GridContent />
      </CusModal>}
    </div>
  )
}

export default CusGrid;



