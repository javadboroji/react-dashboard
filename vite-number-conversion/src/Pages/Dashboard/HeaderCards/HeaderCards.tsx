import React from 'react'

  import PeiCircle from "../Charts/PeiCircle"
import BarChartCs from '../Charts/BarChartCs';
import SinceChart from '../Charts/SinceChart';
function HeaderCards() {
 
  return (
    <div className='flex justify-between items-center'>

        <div className='bg-wihte shadow-lg rounded-md p-2 w-1/3 h-52 mx-2'>
            <SinceChart/>
        </div>
        <div className='bg-wihte shadow-lg rounded-md p-2 w-1/3 h-52 mx-2'>
            <PeiCircle/>
        </div>
        <div className='bg-wihte shadow-lg rounded-md p-2 w-1/3 h-52 mx-2'>
            <BarChartCs/>
        </div>
    </div>
  )
}

export default HeaderCards