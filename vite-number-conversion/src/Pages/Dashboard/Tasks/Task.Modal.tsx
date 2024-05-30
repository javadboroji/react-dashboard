import { Col, Flex, Form, Row } from 'antd'
import React from 'react'
import FormText from '../../../Components/Forms/FormText'
import FormDate from '../../../Components/Forms/FormDate'
import { Content } from 'antd/es/layout/layout'

function TaskModal() {
    return (
        <>
            <p className='text-base text-orang-100'> اضافه کردن تسک جدید</p>
            <Form>
                <Row gutter={[16,16]}>
                    <Col  lg={24}>
                        <FormText placeholder='عنوان تسک' type='string' />
                    </Col>
                    <Col lg={6}>
                        <FormDate placeholder='تاریخ یادآوری' />

                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default TaskModal