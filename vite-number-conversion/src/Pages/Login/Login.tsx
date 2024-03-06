import React, { useEffect, useState } from 'react';
import { Col } from "antd";
import { Button } from 'antd';
import loginImage from '../../../public/images/20944201.jpg'
import { LoadingSpiner } from '../../Components/LocalComponents/LoadingSpiner.tsx';
import LoginForm from './LoginForm.tsx';
import RegisterForm from './RegisterForm.tsx';





function Login() {

    const [registerForm, setRegisterForm] = useState(false);
    const [loading, setloading] = useState(false);
    const [loadingIs, setLoadingIs] = useState(false)
    const changeFormMode = () => {
        setloading(true)
        setTimeout(() => {
            setRegisterForm(!registerForm);
            setloading(false)
        }, 2000);
    }
    useEffect(() => {
        console.log(registerForm);

    }, [registerForm])
    if (loading) {
        return <LoadingSpiner />
    } else {

        return (
            <>
                {registerForm ? <RegisterForm changeFormMode={changeFormMode} /> : <LoginForm changeFormMode={changeFormMode} setLoadingIs={setLoadingIs} />}
            </>
        )
    }
}

export default Login;


