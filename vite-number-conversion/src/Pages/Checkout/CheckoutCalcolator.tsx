import { Button, Input } from 'antd'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDiscountSubmit } from '../../Hooks';
import useAddToBasket from '../../store/AddToBasket';

type CheckoutCalcolatorProps = {
    totalPrice: number,
    discount?: number,
    subTotal: number,
    discountSucess:boolean,
    setDiscountSucess: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckoutCalcolator: React.FC<CheckoutCalcolatorProps> = ({ subTotal, totalPrice,setDiscountSucess,discountSucess }) => {
    
    const [discount, setDiscount] = useState<number | string>("");

    const [loading, setLoading] = useState(false);



    /*================================ Discpunt ==============================*/
    
    
    //* Dicount Api
    const { data, isSuccess, isError, mutate } = useDiscountSubmit()
    const discountOnchange = (e: React.FormEvent<HTMLInputElement>) => {
        setDiscount(e.currentTarget.value)
    }

    const discountOnblur = async () => {
        setLoading(true);
        await mutate(discount);
        await setTimeout(() => {
            setLoading(false);
        }, 3000);

    }
    useLayoutEffect(() => {
        if (data?.data.discount) {
            setDiscountSucess(true)
        } else {
            setDiscountSucess(false)
        }
    }, [data])

    return (
        <>

            <div className='border-2 rounded-lg p-4'>
                <div className='flex justify-between py-2'>
                    <span className='text-gray-400'> جمع کل</span>
                    <span> {totalPrice?.toLocaleString()}  ریال</span>
                </div>
                <div className='flex items-center justify-between border-b-2  py-2'>
                    <span className='text-gray-400'>  کد تخفیف</span>
                    <Input className={`w-[80%] ${discountSucess ? 'border-sucess-text' : "border-red-400"}`}
                        placeholder='jcxs'
                        type='text' onChange={discountOnchange}
                        value={discount?.toLocaleString()}
                        onBlur={discountOnblur}
                    />


                </div>
                {loading ? <Spin indicator={<LoadingOutlined spin />} /> : <div className='flex justify-between  py-2'>
                    <span className='text-gray-400'> مبلغ قابل پرداخت</span>
                    <span> {subTotal?.toLocaleString()}  ریال</span>
                </div>}

                <Button className='w-full py-6 my-4 bg-blue-600 text-white'>
                    پرداخت
                </Button>
            </div>
        </>
    )
}

export default CheckoutCalcolator