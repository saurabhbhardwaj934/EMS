import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider.jsx' 




const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "admin123") {
      setUser("admin");
      

    } else if (email === "employee@me.com" && password === "employee123") {
      setUser("employee");
      

    } else {
      alert("Invalid Credentials");
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const data = getLocalStorage();
    console.log(data);
  }, []);
  
  const Data= useContext(AuthContext)
  console.log(Data) 

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App