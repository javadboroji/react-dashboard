import React, { useState } from 'react'
import { storieType } from './StoriesData'
import ModalBas from '../../Components/Modals/Modal.basic'
import CusModal from '../../../DyComponents/LocalComponents/CusModal'
import StorieModal from './StorieModal'
import { Modal } from 'antd'

type storieCardType = {
    data: storieType
}
const StrorieCard: React.FC<storieCardType> = ({ data }) => {
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

    return (
        <>
            <div onClick={showModal} className='flex flex-col items-center'>
                <div className='w-[80px] h-[80px] mx-2 rounded-full border-2 border-red-500 relative overflow-hidden'>
                    <img src={data.imageSrc} width={'100%'} height={'100%'} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' alt='storieCard' />

                </div>
                <span className='storie-card-description'>{data.description}</span>

            </div>
            <Modal title=""
             open={isModalOpen}
              onCancel={handleCancel}
              footer={[]}
              className='storie-modal'
               style={{backgroundColor:'transparent !important' ,boxShadow:'none'}}
               >
                <StorieModal 
                profileUser={data.imageSrc}
                 userName={data.userName}
                  like={data.like} 
                  comment={data.comment} 
                  desciption={data.description}
                  />
            </Modal>


        </>
    )
}

export default StrorieCard