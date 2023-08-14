import React, { useState } from "react";
import SignUp from "../Pages/SignUp";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav class="navbar">
        <a class="navbar-brand" href="#">
          Your Logo
        </a>
        <ul class="navbar-nav">
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
