import React from 'react';
import { Link } from 'react-router-dom';
import { User, Plug, FileText, Users, Mail, LogOut } from "lucide-react";
import "./Admin_sidebar.css";

const AdminSidebar = () => {
  return (
    <aside className='admin-sidebar'>
      <div className="admin-container_sidebar">
        <div className='admin-items'>
          <User />
          <Link to="/admin">My Account</Link>
        </div>

        <div className='admin-items'>
          <Plug />
          <Link to="/new-connection">New Connection</Link>
        </div>

        <div className='admin-items'>
          <FileText />
          <Link to="/bills">Bills</Link>
        </div>

        <div className='admin-items'>
          <Users />
          <Link to="/customer-details">Customer Details</Link>
        </div>

        <div className='admin-items'>
          <Mail />
          <Link to="/inbox">Inbox</Link>
        </div>

        <div className='admin-items'>
          <LogOut />
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
