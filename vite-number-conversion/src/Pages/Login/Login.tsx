import React, { useContext, useEffect, useState } from 'react';
import { Col } from "antd";
import { Button } from 'antd';
import loginImage from '../../../public/images/20944201.jpg'
import { LoadingSpiner } from '../../DyComponents/LocalComponents/LoadingSpiner.tsx';
import LoginForm from './LoginForm.tsx';
import RegisterForm from './RegisterForm.tsx';
import { useAppContext } from '../../Context/UserProvider.tsx';



interface LoginProps{
    setUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login:React.FC<LoginProps>=({setUserLogin})=> {
    const [registerForm, setRegisterForm] = useState(false);
    const [loading, setloading] = useState(false);
    const [loadingIs, setLoadingIs] = useState(false);
    const changeFormMode = () => {
        setloading(true);
      
        setTimeout(() => {
            setRegisterForm(!registerForm);
            setloading(false);
            
        }, 2000);
    }
    useEffect(() => {
    }, [registerForm])
    if (loading) {
        return <LoadingSpiner />
    } else {

        return (
            <>
                {registerForm ? <RegisterForm changeFormMode={changeFormMode} /> : <LoginForm changeFormMode={changeFormMode} setLoadingIs={setLoadingIs} setUserLogin={setUserLogin} />}
            </>
        )
    }
}

export default Login;


