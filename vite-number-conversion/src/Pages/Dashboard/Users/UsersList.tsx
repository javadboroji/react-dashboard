import React, { useEffect, useState } from 'react'
import ActionsButtons from './ActionsButtons'
import NewUserForm from './NewUserForm';
import { Row } from 'antd';
import CusGrid from '../../../DyComponents/LocalComponents/CusGrid';
import { columnUserType } from '../../../Types/Types';
import userImageI from "../../../../public/images/us-1.jpg";
import userImageII from "../../../../public/images/us-2.jpg";
import userImageIII from "../../../../public/images/us-3.jpg"
function UsersList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //column
  const columns: columnUserType[]  = [
    {
      title: 'نام کاربری',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'تصویرکاربر',
      dataIndex: 'image',
      key: 'image',
      render:(imageUrl:string)=>  <img src={imageUrl} alt={imageUrl}/>
    },
    {
      title: ' آیدی',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'ایمیل',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'پسورد',
      key: 'password',
      dataIndex: 'password',

    },
    {
      title: 'شماره تلفن',
      key: 'phone',
      dataIndex: 'phone',

    },
    {
      title: 'نقش',
      key: 'role',
      dataIndex: 'role',

    },
    {
      title: 'توضییحات',
      key: 'description',
      dataIndex: 'description',

    },
  ];
//data
const data:any=[
  {
    name:'جواد',
    id:'j-11',
    email:'javadboroji2222@gmail.com',
    password:'1234',
    phone:9392409359,
    role:'ادمین',
    description:'',
    image:userImageI
  },
  {
    name:'محمد',
    id:'M-11',
    email:'info@gmail.com',
    password:'784521',
    phone:912548796,
    role:'نویسنده',
    description:'',
    image:userImageII
  },
  {
    name:'مینا',
    id:'M-12',
    email:'info@gmail.com',
    password:'M123456',
    phone:9125474196,
    role:'نویسنده',
    description:'',
    image:userImageIII
  },
]

  useEffect(() => {

  }, [isModalOpen])

  return (
    <div className='flex flex-col w-full'>
      <div className='p-4'>
        <ActionsButtons showModal={showModal} />
      </div>
      <div className='flex'>
        {isModalOpen && <NewUserForm handleOk={handleOk} handleCancel={handleCancel} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />}
      </div>
      <div className=' w-full'>
          <CusGrid data={data} columns={columns}  /> 
      </div>
    </div>
  )
}

export default UsersList