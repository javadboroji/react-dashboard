import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import { Button } from 'antd';
function ChatSending() {
    return (
        <>
            <input className='p-3 absolute top-[83%] w-[95%]  border-2 border-opacity-5 border-gray-bg rounded-lg' placeholder='سلام...' />
            <Button style={{ position: 'absolute', top: '85%', left: '4%', border: '0', transform: "rotate(250deg)" }}>
                <RiSendPlaneFill size={24} />
            </Button>
        </>
    )
}

export default ChatSending