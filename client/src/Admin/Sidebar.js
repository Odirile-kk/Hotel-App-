import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-user-secret me-2"></i>Admin Dashboard
        </div>

        <div className="list-group list-group-flush my-3" style={{padding: '10%', paddingTop:'30%'}}>
          <Link to='/'
        
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-chart-line me-2"></i>Rooms
          </Link>
          <Link to={'/adminBookings'}
        
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-paperclip me-2"></i>Bookings
          </Link>
          <Link to={'/adminUsers'}
        
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-shopping-cart me-2"></i>Users
          </Link>

          <Link to={'/adminLogout'}
        
            className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
          >
            <i className="fas fa-power-off me-2"></i>Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
