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
type LoginInputs={
    email:string,
    password:string
}
type ContactInputs={
    userName:string,
    email:string,
    title:string,
    message:string
}
type registerFormType={
    registerHandler:(data:RegisterInputs)=>void  
}
type loginFormType={
    loginHandler:(data:LoginInputs)=>void
}
type contactFormType={
    contactHandler:(data:ContactInputs)=>void
}

function FormsBas() {
    const register=(data:RegisterInputs)=>{
        console.log(data);
        
    }
    const login=(data:LoginInputs)=>{
        console.log(data);
        
    }

    const contact=(data:ContactInputs)=>{
        console.log(data);
        
    }
  return (
    <Row className='w-full m-4 flex justify-between' gutter={0}>
      <Col xs={24} md={11} >
        <span className='text-lg text-orang-100 p-2 text-center block'> فرم ثبت نام  </span>
        <span><span className='text-lg text-orang-100 p-2'> ComponentName:</span> RegisterForm</span><br/>
        <span className='p-2  my-2 bg-gray-100 block my-8'> registerHandler (props):Form submit functionHandler </span>
         <RegisterForm registerHandler={register} />

      </Col>
      <Col xs={24} md={11}>
      <span className='text-lg text-orang-100 p-2 text-center block'> فرم ورود  </span>
      <span><span className='text-lg text-orang-100 p-2'> ComponentName:</span> LoginForm</span><br/>
      <span className='p-2  my-2 bg-gray-100 block my-8'> loginHandler(props) :Form submit functionHandler </span>
        <LoginForm loginHandler={login}/>
      </Col>
      <Col  xs={24} md={11}>
      <span className='text-lg text-orang-100 p-2 text-center block'> فرم تماس با ما  </span>
      <span><span className='text-lg text-orang-100 p-2'> ComponentName:</span> ContactForm</span><br/>
      <span className='p-2  my-2 bg-gray-100 block my-8'> ContactForm(props) :Form submit functionHandler </span>

        <ContactForm contactHandler={contact}/>
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

const LoginForm=(props:loginFormType)=>{

    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<LoginInputs>()

  
    return(
        <form className='w-full p-12 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' onSubmit={handleSubmit((data:LoginInputs)=>props.loginHandler(data)) }>
            <Row gutter={[12,12]}>
             
                <Col xs={24} >
                <input  className='form-inp-cus' placeholder='ایمیل' type='email' {...register('email',{required:true})}/>
                {errors.email && <span className='text-red-600 text-sm p-2'> ایمیل   اجباری است</span>}
                </Col>
                <Col xs={24} >
                <input  className='form-inp-cus' placeholder='رمز عبور' type='password' {...register('password',{required:true})}/>
                {errors.password && <span className='text-red-600 text-sm p-2'>  پسورد  اجباری است</span>}
                </Col>
                <Col xs={24} md={24} className='flex items-center justify-center'>
                    
                    <BtnBasComponent basButtonsType='primary' btnTypeSubmit={true}  dyStyle={'text-white px-20 '} btnText='ورود'  size='md' />
                </Col>
            </Row>
        
         
            
        </form>
    )
}

const ContactForm=(props:contactFormType)=>{
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<ContactInputs>()


    return(
        <form className='w-full p-12 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' onSubmit={handleSubmit((data:ContactInputs)=>props.contactHandler(data)) }>
        <Row gutter={[12,12]}>
            <Col xs={12} >
            <input  className='form-inp-cus' placeholder='نام کاربری' {...register('userName',{required:true})}/>
            {errors.userName && <span className='text-red-600 text-sm p-2'> نام کاربری  اجباری است</span>}
            </Col>
            <Col xs={12} >
            <input  className='form-inp-cus' placeholder='ایمیل' type='email' {...register('email',{required:true})}/>
            {errors.email && <span className='text-red-600 text-sm p-2'> ایمیل   اجباری است</span>}
            </Col>
            <Col xs={24} >
            <input  className='form-inp-cus' placeholder='موضوع'  {...register('title',{required:true})}/>
            
            </Col>
            <Col xs={24} >
            <textarea  className='form-inp-cus' placeholder='پیام'  {...register('message')}/>
            
            </Col>
            <Col xs={24} md={24} className='flex items-center justify-center'>
                
                <BtnBasComponent basButtonsType='primary' btnTypeSubmit={true}  dyStyle={'text-white px-20 '} btnText='ارسال'  size='md' />
            </Col>
        </Row>
    
     
        
    </form>
    )
}