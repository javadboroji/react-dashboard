import React from 'react'
import HeaderCards from './HeaderCards/HeaderCards'
import TasksContainer from './Tasks/TasksContainer'

function Dashboard() {
  return (
    <div className='flex-1'>
     <HeaderCards/>
     <TasksContainer/>
    </div>
  )
}

export default Dashboard