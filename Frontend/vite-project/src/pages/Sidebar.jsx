import React from 'react';
import { Link } from 'react-router-dom';
import { User, ScrollText, History, KeyRound, LogOut } from "lucide-react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className="container_sidebar">
        <div className='items'>
          <User />
          <Link to="/">My Account</Link>
        </div>

        <div className='items'>
          <ScrollText />
          <Link to="/paybill">Pay Bill</Link>
        </div>

        <div className='items'>
          <History />
          <Link to="/payment_history">Payment History</Link>
        </div>
        <div className='items'>
          <KeyRound />
          <Link to="/change-password">Change Password</Link>
        </div>

        <div className='items'>
          <LogOut />
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
