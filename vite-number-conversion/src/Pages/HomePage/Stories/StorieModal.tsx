import { Button } from 'antd'
import React from 'react'
import video from "../../../assets/82817425-655325230.mp4"
import { CiHeart } from 'react-icons/ci'
import { FaRegComment } from 'react-icons/fa'
type StorieModalType = {
    profileUser: string,
    userName: string,
    like: number,
    comment: number,
    desciption: string
}
const StorieModal: React.FC<StorieModalType> = ({ profileUser, userName, like, comment, desciption }) => {
    return (
        <div className='flex flex-col py-4 bg-transparent h-[50rem]'>

            <div className='relative h-[50rem]'>
                <div className='flex justify-between items-center mt-4 bg-transparent absolute z-10 top-0 left-5  right-5 '>
                    <div className='flex items-center '>
                        <img width={'50px'} height={'50px'} className='rounded-full' src={profileUser} alt='userProfile' />
                        <span className='pr-2 text-white'>{userName}</span>
                    </div>
                    <Button className='text-sm'>دنبال کردن</Button>

                </div>
                <div className='absolute bottom-24 left-4 flex flex-col z-10'>
                    <div className='flex flex-col mb-4'>
                        <CiHeart size={24} color='#ffffff' />
                        <span className='text-white text-center'>{like}</span>
                    </div>
                    <div className='flex flex-col'>
                        <FaRegComment size={20} color='#ffffff' />
                        <span className='text-white text-center'>  {comment}</span>
                    </div>
                </div>
                <div className='absolute bottom-16 left-0 right-0 w-full'>
                    <span className='text-white text-center block mx-auto'>{desciption}</span>
                </div>
                <video className='bg-black rounded-lg h-[50rem]' width="100%" height="50rem" controls>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default StorieModal