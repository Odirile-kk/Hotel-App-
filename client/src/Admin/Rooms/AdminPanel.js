import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms, deleteRoom} from "../../Redux/roomSlice";
import Sidebar from "../Sidebar";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const handleDelete = async (id) => {
    dispatch(deleteRoom(id))
    dispatch(fetchRooms())
  }

  return (
    <>
      <div className="d-flex" id="wrapper">
        <div>
          <Sidebar />
        </div>

        <div id="page-content-wrapper" >
          <div className="container-fluid px-4" style={{ marginTop: '10%'}}>
            <div className="row my-5">
              <h3 className="fs-4 mb-3">Rooms</h3>
              <Link to={"/addRooms"}>
                <button>Add Room</button>
              </Link>
              <div
                className="col"
                style={{ boxShadow: "2px 2px 10px 0 rgba(22, 22, 26, 0.22)" }}
              >
                <table className="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col">
                        #
                      </th>
                      <th scope="col"></th>
                      <th scope="col">Room no.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col" >Description</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room) => (
                      <tr key={room._id}>
                        <th scope="row"></th>
                        <td>
                        <img src={room.image} width={90} height={90} /></td>
                        <td>{room.roomNumber}</td>
                        <td>{room.title}</td>
                        <td>{room.price}</td>
                        <td>{room.desc}</td>
                        <td>
                          <button><Link to={`/adminUpdate/${room._id}`}>Update</Link></button>
                          <br />
                          <button onClick={e => handleDelete(room._id)} class="btn btn-danger">Delete</button>
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