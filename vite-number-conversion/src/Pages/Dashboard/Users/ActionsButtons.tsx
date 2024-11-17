import { Button } from 'antd'
import React from 'react'


type actionUserProps ={
    showModal:()=>void
}
const  ActionsButtons:React.FC<actionUserProps> =({showModal})=> {


  return (
    <div className='flex'>
        <Button style={{margin:'0 0.5rem'}}> خروجی گرفتن </Button>
    </div>
  )
}

export default ActionsButtons