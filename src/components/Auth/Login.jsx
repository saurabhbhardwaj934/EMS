import React, { useState } from 'react'

const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [message, setMessage] = useState("")  

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email, password)
    setMessage("Login Successful ✅")
    setemail("")
    setpassword("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-emerald-900">

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-96">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">

          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            type="email"
            placeholder="Enter your Email"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your Password"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          <button
            type="submit"
            className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>
          {message && <p className="text-green-500 text-center mt-4">{message}</p>}
        </form>

      </div>
    </div>
  )
}

export default Login
