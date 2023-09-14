import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { postUsers} from '../Redux/authSlice';
import { useNavigate } from "react-router-dom";
import MySwal from 'sweetalert2';


const SignUp = ({ isOpen, onClose }) => {

  const dispatch = useDispatch();
  
 const nav = useNavigate()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
 
   const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postUsers({ email, password }))
      .then((action) => {
        if (postUsers.fulfilled.match(action)) {
          MySwal.fire({
            title: 'Login successful!',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            window.location.reload();
            window.location.href = '/';
          });
        } else if (postUsers.rejected.match(action)) {
          MySwal.fire({
            title: 'Login failed',
            text: 'Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      });
  };
  


  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Sign In</h2>
        <form style={{marginTop: '8px'}}>
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
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
            <label htmlFor="inputPassword5" className="form-label">
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
          <button style={{backgroundColor: '#203f5b', padding: '2%', borderRadius: '10px', color: 'white'}} type="submit" onClick={e => nav('/register')}>Register</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default SignUp;