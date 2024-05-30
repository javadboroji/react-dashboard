import React from 'react'
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}



type propsTable={
    column:any,
    data:any
}
const TableCus:React.FC<propsTable>=({column,data}) =>{
  
     
   return (
    <Table columns={column} dataSource={data} />
  )
}

export default TableCus