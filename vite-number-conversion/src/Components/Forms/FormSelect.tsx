import React from 'react'
import { Select } from 'antd';
type selectInputType ={
  value:string,
  lable:string
}
type formSelectType={
  defualtValue?:string,
  options:selectInputType[],
  style?:string
}

function FormSelect(props:formSelectType) {
  const {defualtValue,options,style}=props
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
   
    <div className='w-full '>
      <Select
      defaultValue={defualtValue}
      onChange={handleChange}
      options={options}
      className={style}
    />
    </div>

  )
}

export default FormSelect