import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

const AdminUsers = () => {
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

            display: "flex",
            justifyContent: "center",
            alignItems: "center", 
            height: "90vh",
          }}
        >
          <button>{/* <Link to={"/adduser"}>Add a user</Link> */}</button>

          <div className="row my-5">
            <h3 className="fs-4 mb-3">Users</h3>
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
                    <th scope="col" width="140">
                      #
                    </th>
                    <th scope="col" width="140">Name</th>
                    <th scope="col" width="140">Email</th>
                    <th scope="col" width="140">Room Type</th>
                    <th scope="col" width="140">No. of Adults</th>
                    <th scope="col" width="140">No. of Children</th>
                    <th scope="col" width="140">No. of Rooms</th>
                    <th scope="col" width="140">Check - in</th>
                    <th scope="col" width="140">Check - out</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {rooms.map((room) => ( */}
                  <tr>
                    <th scope="row">1</th>
                    <td>username</td>
                    <td>email</td>
                    <td>room type</td>
                    <td>no. of adults</td>
                    <td>no. of children</td>
                    <td>no. of rooms</td>
                    <td>check in</td>
                    <td>check out</td>
                  </tr>
                  {/* ))} */}
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