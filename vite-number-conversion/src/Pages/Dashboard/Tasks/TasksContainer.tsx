import React, { useState } from 'react'
import Buttons from '../../../Components/Buttons/Buttons'
import { taskType } from '../../../Types/Types';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { Checkbox } from 'antd';
import { Tasks } from './TasksContainer.data';
import { Button } from 'antd';
import CusModal from '../../../Components/LocalComponents/CusModal';
import TaskModal from './Task.Modal';

function TasksContainer() {
    const [open, setOpen] = useState(false)
  const addNewTask=()=>{
   setOpen(true)
  }
    return (
        <div className='flex flex-col w-2/6  shadow-lg rounded-md mt-3 p-2'>
            <div className='flex justify-between w-full p-3'>
                <p className='text-base  text-orang-100'> لیست کارها</p>
                <div>
                    <Buttons eventHandler={addNewTask}  text={'اضافه کردن'} fontSize={'12px'} backgroundColor='rgb(202, 240, 248)' />
                </div>
            </div>
            <div className='flex flex-col max-h-[23rem] overflow-y-auto'>
                {Tasks?.map(item => {
                    return (
                        <div key={item.id} className='flex justify-between px-2 py-4 border-b-2 border-b-border-gray '>
                            <div className='flex flex-col'>
                                <p>
                                    <Checkbox checked={item.done} />
                                    <span className={`${item.done?'text-sucess-text':''}`}>
                                    {item.title}
                                    </span>

                                </p>
                                <span className='text-xs mt-2'>{item.date}</span>
                            </div>
                            <div className='flex items-center'>
                                <Button style={{ border: '0', boxShadow: 'none', padding: '0' }}>
                                    <CiEdit color='#caf0f8' size={20} style={{ margin: '0 6px' }} />
                                </Button>
                                <Button style={{ border: '0', boxShadow: 'none', padding: '0' }}>
                                    <AiOutlineDelete color='red' size={20} style={{ margin: '0 6px' }} />
                                </Button>

                            </div>
                        </div>
                    )
                })}
            </div>
            <CusModal open={open} setOpen={setOpen}>
                <TaskModal/>
            </CusModal>
        </div>
    )
}

export default TasksContainer