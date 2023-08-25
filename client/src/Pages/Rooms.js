import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../Redux/roomSlice";
import { BsPersonFill } from "react-icons/bs";


const Rooms = () => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);


 
  

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
