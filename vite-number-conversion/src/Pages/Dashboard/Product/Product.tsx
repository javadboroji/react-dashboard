import React,{useState} from 'react'
import CusGrid from '../../../DyComponents/LocalComponents/CusGrid'
import { CiCirclePlus } from "react-icons/ci";
import { Button, TableProps } from 'antd';
import { columnProductType, rowProductType } from '../../../Types/Types';
import CusModal from '../../../DyComponents/LocalComponents/CusModal';
import NewProductForm from './NewProductForm';
import { useDeleteProduct, useGetAllProducts } from '../../../Hooks';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Product() {
  const [open, setOpen] = useState(false);
  /*================== Products =================*/
  
  const notify = () => {
    toast.success("با موفقیت انجام شد!", {
        position: "bottom-right"
    });

}
  const{data:rows}= useGetAllProducts()
  
/*================== Delete Product api =================*/
 const{mutate}= useDeleteProduct(notify)

    const columns: columnProductType[]  = [
      {
        title: 'تصویرمحصول',
        dataIndex: 'image',
        key: 'image',
        render:(render)=>{          
          return <img width={'60px'} height={'50px'} src={`../../../../public/file/${render}`} alt={render.toString()}/>
        }
      },
      {
        title: 'نام',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'دسته بندی',
        dataIndex: 'category',
        key: 'category',
      },
      
      {
        title: 'قیمت',
        key: 'price',
        dataIndex: 'price',
  
      },
      
  
    ];
    const openModal=()=>{
      setOpen(true)
    }
  return (
    <div className='flex flex-col flex-1'>
      <div className='flex justify-between mx-4 items-center'>
      <h1 className='text-orang-100 text-3xl py-4'>محصولات</h1>
     <Button onClick={openModal} style={{background:'transparent' ,boxShadow:'none' ,color:'blue'}}>
      افزودن
     </Button>
      </div>
      <CusGrid deleteApi={mutate} data={rows} columns={columns} modal={true} modaltitle={'محصولات'}/>
      <CusModal open={open} setOpen={setOpen}>
                    <NewProductForm/>
        </CusModal>
        <ToastContainer rtl />

    </div>
  )
}

export default Product