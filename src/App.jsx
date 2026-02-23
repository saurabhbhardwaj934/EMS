import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const { employees, admin } = useContext(AuthContext);

  // Check already logged user
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
    }
  }, []);

  const handleLogin = (email, password) => {
    const adminUser = admin.find(
      (a) => a.email === email && a.password === password
    );

    if (adminUser) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      setUser("admin");
      return;
    }

    const employeeUser = employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employeeUser) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
      setUser("employee");
      return;
    }

    alert("Login details galat hai");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
};

export default App;