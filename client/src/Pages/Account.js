import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateUsers, getUsersById } from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Account = () => {
  const dispatch = useDispatch();
  // const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  // const findUser = users.find((findUser) => findUser._id === id);

  const signedInUser = users.find((user) => user._id === accessToken._id);

  const [input, setInput] = useState({
    username: "",
    name: "",
    email: "",
    surname: "",
    number: "",
  });

  useEffect(() => {
    console.log('this is my signed in user',signedInUser)
    if (signedInUser) {
      setInput({
        username: signedInUser.username || "",
        email: signedInUser.email || "",
        surname: signedInUser.surname || "",
        name: signedInUser.name || "",
        number: signedInUser.number || "",
      });
    }
  }, [signedInUser]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(updateUsers({ id: signedInUser._id, ...input }));
      console.log("posting", input);
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

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
