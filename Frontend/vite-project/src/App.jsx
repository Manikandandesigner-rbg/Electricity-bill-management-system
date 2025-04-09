import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar"; // User Sidebar
import AdminSidebar from "./pages/Admin/Admin_sidebar" // Admin Sidebar
import Home from "./pages/Account"; // User Dashboard
import PayBill from "./pages/Pay_bill";
import PaymentHistory from "./pages/Payment_history";
import Login from "./pages/Login";
import AdminMyAccount from "./pages/Admin/AdminMyAccount"; // Admin Dashboard
import "./App.css";

const App = () => {
  const [userType, setUserType] = useState(null); // "admin" or "user"

  return (
    <Router>
      {userType === null ? (
        <div className="login-wrapper">
          <Login setUserType={setUserType} />
        </div>
      ) : (
        <div className="container">
          <Navbar />
          <main>
            {userType === "admin" ? <AdminSidebar /> : <Sidebar />}
            <div className="content">
              <Routes>
                {userType === "user" && (
                  <>
                    <Route path="/" element={<Home />} />
                    <Route path="/paybill" element={<PayBill />} />
                    <Route path="/payment_history" element={<PaymentHistory />} />
                  </>
                )}
                {userType === "admin" && <Route path="/admin" element={<AdminMyAccount />} />}
              </Routes>
            </div>
          </main>
        </div>
      )}
    </Router>
  );
};

export default App;
