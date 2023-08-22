import React, { useState, useEffect } from "react";
import SignUp from "../Pages/SignUp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import logo from "../../src/assets/deluxesmall.png";
import { clearAccessToken, setAccessToken } from "../Redux/authSlice"; // Import the action to clear the access token

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = useNavigate();

  const token = useSelector((state) => state.auth.accessToken);

  const dispatch = useDispatch();

  // Check for the token in local storage on page load
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      dispatch(setAccessToken(storedToken));
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(clearAccessToken()); // Clear the access token
    // Additional logout logic if needed
  };

  const handleProfile = () => {
    nav("/account");
  };

  const handleBookings = () => {
    console.log('siyahamba')
    nav("/bookings");
  };

  return (
    <div>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-brand">
          <Link to="/">
            <img
              src={logo}
              alt=""
              width={180}
              height={180}
              style={{ marginTop: -50 }}
            />
          </Link>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-nav ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#rooms">Rooms</a>
          </li>
          <li>
            <a href="#amenities">Amenities</a>
          </li>
          <li>
            <a href="gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <div>
            {token ? (
              <select
                className="custom-select"
                style={{
                  backgroundColor: "#203F5B",
                  padding: "8px",
                  borderRadius: "15px",
                  color: "white",
                }}
              >
                <option>Account</option>
                <option onChange={handleLogout}>Logout</option>
                <option onChange={handleProfile}>Profile</option>
                <option onClick={handleBookings}>Bookings</option>
              </select>
            ) : (
              <button
                style={{
                  backgroundColor: "#203F5B",
                  padding: "8px",
                  borderRadius: "15px",
                  color: "white",
                }}
                onClick={openModal}
              >
                SignUp
              </button>
            )}
          </div>
        </ul>
      </nav>

      <SignUp isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Navbar;
