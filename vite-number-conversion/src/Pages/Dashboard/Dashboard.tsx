import React from 'react'
import HeaderCards from './HeaderCards/HeaderCards'
import TasksContainer from './Tasks/TasksContainer'
import ActiveProjects from './ActiveProjects/ActiveProjects'
import Chats from './Chats/Chats'
import BestSelling from './BestSelling/BestSelling'

function Dashboard() {
  return (
    <div className='flex-1'>
     <HeaderCards/>
     <div className='flex '>
     <TasksContainer/>
     <ActiveProjects/>
     </div>
     <div className='flex'>
      <Chats/>
      <BestSelling/>
     </div>
    </div>
  )
}

export default Dashboard