import React, { useState } from "react";
import bookPic from "../assets/pexels-kindel-media-7294584.jpg";
import venice1 from "../assets/venice-hotel-1.jpg";
import venice2 from "../assets/venice-hotel-2.jpg";
import venice3 from "../assets/venice-hotel-3.jpg";
import venice4 from "../assets/venice-hotel-4.jpg";
import "react-datepicker/dist/react-datepicker.css";
import { MdCalendarMonth } from "react-icons/md";
import {AiOutlineUser} from 'react-icons/ai'
import { BsCheck } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { format } from "date-fns";
import Navbar from "../components/Navbar";

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

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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
                <img src={venice1} alt="Image 1" />
              </div>
              <div>
                <img src={venice2} alt="Image 2" />
              </div>
              <div>
                <img src={venice3} alt="Image 3" />
              </div>
              <div>
                <img src={venice4} alt="Image 4" />
              </div>
            </Carousel>
            <div className="book-text">
              <h1>De Luxe Suite</h1>
              <p className="book-details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                pellentesque nulla sit amet ornare consectetur. Sed et tempus
                dolor. Nulla dictum scelerisque mattis. Sed scelerisque a eros
                ut sollicitudin. Aliquam ligula arcu, vestibulum at tincidunt
                quis, ornare vel ex. Suspendisse sollicitudin est id est ornare,
                et bibendum lectus elementum. Nam aliquam dui nulla, eget
                condimentum lacus finibus ornare. Sed facilisis turpis facilisis
                suscipit cursus.
              </p>
            </div>
          </div>
        </div>

        <div className="utils-container">
          <div className="utils">
            <div className="utils-left">
              <h6>Kitchen </h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
            </div>
            <div className="utils-right">
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
              <h6>Kitchen</h6>
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
            {/* 
<button className="book-btn">Book</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
