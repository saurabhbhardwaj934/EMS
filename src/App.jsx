import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const { employees, admin } = useContext(AuthContext);

  const handleLogin = (email, password) => {
    // Admin Login
    const adminUser = admin?.find(
      (a) => a.email === email && a.password === password
    );

    if (adminUser) {
      setUser("admin");
      return;
    }

    // Employee Login
    const employeeUser = employees?.find(
      (e) => e.email === email && e.password === password
    );

    if (employeeUser) {
      setUser("employee");
      return;
    }

    alert("Invalid Credentials");
  };

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }
  }, []);

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
};

export default App;