import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms, fetchRoom, deleteRoomById} from "../Redux/roomSlice";
import Sidebar from "./Sidebar";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  });

  const handleDelete = () => {
    dispatch(deleteRoomById)
  }

  return (
    <>
      <div class="d-flex" id="wrapper">
        <div>
          <Sidebar />
        </div>

        <div id="page-content-wrapper" style={{}}>
          <div class="container-fluid px-4" style={{ marginTop: "13%" }}>
            <div class="row my-5">
              <h3 class="fs-4 mb-3">Rooms</h3>
              <Link to={"/addRooms"}>
                <button>Add Room</button>
              </Link>
              <div
                class="col"
                style={{ boxShadow: "2px 2px 10px 0 rgba(22, 22, 26, 0.22)" }}
              >
                <table class="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width="50">
                        #
                      </th>
                      <th scope="col">Room no.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room) => (
                      <tr>
                        <th scope="row">{room._id}</th>
                        <td>{room.roomNumber}</td>
                        <td>{room.title}</td>
                        <td>{room.price}</td>
                        <td>{room.desc}</td>
                        <td>
                          <button>Update</button>
                          <br />
                          <button onClick={handleDelete}>Delete</button>
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
