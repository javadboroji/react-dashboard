import { Button, Col, Form, Row } from 'antd'
import React, { ChangeEventHandler, useState } from 'react'
import FormText from '../../../Components/Forms/FormText'
import FormSelect from '../../../Components/Forms/FormSelect'
import { FaUpload } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form"
import { useAddNewProduct } from '../../../Hooks';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


type FieldType = {
    title: string,
    price: number,
    category: string,
    description: string
}
export type ToastFn=()=>void
function NewProductForm() {
    const categoryes = [{ lable: 'cloth', value: 'لباس' },
    { lable: 'glass', value: 'عینک' },
    { lable: 'watch', value: 'ساعت' },
    { lable: 'dress', value: 'لباس زنانه' },
    { lable: 'ornaments', value: ' زیورآلات' }]
    /*================== Toast =================*/
    const notify = () => {
        toast.success("با موفقیت انجام شد!", {
            position: "bottom-right"
        });
   
    }
    


    /*================== UploadImage =================*/


    const [Image, setImage] = useState<string>("")
    const [file, setFile] = useState<File|null>(null)
    const uploadImage = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file)
            const objectUrl = URL.createObjectURL(file);
            setImage(objectUrl)
        }

    }
    /*================== Submit Form =================*/
    const{mutate}= useAddNewProduct(notify)
    const { register, handleSubmit } = useForm<FieldType>()
    const onSubmit: SubmitHandler<FieldType> = (data) =>{
        const formData=new FormData;
        const reader = new FileReader();
        formData.append("title",data.title)
        formData.append("price",data.price.toString())
        formData.append("description",data.description)
        formData.append("category",data.category)
        if(file){    
            reader.readAsDataURL(file);        
            formData.append("src",file);

        }
       // logFormData(formData)
       mutate(formData);
    }
    // const logFormData = (formData:any) => {
    //     for (let pair of formData.entries()) {
    //       console.log(pair[0], pair[1]);
    //     }
    //   };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row gutter={[8, 8]} className='my-8'>


                <Col xs={24} lg={8}>     <input placeholder='عنوان' {...register("title", { required: true })} /></Col>
                <Col xs={24} lg={8}>  <input placeholder='قیمت' type="number"  {...register("price", { required: true })} /></Col>
                <Col xs={24} lg={8}> 
                  {/* <label>دسته بندی </label> */}
                    <select  {...register("category")}>
                        {categoryes?.map((item,i)=>  <option key={`cat-${i}`} value={item.lable}>{item.value}</option>)}  
                    </select>
                    </Col>
                <Col xs={24} lg={24}><input placeholder='توضیحات' {...register("description", { required: true })} /></Col>
                <Col xs={24} lg={24}>
                    <div className='w-full border-2 rounded-lg p-4 h-[calc(100vh-60vh)]'>
                        {Image ? <img className='w-2/3 mx-auto h-full object-contain ' src={Image} alt='product' /> :
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
                <Col xs={24} md={6}>
                    <Button htmlType="submit">ذخیره </Button>
                </Col>
            </Row>
            <ToastContainer rtl />
        </form>
    )
}

export default NewProductForm