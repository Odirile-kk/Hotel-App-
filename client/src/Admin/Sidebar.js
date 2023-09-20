import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBed,
  FaPaperclip,
  FaPowerOff,
  FaHome,
  FaUser,
} from "react-icons/fa";
import logo from "../assets/deluxesmall.png"
import { clearAccessToken } from "../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";


const Sidebar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(clearAccessToken());
    console.log("clearing the token");
    navigate('/')
  };

  return (
    <div >
      <div id="sidebar-wrapper" style={{height: '100vh', backgroundColor: '#203f5b'}}>
      {/* <img src={logo} width={100} height={100} style={{backgroundColor: 'gray', borderRadius: '50%', marginLeft: '28%'}}/> */}
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
       
          Admin Dashboard
        </div>
        
        <div
          className="list-group list-group-flush my-3"
          style={{ padding: "10%", paddingTop: "30%" }}
        >
          <Link
            to="/"
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
            to={"/"}
            className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            onClick={handleLogout}
          >
            <FaPowerOff /> Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
