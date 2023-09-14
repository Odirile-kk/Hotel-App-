import React, { useEffect } from "react";
import room from "../assets/Deluxe.png";
import Navbar from "../components/Navbar";
import { deleteBooking, getBookingOptions } from "../Redux/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';

const Bookings = () => {
  const dispatch = useDispatch();

  const { book } = useSelector((state) => state.book);

  const { users } = useSelector((state) => state.users);

  //retrieve token from local storage and assign it to signInUser
  const signedInUser = localStorage.getItem("userDetails");

  const getUserById = (userId) => {
    return users.find((user) => user._id === userId);
  };

  const getUserBooking = () => {
    return book.filter((booking) => booking.user === signedInUser);
  };

  const userBooking = getUserBooking();
  const signedInUserData = getUserById();

  useEffect(() => {
    dispatch(getBookingOptions());
    console.log("this is the user id from token :", signedInUserData);
  }, []);

  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure you want to cancel this booking?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBooking(id));
        Swal.fire('Cancelled!', 'Your booking has been canceled.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your booking is safe :)', 'info');
      }
    });
  };

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
                src={booking.image}
                width={200}
                height={200}
                style={{ marginTop: "2%", borderRadius: "10px" }}
              />

              <div className="booking-text">
                <h2>{booking.roomName}</h2>
                <p>
                  From : {booking.startDate.split("T")[0]} - To : {booking.endDate.split("T")[0]}
                </p>
                <p>
                  Adults {booking.adults} : Children {booking.children} : Rooms{" "}
                  {booking.rooms}
                </p>
              </div>
              <h1 style={{ marginLeft: "5%", padding: "4%" }}>
                R{booking.price}
              </h1>
              <button
                onClick={(e) => handleCancel(booking._id)}
                type="button"
                className="btn btn-danger"
                style={{
                  height: "10%",
                  marginTop: "10%",
                }}
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookings;
