
import React from 'react'
import ChatSending from './ChatSending'
import ChatMessages from './ChatMessages'

function Chats() {
  return (
    <div className='flex flex-col relative overflow-y-auto w-2/6  shadow-lg rounded-md mt-3 p-2 h-[25rem]'>
      <ChatMessages/>
    <ChatSending/>
    </div>
  )
} 

export default Chats