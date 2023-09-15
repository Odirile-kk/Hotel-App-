import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserSecret,
  FaBed,
  FaPaperclip,
  FaPowerOff,
  FaHome,
  FaUser,
} from "react-icons/fa";


const Sidebar = () => {
  return (
    <div >
      <div id="sidebar-wrapper" style={{height: '100vh', backgroundColor: '#203f5b'}}>
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          Admin Dashboard
        </div>

        <div
          className="list-group list-group-flush my-3"
          style={{ padding: "10%", paddingTop: "30%" }}
        >
          <Link
            to="/adminpanel"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/adminpanel"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <FaBed /> Rooms
          </Link>
          <Link
            to={"/adminBookings"}
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <FaPaperclip /> Bookings
          </Link>
          <Link
            to={"/adminUsers"}
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <FaUser /> Users
          </Link>

          <Link
            to={"/adminLogout"}
            className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
          >
            <FaPowerOff /> Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
