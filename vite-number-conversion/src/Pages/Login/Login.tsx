import React from 'react';
import PropTypes from 'prop-types';
import {Col, Flex} from "antd";
import { Button, Checkbox, Form, Input } from 'antd';
import Buttons from "../../Components/Buttons/Buttons.tsx";
import loginImage from '../../../public/images/20944201.jpg'
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
Login.propTypes = {
    
};

function Login() {
    return (
      <div className={'container mx-auto my-32 justify-center items-center flex'}>

              <Col span={16}>
               <div className='flex justify-between'>
               <p className='text-3xl px-4 font-light text-orang-100'> وب<span className='text-blue-50'> سام</span></p>
                <Button className='mx-4 px-8'> ثبت نام</Button>
               </div>
                  <div className={'flex items-center shadow-lg rounded-2xl p-8'}>

                      <Form
                        className='flex-1'
                          name="basic"
                          labelCol={{ span: 8 }}
                          wrapperCol={{ span: 16 }}
                          style={{ maxWidth: 600 }}
                          initialValues={{ remember: true }}
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}
                          autoComplete="off"
                      >
                          <Form.Item<FieldType>
                              label="نام کاربری"
                              name="username"

                              rules={[{ required: true, message: 'لطفا نام کاربری خود را واردکنید!' }]}
                          >
                              <Input className={'p-2'} />
                          </Form.Item>

                          <Form.Item<FieldType>
                              label="رمزعبور"
                              name="password"
                              rules={[{ required: true, message: 'لطفا رمز عبور خودرا واردکنید!' }]}
                          >
                              <Input.Password className={'p-2'} />
                          </Form.Item>



                          <Form.Item wrapperCol={{ offset: 8, span: 32}}>
                              <Buttons text={"ورود"} rounded={'6px'} backgroundColor={"#211C6A"} color={'#fff'} padding={'0.6rem 3rem'} fontSize={'16px'}/>
                          </Form.Item>
                      </Form>
                      <img src={loginImage} alt='login' className='w-1/2'/>
                  
                  </div>
              </Col>


      </div>
    );
}

export default Login;