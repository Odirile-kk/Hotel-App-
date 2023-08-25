import React from "react";
import pic from "../assets/pic-2.png";
import Navbar from "../components/Navbar";

const Gallery = () => {
  return (
    <>
        <div className="navbar-container">
        <Navbar />
      </div>
    <div className="gallery-container">
    
      <div className="gallery">
        <div>
          <img src='https://images.pexels.com/photos/65779/pexels-photo-65779.jpeg?auto=compress&cs=tinysrgb&w=400' alt="food" width={250} height={250} />
        </div>
        <div>
          <img src='https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=400' alt="food" width={250} height={250} />
        </div>
        <div>
          <img src='https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=400' alt="food" width={250} height={250} />
        </div>
        <div>
          <img src='https://images.pexels.com/photos/2842886/pexels-photo-2842886.jpeg?auto=compress&cs=tinysrgb&w=400' alt="food" width={250} height={250} />
        </div>
        <div>
          <img src='https://images.pexels.com/photos/346776/pexels-photo-346776.jpeg?auto=compress&cs=tinysrgb&w=400' alt="food" width={250} height={250} />
        </div>
        <div>
          <img src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600' alt="food" width={250} height={250} />
        </div>
        <div>
          <img src='https://images.pexels.com/photos/17910657/pexels-photo-17910657/free-photo-of-decoration-with-flower-arrangement-on-table-in-hotel-hall.jpeg?auto=compress&cs=tinysrgb&w=400' alt="food" width={250} height={250} />
        </div>
        <div>
          <img src='https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=400' alt="food" width={250} height={250} />
        </div>
        <div>
          <img src='https://images.pexels.com/photos/5269897/pexels-photo-5269897.jpeg?auto=compress&cs=tinysrgb&w=400' alt="food" width={250} height={250} />
        </div>
        <div>
          <img src='https://images.pexels.com/photos/5076439/pexels-photo-5076439.jpeg?auto=compress&cs=tinysrgb&w=400' alt="food" width={250} height={250} />
        </div>
      </div>
    </div>
    </>
  
  );
};

export default Gallery;
