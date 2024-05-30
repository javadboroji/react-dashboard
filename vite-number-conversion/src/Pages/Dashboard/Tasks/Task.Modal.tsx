import { Col, Flex, Form, Row } from 'antd'
import React from 'react'
import FormText from '../../../Components/Forms/FormText'
import FormDate from '../../../Components/Forms/FormDate'
import { Content } from 'antd/es/layout/layout'
import FormSelect from '../../../Components/Forms/FormSelect'

function TaskModal() {
    const taskOption=[ {
            lable:'0',
            value:'انجام شده'
        },
        {
            lable:'1',
            value:'انجام نشده'
        }
    ]
    return (
        <>
            <p className='text-base text-orang-100'> اضافه کردن تسک جدید</p>
            <Form>
                <Row gutter={[16,16]} className='flex items-center'>
                    <Col  lg={24}>
                        <FormText placeholder='عنوان تسک' type='string' />
                    </Col>
                    <Col lg={6}>
                        <FormDate placeholder='تاریخ یادآوری' />
                    </Col>
                    <Col lg={6}>
                        <FormSelect options={taskOption} style={'w-100'}/>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default TaskModal