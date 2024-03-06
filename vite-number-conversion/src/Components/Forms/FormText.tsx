import React from 'react'
import { Input } from 'antd';

type fromTextType={
    placeholder:string,
    defaultValue:string
}
function FormText(props:fromTextType) {
    const {placeholder,defaultValue}=props
  return (
    <>
        <Input placeholder={placeholder } defaultValue={defaultValue}/>
    </>
  )
}

export default FormText