import { Button } from 'antd'
import React, { useState } from 'react'

type CounterProductType={
    count:number,
    setCount:React.Dispatch<React.SetStateAction<number>>
}
const CounterProduct:React.FC<CounterProductType>=(props)=> {
   

    const increaseCount=()=>{
        props.setCount((prev)=>prev+1)
    }
    const decreaseCount=()=>{
        
        props.setCount((prev)=>prev>0?prev-1:0)
    }
  return (
    <div className='flex items-center'>
        <Button className='' onClick={increaseCount}> + </Button>
            <span className='px-2'>{props.count}</span>
        <Button onClick={decreaseCount}> - </Button>
    </div>
  )
}

export default CounterProduct