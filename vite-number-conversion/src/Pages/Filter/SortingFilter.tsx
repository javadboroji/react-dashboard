import { Button } from 'antd'
import React from 'react'

function SortingFilter() {
  return (
    <div className='flex flex-col'>
        <Button className='my-2 border-0 bg-transparent text-blue-500'> بیشترین قیمت</Button>
        <Button className='my-2 border-0 bg-transparent text-blue-500'> کم ترین قیمت</Button>
        <Button className='my-2 border-0 bg-transparent text-blue-500'> بیشترین فروش</Button>
        <Button className='my-2 border-0 bg-transparent text-blue-500'> کمترین فروش</Button>
        <Button className='my-2 border-0 bg-transparent text-blue-500'> تازه ترین ها</Button>
    </div>
  )
}

export default SortingFilter