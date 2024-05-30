import React from 'react'
import CusGrid from '../../../Components/LocalComponents/CusGrid'
import { activeProjectCol, activeProjectData } from './ActiveProject.data'
import TableCus from '../../../Components/LocalComponents/TableCus'

function ActiveProjects() {

  return (
    <div className='w-2/3 shadow-lg rounded-md mt-3 mx-2 p-2'>
      <TableCus column={activeProjectCol} data={activeProjectData}/>
    </div>
  )
}

export default ActiveProjects