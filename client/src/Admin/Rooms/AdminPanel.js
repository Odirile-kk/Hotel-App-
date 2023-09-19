import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms, deleteRoom } from "../../Redux/roomSlice";
import Sidebar from "../Sidebar";
import {BiSolidAddToQueue, BiSolidEditAlt, BiTrash} from 'react-icons/bi'

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const handleDelete = async (id) => {
    dispatch(deleteRoom(id));
    dispatch(fetchRooms());
  };

  return (
    <>
      <div className="d-flex" >
        <div>
          <Sidebar />
        </div>

        <div
          id="page-content-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <div className="container-fluid px-4">
            <div className="adminNavbar">
              <h3>Rooms</h3>
              <Link to={"/addRooms"}>
                <BiSolidAddToQueue size={30} color="white"/>
              </Link>
            </div>

            <div className="row my-5">
              <div
                className="col"
                style={{ boxShadow: "2px 2px 10px 0 rgba(22, 22, 26, 0.22)" }}
              >
                <table className="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col"></th>
                      <th scope="col">Room no.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room) => (
                      <tr key={room._id}>
                        <th scope="row"></th>
                        <td>
                          <img src={room.image} width={90} height={90} />
                        </td>
                        <td>{room.roomNumber}</td>
                        <td>{room.title}</td>
                        <td>{room.price}</td>
                        <td>{room.desc}</td>
                        <td>
                        
                            <Link to={`/adminUpdate/${room._id}`}><BiSolidEditAlt size={20} color="green"/></Link>
                          
                          <br />
                          <button
                            onClick={(e) => handleDelete(room._id)}
                            
                          >
                           <BiTrash size={20} color="red"/>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
