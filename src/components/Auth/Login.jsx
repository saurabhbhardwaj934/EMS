import React, { useState } from 'react'

const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is ", email);
    console.log("password is ", password);
    setemail("")
    setpassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
      <div className='border-2 border-emerald-600 p-20 rounded-lg w-96'>
        <form onSubmit={(e) => {
          submitHandler(e);
        }}
          className='flex flex-col items-center justify-center'>
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
            required
            type="text"
            placeholder="Enter your Email"
            className="border-2 border-emerald-600 p-2 mb-4 w-full rounded-full bg-transparent text-white placeholder-white"
          />
          <input
            value={password}

            onChange={(e) => {
              setpassword(e.target.value)

            }}
            required
            type="password"
            placeholder="Enter your password"
            className="border-2 border-emerald-600 p-2 mb-4 w-full rounded-full bg-transparent text-white placeholder-white"
          />
          <button
            type='submit'
            className='bg-emerald-600 text-white px-4 py-2 rounded'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
