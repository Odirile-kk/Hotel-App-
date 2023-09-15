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
    <div >
        {/* <button onClick={() => handleScroll("left")}></button> */}
      <div class="cards-wrapper">
      
        {rooms.map((room) => (
          <div className="card" key={room._id} style={{}}>
            <img src={room.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h2 className="card-title">{room.title}</h2>
              <h4>
                R{room.price} /night 
              </h4>
              <h6><BsPersonFill />
                {room.maxPeople}</h6>
              <p className="card-text"> {room.desc}</p>
              <Link
                to={`/room/${room._id}`}
                // className="btn btn-primary"
                style={{ marginLeft: "40%", backgroundColor: '#203f5b', color: 'white', padding: '2%', borderRadius: '25%'}}
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
