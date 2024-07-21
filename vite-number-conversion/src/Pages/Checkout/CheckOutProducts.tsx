import React, { useEffect, useState } from 'react'
import useAddToBasket from '../../store/AddToBasket';
import { SingleProductType } from '../HomePage/SingleProduct';
import { Button, Col, Row } from 'antd';
import CounterProduct from '../HomePage/CounterProduct';
import { CgClose } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
type checkoutPrdouctType = SingleProductType & {
    count: number
}
type EditCountType = {
    enable: boolean,
    count: number | any,
    id: number | any
}
function CheckOutProducts() {

    const baskateData = useAddToBasket(state => state.products);
    const [products, setProducts] = useState<checkoutPrdouctType[]>([]);
    const { removeProduct, products: baskateProduct ,updateStore} = useAddToBasket()
    /*================================ Remove Product ==============================*/


    const removeFromBaskat = (id: number | undefined) => {
        removeProduct(id)
    }
    /*================================ Edit Count Product ==============================*/
    const [hasEditing, setHasEditing] = useState<EditCountType>({ enable: false, count: 0, id: 0 })
    const EditFormBaskat = (count: number, id: number | undefined) => {
        setHasEditing({ enable: true, count: count, id: id });
    }
    const increaseCount = () => {
        setHasEditing((prev) => ({ ...prev, count: prev.count + 1 }));

    }
    const decreaseCount = () => {
        setHasEditing((prev) => ({ ...prev, count: prev.count > 0 ? prev.count - 1 : 0 }))
    }
    /*================================ Update Count ==============================*/
    const updateValue = () => {
        setHasEditing({ count: 0, enable: false, id: 0 });
        updateStore(hasEditing.id ,hasEditing.count)
    }

    useEffect(() => {
        if (baskateData) {
            console.log(baskateData);
            
            setProducts(baskateData)
        }

    }, [baskateData])

    return (
        <Row>

            <div className='container mx-auto px-2 my-8' >
                <span className='text-2xl text-blue-600 p-4'> سبد خرید</span>
                {products?.map((product: checkoutPrdouctType) => {
                    return (
                        <div className=' flex lg:flex-row flex-col items-center border-b-2' key={product._id}>
                            <Col xs={24} lg={8}>
                                <div className='flex items-center'>
                                    <img className='w-[100px] h-[100px]' src={`../../../public/file/${product.image}`} alt={product.image} />
                                    <span> {product.title}</span>
                                </div>
                            </Col>
                            <Col xs={12} lg={8}>
                                {hasEditing.enable && product._id === hasEditing.id ?
                                    <div className='flex items-center'>
                                        <Button className='' onClick={increaseCount}> + </Button>
                                        <span className='px-2'>{hasEditing.count}</span>
                                        <Button onClick={decreaseCount}> - </Button>
                                    </div> :
                                    <>
                                        <span> تعداد:</span>
                                        <span className='text-xl px-2 text-sucess-text'>{product?.count}</span></>}
                            </Col>
                            <Col xs={12} lg={8} className='flex items-center justify-between'>
                                <span className='text-green-400 -500 bg-blue-8 '> قیمت :  {product?.price?.toLocaleString()} </span>
                                <div className=' flex  items-center mx-4'>
                                    <Button onClick={() => removeFromBaskat(product._id)} className='text-red-500'>
                                        حذف<MdClose color='red' />
                                    </Button>
                                    {hasEditing.enable && product._id === hasEditing.id ?
                                        <Button onClick={() => updateValue()} className='text-red-500'>
                                            ثبت
                                        </Button>
                                        : <Button onClick={() => EditFormBaskat(product.count, product._id)} className='text-red-500'>
                                            ویرایش
                                        </Button>}
                                </div>
                            </Col>
                        </div>

                    )
                })}
            </div>
        </Row>
    )
}

export default CheckOutProducts