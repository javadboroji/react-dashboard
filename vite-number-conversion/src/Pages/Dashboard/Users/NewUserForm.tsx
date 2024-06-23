import React, { useState } from 'react';
import { Button, Col, Flex, Modal, Row } from 'antd';
import FormText from '../../../Components/Forms/FormText';
import FormSelect from '../../../Components/Forms/FormSelect';
import CusModal from '../../../Components/LocalComponents/CusModal';

type modalPrps = {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    handleCancel: () => void,
    handleOk: () => void
}
const NewUserForm: React.FC<modalPrps> = ({ isModalOpen, handleCancel, handleOk, setIsModalOpen }) => {
    const Roles = [{ lable: 'admin', value: 'ادمین' }, { lable: 'user', value: 'کاربرعادی' }, { lable: 'writer', value: 'نویسنده' }]
    return (
        <>

            <CusModal title="کاربر جدید"  setOpen={setIsModalOpen} open={isModalOpen}>
                <div className='container'>
                    <Row gutter={[8, 8]}>

                        <Col xs={24} lg={12}> <FormText style='p-3' placeholder='نام کاربری' /></Col>
                        <Col xs={24} lg={12}><FormText   style='p-3' placeholder='آیدی کاربری' /></Col>
                        <Col xs={24} lg={12}> <FormText  style='p-3' placeholder=' ایمیل' type='email' /></Col>
                        <Col xs={24} lg={12}><FormText  style='p-3' placeholder=' پسورد' type='password' /></Col>
                        <Col xs={24} lg={12}> <FormText  style='p-3' placeholder=' شماره تلفن' type='number' /></Col>
                        <Col xs={24} lg={12}> <FormSelect style='w-full h-12'  options={Roles} inputLable='نقش' /></Col>
                        <Col xs={24} lg={24}><FormText   style='py-6' placeholder='توضییحات' /></Col>
                    </Row>
                </div>

            </CusModal>
        </>)
}

export default NewUserForm