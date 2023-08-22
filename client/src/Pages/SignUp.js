import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { postUsers, loginStart, loginSuccess, loginFailure, setAccessToken} from '../Redux/authSlice';
import { useNavigate } from "react-router-dom";


const SignUp = ({ isOpen, onClose }) => {

   const dispatch = useDispatch();
   const loading = useSelector((state) => state.auth.loading);
 
 const nav = useNavigate()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
 
   const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginStart());

    try {
      const options = { email, password };
      const response = await dispatch(postUsers(options));

      if (postUsers.fulfilled.match(response)) {
        dispatch(loginSuccess(response.payload));
        dispatch(setAccessToken(response.payload.accessToken)); // Store access token
        
      } else {
        dispatch(loginFailure(response.error));
      }
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };


  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Sign Up</h2>
        <form style={{marginTop: '8px'}}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={email}
          onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="inputPassword5" class="form-label">
              Password : 
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={password}
          onChange={(e) => setPassword(e.target.value)}
            />
           
          </div>
          <div style={{display: 'flex', flexDirection: ' column', justifyContent: 'center', alignItems: 'center'}}>
          <button style={{marginTop: '8%'}} class="btn btn-outline-dark" type="submit" onClick={handleSubmit}>Login
          {/* {loading ? 'Logging in...' : 'Login'} */}
          </button>
          <p  style={{marginTop: '8%'}}>Not registered?</p>
          <button style={{backgroundColor: '#203f5b', padding: '2%', borderRadius: '10px', color: 'white'}} type="submit">Register</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default SignUp;


