import React, { useEffect } from "react";
import room from "../assets/Deluxe.png";
import Navbar from "../components/Navbar";
import {deleteBooking, getBookingOptions } from "../Redux/bookSlice";
import { useDispatch, useSelector } from "react-redux";



const Bookings = () => {
  const dispatch = useDispatch();
  

  const { book } = useSelector((state) => state.book);

  const { users } = useSelector((state) => state.users);

  //retrieve token from local storage and assign it to signInUser
  const signedInUser = localStorage.getItem("userDetails");

  //using the details associated with the token, find the userid that matches the one generated when use logged in
  const getUserById = (userId) => {
    return users.find((user) => user._id === userId);
  };

  const getUserBooking = () => {
    return book.filter((booking) => booking.user === signedInUser);
  };

  const userBooking = getUserBooking();
  const signedInUserData = getUserById();

  useEffect(() => {
    dispatch(getBookingOptions())
    console.log("this is the user id from token :", signedInUserData);
  }, []);


  const handleCancel = (id) => {
alert("Are you sure you want to cancel this booking?")
dispatch(deleteBooking(id))
  }

  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="booking">
        <div className="booking-container">
          {userBooking.map((booking) => (
            <div className="booking-list" key={booking._id}>
              <img
                src={room}
                width={200}
                height={200}
                style={{ marginTop: "2%", borderRadius: "10px" }}
              />

              <div className="booking-text">
                <h2>{booking.roomName}</h2>
                <p>
                  From : {booking.startDate} - To : {booking.endDate}
                </p>
                <p>
                  Adults {booking.adults} : Children {booking.children} : Rooms{" "}
                  {booking.rooms}
                </p>
              </div>
              <h1 style={{ marginLeft: "5%", padding: "4%" }}>
                R{booking.price}
              </h1>
              {/* <button onClick={handleCancel} type="button" className="btn btn-danger" style={{
                height: '10%',
                marginTop: '10%',
               
              }}>Cancel</button> */}
              
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Bookings;
