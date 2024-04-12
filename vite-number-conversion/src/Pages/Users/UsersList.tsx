import React,{useEffect, useState} from 'react'
import ActionsButtons from './ActionsButtons'
import NewUserForm from './NewUserForm';

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
  useEffect(() => {
  
  }, [isModalOpen])
  
  return (
   <>
     <div className='p-4'>
      <ActionsButtons  showModal={showModal}/>
     </div>
     <div>
      {isModalOpen&&<NewUserForm  handleOk={handleOk} handleCancel={handleCancel} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>}
     </div>
   </>
  )
}

export default UsersList