import React, { useState } from 'react'
import BtnBasComponent from '../Buttons/BtnBasComponent'
import CusModal from '../../../DyComponents/LocalComponents/CusModal';

function ModalBas() {
    const [open, setOpen] = useState(false)
    const openModal=()=>{
        setOpen(true)
        
    }
    const closeModal=()=>{
        setOpen(false)
    }
  return (
    <div className='p-4'>
         <div className='flex flex-col p-4'>
            <p className='p-2'> مدال</p>
            <span><span className='text-lg text-orang-100 p-2'> ComponentName:</span> CusModal</span>
            <ul>
                <span className='text-lg text-orang-100 p-2'>PropsList </span>
                <li className='p-2 my-2 bg-gray-100'>open: State  For display  modla </li>
                <li className='p-2  my-2 bg-gray-100'>setOpen  : change Modal display </li>
                <li className='p-2  my-2 bg-gray-100'>size :defult size "70rem" || modal width (type equall string ) </li>
                <li className='p-2  my-2 bg-gray-100'>title:Modal title (Not required) </li>
                <li className='p-2  my-2 bg-gray-100'>modalFooter : For Action Modal Controle(cancell ,ok ,submit ,...) this Type Any</li>
        
            </ul>
         
      
        </div>
        <BtnBasComponent basButtonsType='primary' btnText='بازکردن ' size='md' btnEvent={openModal} dyStyle='text-white'/>
        <CusModal open={open} setOpen={setOpen} title='مدال' size='50rem' modalFooter={<ModalFooter closeModal={closeModal} />} >
            <h1> test</h1>
            <p> testing</p>
        </CusModal>
    </div>
  )
}

export default ModalBas

type modalFooterType={
    closeModal:()=>void,
     eventModal?:()=>void
}
const ModalFooter=(props:modalFooterType)=>{
    
    return(
       <div className='flex w-full justify-end'>
        <BtnBasComponent basButtonsType='primary' btnText='ذخیره کردن ' size='md'  dyStyle='text-white'/>
        <BtnBasComponent basButtonsType='danger' outline={true} btnEvent={props.closeModal}  btnText='لغو کردن ' size='md' />
       </div> 
    )
}