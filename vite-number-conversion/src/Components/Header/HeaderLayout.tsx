import React from 'react'
import HeaderAction from "./HeaderAction.tsx";

function HeaderLayout() {
  return (

      <div className='bg-Navy-blue w-[100%] h-20 flex '>
       <div className={'flex-shrink flex bg-gray-bg items-center '}>
         <h2 className={'text-wihte text-2xl px-20 font-bold'}>  داشبورد</h2>
       </div>
        <div className={'flex-1 items-center justify-between flex'}>
          <HeaderAction/>
        </div>
      </div>

  )
}

export default HeaderLayout