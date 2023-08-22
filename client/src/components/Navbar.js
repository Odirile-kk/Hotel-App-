import React, { useState } from "react";
import SignUp from "../Pages/SignUp";
import { Link } from "react-router-dom";
import logo from '../../src/assets/deluxesmall.png'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-brand">
          <Link to='/'><img src={logo} alt='' width={180} height={180} style={{marginTop: -50}}/></Link>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
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
          </div>
        </ul>
      </nav>

      <SignUp isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Navbar;





























