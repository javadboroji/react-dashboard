import { Button } from 'antd'
import React, { useState } from 'react'

function CounterProduct() {
    const [count, setCount] = useState(0);

    const increaseCount=()=>{
        setCount((prev)=>prev+1)
    }
    const decreaseCount=()=>{
        
        setCount((prev)=>prev>0?prev-1:0)
    }
  return (
    <div className='flex items-center'>
        <Button className='' onClick={increaseCount}> + </Button>
            <span className='px-2'>{count}</span>
        <Button onClick={decreaseCount}> - </Button>
    </div>
  )
}

export default CounterProduct