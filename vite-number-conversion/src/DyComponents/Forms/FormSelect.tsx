import React from 'react'
import { Select } from 'antd';
type selectInputType ={
  value:string,
  lable:string
}
type formSelectType={
  defualtValue?:string|number,
  options:selectInputType[],
  style?:string,
  inputLable?:string,
  inpName?:string
}

function  FormSelect(props:formSelectType) {
  const {defualtValue,options,style ,inputLable}=props
  const handleChange = (value: string|number) => {
    console.log(`selected ${value}`);
  };
  return (
   
    <div className='w-full '>
      <Select
      placeholder={inputLable}
      defaultValue={defualtValue}
      onChange={handleChange}
      options={options}
      className={style}
      style={{
        width:'100%'
      }}
    />
    </div>

  )
}

export default FormSelect