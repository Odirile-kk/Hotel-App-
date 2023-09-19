import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUsers } from "../../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate()

  const findUser = users.find((findUser) => findUser._id === id);

  const [input, setInput] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    number: ""
  });

  useEffect(() => {
    if (findUser) {
      setInput({
        username: findUser.username || "",
        name: findUser.name || "",
        surname: findUser.surname || "",
        email: findUser.email || "",
        number: findUser.number || "",
      });
    }
    console.log(findUser);
  }, [findUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(updateUsers({ id, ...input }));
      console.log("posting", input);
navigate('/adminUsers')
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
       <div className="account">
        <div className="card-container">
          <div>
            <div className="row">
              <div className="col-xl-8">
                <div className="acc-container">
                  <div className="card-header">User Details</div>
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
    </div>
  )
};

export default UpdateUser;
