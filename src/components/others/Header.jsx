import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between bg-black text-white p-6 rounded-xl'>
      <h1 className='text-2xl font-semibold'>
        Hello <br />
        <span className='text-yellow-400 text-3xl'>Saurabh 👋</span>
      </h1>
      <button className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg'>
        Logout
      </button>
    </div>
  )
}

export default Header
