import React, { useState } from "react";

const SignUp = ({ isOpen, onClose }) => {

   const [isLoggedIn, setIsLoggedIn] = useState()

  return (
    
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Sign Up</h2>
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label for="inputPassword5" class="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-describedby="passwordHelpBlock"
            />
           
          </div>
          <button class="btn btn-info" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
