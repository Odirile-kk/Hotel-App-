import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUsers, getUsers } from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

const Account = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const navigate = useNavigate();

  const getUserById = (userId) => {
    return users.find((user) => user._id === userId);
  };

  const signedInUser = localStorage.getItem("userDetails");
  const signedInUserData = getUserById(signedInUser);

  const id = signedInUserData ? signedInUserData._id : null;
  const isAdmin = signedInUserData ? signedInUserData.isAdmin : false;

  const [input, setInput] = useState({
    username: "",
    name: "",
    email: "",
    surname: "",
    number: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getUsers());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    if (!signedInUserData) {
      fetchData();
    } else {
      setLoading(false);
      setInput({
        username: signedInUserData.username,
        email: signedInUserData.email,
        surname: signedInUserData.surname,
        name: signedInUserData.name,
        number: signedInUserData.number,
      });
    }
  }, [dispatch, signedInUserData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(updateUsers({ id, ...input }));
      console.log("posting", input);

      await Swal.fire({
        icon: "success",
        title: "Account Updated",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
      await Swal.fire({
        icon: "error",
        title: "Error Updating User",
        text: "An error occurred while updating the user.",
      });
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="account">
        <div className="card-container">
          <div>
            <div className="row">
              <div className="col-xl-8">
                <div className="acc-container">
                  <div className="card-header">Account Details</div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="small mb-1" for="inputUsername">
                          Username
                        </label>
                        <input
                          className="form-control"
                          id="inputUsername"
                          type="text"
                          placeholder="Enter your username"
                          value={input.username}
                          onChange={(e) =>
                            setInput({ ...input, username: e.target.value })
                          }
                        />
                      </div>

                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1" for="inputFirstName">
                            First name
                          </label>
                          <input
                            className="form-control"
                            id="inputFirstName"
                            type="text"
                            placeholder="Enter your first name"
                            value={input.name}
                            onChange={(e) =>
                              setInput({ ...input, name: e.target.value })
                            }
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="small mb-1" for="inputLastName">
                            Last name
                          </label>
                          <input
                            className="form-control"
                            id="inputLastName"
                            type="text"
                            placeholder="Enter your last name"
                            value={input.surname}
                            onChange={(e) =>
                              setInput({ ...input, surname: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="small mb-1" for="inputEmailAddress">
                          Email address
                        </label>
                        <input
                          className="form-control"
                          id="inputEmailAddress"
                          type="email"
                          placeholder="Enter your email address"
                          value={input.email}
                          onChange={(e) =>
                            setInput({ ...input, email: e.target.value })
                          }
                        />
                      </div>

                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1" for="inputPhone">
                            Phone number
                          </label>
                          <input
                            className="form-control"
                            id="inputPhone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={input.number}
                            onChange={(e) =>
                              setInput({ ...input, number: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="btn btn-primary"
                        type="button"
                      >
                        Save changes
                      </button>
                      {isAdmin && (
                        <button
                          onClick={() => navigate("/adminpanel")}
                          className="btn btn-secondary"
                          type="button"
                        >
                          Admin
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
