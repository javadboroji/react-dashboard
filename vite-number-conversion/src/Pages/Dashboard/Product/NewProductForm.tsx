import { Col, Row } from 'antd'
import React, { ChangeEventHandler, useState } from 'react'
import FormText from '../../../Components/Forms/FormText'
import FormSelect from '../../../Components/Forms/FormSelect'
import { FaUpload } from "react-icons/fa6";

function NewProductForm() {
    const categoryes = [{ lable: 'cloth', value: 'لباس' },
    { lable: 'glass', value: 'عینک' },
    { lable: 'watch', value: 'ساعت' },
    { lable: 'dress', value: 'لباس زنانه' },
    { lable: 'ornaments', value: ' زیورآلات' }]
    const [Image, setImage] = useState<string>("")
    const uploadImage=(e:any)=>{
        const file =e.target.files[0];
        if(file){
            const objectUrl = URL.createObjectURL(file);
            setImage(objectUrl)
        }
        
    }
    return (
        <Row gutter={[8, 8]} className='my-8'>

            <Col xs={24} lg={8}> <FormText style='p-3' placeholder='نام محصول' /></Col>
            <Col xs={24} lg={8}> <FormText style='p-3' placeholder=' قیمت' type='number' /></Col>
            <Col xs={24} lg={8}> <FormSelect style='w-full h-12' options={categoryes} inputLable='دسته بندی' /></Col>
            <Col xs={24} lg={24}><FormText style='py-6' placeholder='توضییحات' /></Col>
            <Col xs={24} lg={24}>
                <div className='w-full border-2 rounded-lg p-4 h-[calc(100vh-60vh)]'>
                {Image? <img className='w-2/3 mx-auto h-full object-contain ' src={Image} alt='product'/>:
                    <div className="file">
                        <label htmlFor="input-file">
                        <FaUpload size={24} className='absolute hover:cursor-pointer top-[49%] left-[56%] translate-x-[-50%] translate-y-[-50%]' />
                        <span className='absolute text-lg hover:cursor-pointer top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'> آپلود عکس</span>

                            
                        </label>

                     <input id="input-file" type="file" className='hidden' onChange={uploadImage} />
                    </div>
                     } 
                </div>
            </Col>
        </Row>

    )
}

export default NewProductForm