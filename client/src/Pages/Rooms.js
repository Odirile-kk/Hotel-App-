
import abtPic from "../assets/venice-hotel-2.jpg";
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../Redux/roomSlice'; 
import { BsCheck, BsPersonFill } from "react-icons/bs";

const Rooms = () => {

  const dispatch = useDispatch();
  const { rooms, loading, error } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (

    <div style={{display: 'flex', flexDirection: 'row'}}>

<div class="cards-wrapper">

{rooms.map((room) => (
            <div className="card" key={room._id}>
              <img src={abtPic} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{room.title}</h5>
                <h4>R {room.price} /night <BsPersonFill/>{room.maxPeople}</h4>
                {/* <p className="card-text">{room.desc}</p> */}
                <Link to={`/room/${room._id}`} className="btn btn-primary" style={{ marginLeft: "40%" }}>
                  Book
                </Link>
              </div>
            </div>
            ))}
      

      </div>
    </div>
   
   
  );
};

export default Rooms;
