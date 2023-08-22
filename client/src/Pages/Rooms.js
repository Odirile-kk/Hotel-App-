import abtPic from "../assets/venice-hotel-2.jpg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../Redux/roomSlice";
import { BsCheck, BsPersonFill } from "react-icons/bs";

const Rooms = () => {
  const dispatch = useDispatch();
  const { rooms, loading, error } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const cardWrapper = document.querySelector(".cards-wrapper");
    const cardWidth = cardWrapper.offsetWidth;
    const newPosition =
      direction === "left"
        ? scrollPosition - cardWidth
        : scrollPosition + cardWidth;
    cardWrapper.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
        {/* <button onClick={() => handleScroll("left")}></button> */}
      <div class="cards-wrapper">
      
        {rooms.map((room) => (
          <div className="card" key={room._id}>
            <img src={room.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{room.title}</h5>
              <h4>
                R {room.price} /night <BsPersonFill />
                {room.maxPeople}
              </h4>
              <p className="card-text"> {room.desc}</p>
              <Link
                to={`/room/${room._id}`}
                className="btn btn-primary"
                style={{ marginLeft: "40%" }}
              >
                Book
              </Link>
            </div>
            
          </div>
        ))}
       
      </div>
      {/* <button  style={{ order: 1 }} onClick={() => handleScroll("right")}></button> */}
     
    </div>
  );
};

export default Rooms;
