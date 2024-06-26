import React from 'react'
import { Input } from 'antd';

type fromTextType={
    placeholder:string,
    defaultValue?:string|number,
    type?:string,
    style?:string,
    inpName?:string
}
function FormText(props:fromTextType) {
    const {placeholder,defaultValue, type, style}=props
  return (
    <>
        <Input placeholder={placeholder } defaultValue={defaultValue} type={type}   className={style}/>
    </>
  )
}

export default FormText