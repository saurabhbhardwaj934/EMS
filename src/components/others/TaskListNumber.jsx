import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='grid grid-cols-4 gap-6'>
      
      <div className='bg-red-500 p-6 rounded-xl text-white'>
        <h2 className='text-3xl font-bold'>0</h2>
        <p>New Task</p>
      </div>

      <div className='bg-blue-500 p-6 rounded-xl text-white'>
        <h2 className='text-3xl font-bold'>5</h2>
        <p>Accepted</p>
      </div>

      <div className='bg-green-500 p-6 rounded-xl text-white'>
        <h2 className='text-3xl font-bold'>12</h2>
        <p>Completed</p>
      </div>

      <div className='bg-yellow-500 p-6 rounded-xl text-white'>
        <h2 className='text-3xl font-bold'>2</h2>
        <p>Failed</p>
      </div>

    </div>
  )
}

export default TaskListNumber
