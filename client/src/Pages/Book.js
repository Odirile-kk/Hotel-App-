import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { MdCalendarMonth } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import {  BsPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { format, differenceInDays } from "date-fns";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRooms } from "../Redux/roomSlice";
import { postBookingOptions, getBookingOptions  } from "../Redux/bookSlice";

const Book = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { rooms, loading, error } = useSelector((state) => state.rooms);
  // Find the specific room with the provided ID
  const room = rooms.find((room) => room._id === id);

  //find user
  const { users } = useSelector((state) => state.users);
 //retrieve token from local storage and assign it to signInUser
  const signedInUser = localStorage.getItem('userDetails')

  //using the details associated with the token, find the userid that matches the one generated when use logged in
  const getUserById = (userId) => {
    return users.find((user) => user._id === userId);
  };

  const signedInUserData = getUserById(signedInUser);

  const isAuthenticated = useSelector((state) => state.auth.accessToken !== null);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const [isDateAvailable, setIsDateAvailable] = useState(true); // Indicator for date availability
 
  useEffect(() => {
    dispatch(fetchRooms()); // Fetch all rooms if needed
    console.log('this the room title :', signedInUser)
  }, [dispatch]);

  const [bookingOptions, setBookingOptions] = useState({
    startDate: "",
    endDate: "",
    adults: "",
    children: "",
    rooms: "",
    roomName: "",
    price: ""
  });

//fetch booking info
  const fetchBookedDates = async () => {
    try {
      const response = await dispatch(getBookingOptions()); // Dispatch the async thunk
      return response.payload; // Assuming booked dates are returned in this format
    } catch (error) {
      console.error("Error fetching booked dates:", error);
      return [];
    }
  };

  const handleBookClick = async () => {
    const selectedStartDate = date[0].startDate;
    const selectedEndDate = date[0].endDate;

    const numberOfDays = differenceInDays(selectedEndDate, selectedStartDate);
    const totalPrice = numberOfDays * room.price; 

    const bookedDates = await fetchBookedDates(); // Fetch booked dates using the async thunk

    const updatedBookingOptions = {
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      adults: options.adults,
      children: options.children,
      rooms: options.rooms,
      roomName: room.title,
      price: totalPrice,
      user: signedInUserData
      
    };

    // Check if the selected dates conflict with booked dates
    const isConflict = bookedDates.some((bookedDate) => {
      return (
        // room._id === bookedDate.roomId &&
        selectedStartDate <= new Date(bookedDate.endDate) &&
        selectedEndDate >= new Date(bookedDate.startDate)
      );
    });

    if (isConflict) {
      setIsDateAvailable(false);
      return; 
    }

    setBookingOptions(updatedBookingOptions);
    dispatch(postBookingOptions(updatedBookingOptions));

    console.log(totalPrice);
    // console.log("book clicked");

    if (isAuthenticated) {
      navigate("/payment", { state: { totalPrice, numberOfDays } }); // Navigate to payment page
    } else {
      alert('Please login or Sign Up to continue')
    }
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="book-container">
        <div className="book-img-container">
          <div className="book-img">
            <Carousel>
              <div>
                <img src={room.image} alt=""/>
              </div>
              <div>
                <img src={room.image2} alt=""/>
              </div>
              <div>
                <img src={room.image3} alt=""/>
              </div>
              <div>
                <img src={room.image4} alt=""/>
              </div>
            </Carousel>
            <div className="book-text">
              <h1>{room.title}</h1>
              <h4>
                R {room.price} / night <BsPersonFill />
                {room.maxPeople}
              </h4>
              <p className="book-details">{room.desc}</p>
            </div>
          </div>
        </div>

        <div className="utils-container">
          <div className="utils">
            <div className="utils-left">
              <h6>{room.util} </h6>
              <h6>{room.util3} </h6>
              <h6>{room.util5} </h6>
            </div>
            <div className="utils-right">
              <h6>{room.util2}</h6>
              <h6>{room.util4} </h6>
            </div>
          </div>

          <div className="header">
            <div className="headerSearch">
              <MdCalendarMonth />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} 
    to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>

              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>

            <div className="headerSearch">
              <AiOutlineUser />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${options.adults} adults ~ ${options.children} children ~ ${options.rooms} rooms`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adults <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adults", "d")}
                      >
                        -
                      </button>
                    </div>

                    <span className="optionCounterNumber">
                      {options.adults}
                    </span>
                    <div className="optionCounter">
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adults", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                    </div>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <div className="optionCounter">
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.rooms <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("rooms", "d")}
                      >
                        -
                      </button>
                    </div>
                    <span className="optionCounterNumber">{options.rooms}</span>
                    <div className="optionCounter">
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("rooms", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {!isDateAvailable && (
          <p className="date-conflict-message">
            Selected dates are not available for booking. Please select new dates.
          </p>
        )}

          <button className="book-btn" onClick={handleBookClick}>
            Book
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
