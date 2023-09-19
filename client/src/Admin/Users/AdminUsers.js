import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUsers} from "../../Redux/userSlice";
import Sidebar from "../Sidebar";
import {BsPersonFillAdd} from 'react-icons/bs'
import {BiSolidAddToQueue, BiSolidEditAlt, BiTrash} from 'react-icons/bi'

const AdminUsers = () => {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate()
 

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDelete = async (id) => {
    // console.log('deleting', id)
    dispatch(deleteUsers(id))
    // console.log('we are deleting')
    dispatch(getUsers())
  }

  return (
    <div className="d-flex" id="wrapper">
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
      
        <div
          className="container-fluid px-4"
          style={{
            marginTop: "-12%",
            // marginLeft: "4%",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center", 
            // height: "90vh",
          }}
        >
          <div className="adminNavbar">
              <h3>Users</h3>
              <Link to={"/adduser"}>
                <BsPersonFillAdd size={30} color="white"/>
              </Link>
            </div>

          <div className="row my-5">
            <div
              className="col"
              style={{ boxShadow: "2px 2px 10px 0 rgba(22, 22, 26, 0.22)" }}
            >
              <table
                className="table bg-white rounded shadow-sm  table-hover"
              >
                <thead 
                >
                  <tr >
                    <th scope="col" width="90">
                      #
                    </th>
                    <th scope="col" width="90">Username</th>
                    <th scope="col" width="90">Name</th>
                    <th scope="col" width="90">Surname</th>
                    <th scope="col" width="90">Email</th>
                    <th scope="col" width="90">Phone number</th>
                    <th scope="col" width="90">...</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                  <tr key={user._id}>
                    <th scope="row">{user._id}</th>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                     <Link to={`/updateuser/${user._id}`}><BiSolidEditAlt size={20} color="green"/></Link>
                      <button onClick={e => handleDelete(user._id)}><BiTrash size={20} color="red"/></button>
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
  );
};

export default AdminUsers;