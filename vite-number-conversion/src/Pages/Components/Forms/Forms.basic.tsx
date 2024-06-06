import React from 'react'
import FormText from '../../../Components/Forms/FormText';
import { Col, Row } from 'antd';
import "./Forms.style.css"
import { useForm } from 'react-hook-form';
import BtnBasComponent from '../Buttons/BtnBasComponent';

type RegisterInputs={
    userName:string,
    email:string,
    password:string
}
type registerFormType={
    registerHandler:(data:RegisterInputs)=>void  
}
function FormsBas() {
    const register=(data:RegisterInputs)=>{
        console.log(data);
        
    }
  return (
    <Row className='w-full p-4'>
      <Col xs={24} md={12}>
        <span className='text-lg text-orang-100 p-2 text-center block'> فرم ثبت نام  </span>
         <RegisterForm registerHandler={register} />
      </Col>
    </Row>
  )
}

export default FormsBas;

const RegisterForm=(props:registerFormType)=>{

    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<RegisterInputs>()

  
    return(
        <form className='w-full p-12 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' onSubmit={handleSubmit((data:RegisterInputs)=>props.registerHandler(data)) }>
            <Row gutter={[12,12]}>
                <Col xs={24} >
                <input  className='form-inp-cus' placeholder='نام کاربری' {...register('userName',{required:true})}/>
                {errors.userName && <span className='text-red-600 text-sm p-2'> نام کاربری  اجباری است</span>}
                </Col>
                <Col xs={24} >
                <input  className='form-inp-cus' placeholder='ایمیل' type='email' {...register('email',{required:true})}/>
                {errors.email && <span className='text-red-600 text-sm p-2'> ایمیل   اجباری است</span>}
                </Col>
                <Col xs={24} >
                <input  className='form-inp-cus' placeholder='رمز عبور' type='password' {...register('password',{required:true})}/>
                {errors.password && <span className='text-red-600 text-sm p-2'>  پسورد  اجباری است</span>}
                </Col>
                <Col xs={24} md={24} className='flex items-center justify-center'>
                    
                    <BtnBasComponent basButtonsType='primary' btnTypeSubmit={true}  dyStyle={'text-white px-20 '} btnText='ثبت نام '  size='md' />
                </Col>
            </Row>
        
         
            
        </form>
    )
}