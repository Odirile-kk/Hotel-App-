import React, { useState, useEffect } from "react";
import bookPic from "../assets/pexels-kindel-media-7294584.jpg";
import venice1 from "../assets/venice-hotel-1.jpg";
import venice2 from "../assets/venice-hotel-2.jpg";
import venice3 from "../assets/venice-hotel-3.jpg";
import venice4 from "../assets/venice-hotel-4.jpg";
import "react-datepicker/dist/react-datepicker.css";
import { MdCalendarMonth } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BsCheck, BsPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { format } from "date-fns";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchRooms } from "../Redux/roomSlice";
import { postBookingOptions } from '../Redux/bookSlice';

const Book = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  const { rooms, loading, error } = useSelector((state) => state.rooms);
  // Find the specific room with the provided ID
  const room = rooms.find((room) => room._id === id);

  const [bookingOptions, setBookingOptions] = useState({
    startDate: "",
    endDate:"",
    adults: "",
    children:"",
    rooms: "",
  });

  useEffect(() => {
    dispatch(fetchRooms()); // Fetch all rooms if needed
  }, [dispatch]);



  const handleBookClick = () => {
    const selectedStartDate = date[0].startDate;
    const selectedEndDate = date[0].endDate;
  
    const updatedBookingOptions = {
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      adults: options.adults,
      children: options.children,
      rooms: options.rooms,
    };
  
    setBookingOptions(updatedBookingOptions); 
    dispatch(postBookingOptions(updatedBookingOptions)); 
    console.log("book clicked");
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
                <img src={room.image} alt="Image 1" />
              </div>
              <div>
                <img src={room.image2} alt="Image 2" />
              </div>
              <div>
                <img src={room.image3} alt="Image 3" />
              </div>
              <div>
                <img src={room.image4} alt="Image 4" />
              </div>
            </Carousel>
            <div className="book-text">
              <h1>{room.title}</h1>
              <h4>R {room.price} / night <BsPersonFill/>{room.maxPeople}</h4>
              <p className="book-details">{room.desc}</p>
            </div>
          </div>
        </div>

        <div className="utils-container">
          <div className="utils">
            <div className="utils-left">
           <h6>{room.util} </h6>
              
              
            </div>
            <div className="utils-right">
            <h6><BsCheck/>{room.util2}</h6>
             
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
          <button className="book-btn" onClick={handleBookClick}><Link to={"/payment"} style={{color: 'white'}}>Book</Link></button>
        </div>
      </div>
    </>
  );
};

export default Book;
