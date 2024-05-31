import React from 'react'
import { chatMessage } from './Chat.data'

function ChatMessages() {
    return (
        <div className='flex flex-col p-2'>
            {chatMessage?.map(message => (
                    <div key={message.id} className={` items-center ${message.role==='admin'? 'justify-start flex':' flex flex-row-reverse'} my-3 `}>
                    <img className='rounded-full w-8 h-8' src={message.profile} alt={message.userName} />
                    <p className='text-sm bg-black bg-opacity-5 p-2 rounded-lg mx-2'>{message.message}</p>
                </div>
            ))}
        </div>
    )
}

export default ChatMessages