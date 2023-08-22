import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { updateUsers } from "../../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);

  const findUser = users.find((findUser) => findUser._id === id);

  const [input, setInput] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    if (findUser) {
      setInput({
        username: findUser.username || "",
        email: findUser.email || "",
      });
    }
    console.log(findUser);
  }, [findUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(updateUsers({ id, ...input }));
      console.log("posting", input);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Email</label>
            <input
              type="text"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </div>
          <button onClick={handleSubmit} 
          style={{marginLeft: '40%', padding: '2%', borderRadius: '10px', backgroundColor: 'blue', marginTop: '5%'}} 
          >
            <Link to={"/adminuser"}>Submit</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
