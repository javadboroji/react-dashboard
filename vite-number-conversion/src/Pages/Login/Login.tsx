import React from 'react';
import PropTypes from 'prop-types';
import {Col, Flex} from "antd";
import { Button, Checkbox, Form, Input } from 'antd';
import Buttons from "../../Components/Buttons/Buttons.tsx";

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

function Login(props) {
    return (
      <div className={'container mx-auto my-32 justify-center items-center flex'}>

              <Col span={16}>
                  <div className={'flex flex-col shadow-lg rounded-2xl p-8'}>
                      <Form
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
                  </div>
              </Col>


      </div>
    );
}

export default Login;