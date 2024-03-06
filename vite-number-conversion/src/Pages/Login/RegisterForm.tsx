import React, { useEffect, useState } from 'react';
import { Col } from "antd";
import { Button } from 'antd';
import loginImage from '../../../public/images/20944201.jpg'
import { LoadingSpiner } from '../../Components/LocalComponents/LoadingSpiner.tsx';
import LoginForm from './LoginForm.tsx';
const RegisterForm = ({ changeFormMode }: any) => {

    return (
        <div className={'container mx-auto my-32 justify-center items-center flex'}>

            <Col span={16}>
                <div className='flex justify-between'>
                    <p className='text-3xl px-4 font-light text-orang-100'> وب<span className='text-blue-50'> سام</span></p>
                    <Button className='mx-4 px-8 border-0' onClick={changeFormMode}> ورود</Button>
                </div>
                <div className={'flex items-center shadow-lg rounded-2xl p-8'}>


                    <img src={loginImage} alt='login' className='w-1/2' />

                </div>
            </Col>


        </div>
    )
}
export default RegisterForm