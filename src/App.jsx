import React, { useState } from "react";
import Login from "./Pages/Dashboard/Login";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <AdminDashboard onLogout={handleLogout} />
  ) : (
    <Login onLogin={setIsLoggedIn} />
  );
}

export default App;
