import React from "react";
import room from "../assets/venice-hotel-3.jpg";
import Navbar from "../components/Navbar";

const Bookings = () => {
  return (
    <div className="booking">

<div className="navbar-container">
        <Navbar />
      </div>

<div className="booking-container">

<div className="booking-list">
        <img src={room} width={200} height={200} style={{marginTop: '2%', borderRadius: '10px'}}/>
        
        <div className="booking-text">
        <h2>De luxe family suite</h2>
        <p>12 Jan 2023 - 17 Jan 2023</p>
        <p>2 Adults 1 room 0 children</p>
        </div>
        <h1 style={{marginLeft: '5%', padding: '4%'}}>R7 500</h1>
      </div>

      <div className="booking-list">
        <img src={room} width={200} height={200} style={{marginTop: '2%', borderRadius: '10px'}}/>
        
        <div className="booking-text">
        <h2>De luxe family suite</h2>
        <p>12 Jan 2023 - 17 Jan 2023</p>
        <p>2 Adults 1 room 0 children</p>
        </div>
        <h1 style={{marginLeft: '5%', padding: '4%'}}>R7 500</h1>
      </div>

      <div className="booking-list">
        <img src={room} width={200} height={200} style={{marginTop: '2%', borderRadius: '10px'}}/>
        
        <div className="booking-text">
        <h2>De luxe family suite</h2>
        <p>12 Jan 2023 - 17 Jan 2023</p>
        <p>2 Adults 1 room 0 children</p>
        </div>
        <h1 style={{marginLeft: '5%', padding: '4%'}}>R7 500</h1>
      </div>
</div>
     

    </div>
  );
};

export default Bookings;
