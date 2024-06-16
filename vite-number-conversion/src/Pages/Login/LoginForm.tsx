import React, { useEffect, useState } from 'react';
import { Col } from "antd";
import { Button } from 'antd';
import { useForm, SubmitHandler } from "react-hook-form"
import Buttons from '../../Components/Buttons/Buttons.tsx';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../../public/images/20944201.jpg'
import { LoadingSpiner } from '../../Components/LocalComponents/LoadingSpiner.tsx';

type FormValues = {
    firstName: string
    password: string | number
    email: string,
    setUserLogin:React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginForm = ({ changeFormMode, setLoadingIs,setUserLogin }: any) => {
    const navgate = useNavigate()
    const [loading, setloading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> =async (data) => {
        localStorage.setItem("userLoagin",JSON.stringify(true))
        setloading(true);
        setUserLogin(true)
      await  setTimeout(() => {
            navgate("/dashboard")
        }, 1000);
    }

    useEffect(() => {

    }, [loading])

    if (loading) {
        return <LoadingSpiner />
    }
    else {
        return (
            <div className={'container mx-auto my-32 justify-center items-center flex'}>
                <Col span={16}>
                    <div className='flex justify-between'>
                        <p className='text-3xl px-4 font-light text-orang-100'> وب<span className='text-blue-50'> سام</span></p>
                        <Button className='mx-4 px-8 border-0' onClick={changeFormMode}> ثبت نام</Button>
                    </div>
                    <div className={'flex items-center shadow-lg rounded-2xl p-8'}>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-1/2'>
                            <input placeholder='نام ' {...register("firstName", { required: true })} className='border px-6 py-2 my-4 rounded-lg' />
                            {errors.firstName?.type === 'required' && <p role="alert" className='text-orang-100'> نام  اجباری می باشد </p>}
                            <input placeholder='ایمیل' type="email" {...register("email", { required: true })} className='border px-6  py-2 my-4 rounded-lg' />
                            {errors.email?.type === 'required' && <p role="alert" className='text-orang-100'> ایمیل  اجباری می باشد </p>}
                            <input placeholder='پسورد' type="password" {...register("password", { required: true })} className='border px-6  py-2 my-4 rounded-lg' />
                            {errors.email?.type === 'required' && <p role="alert" className='text-orang-100'>  پسورد خود را واردکنید</p>}
                            <Buttons text={"ورود"} rounded={'6px'} backgroundColor={"#211C6A"} color={'#fff'} padding={'0.6rem 3rem'} fontSize={'16px'} />

                        </form>
                        <img src={loginImage} alt='login' className='w-1/2' />

                    </div>
                </Col>


            </div>
        );
    }
}
export default LoginForm