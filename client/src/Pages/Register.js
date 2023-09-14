import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const dispatch = useDispatch();
const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [secretCode, setSecretCode] = useState("");

  // const handleRegister = () => {
  //   const payload = isAdmin
  //     ? { username, email, password, isAdmin, secretCode }
  //     : { username, email, password };
  
  //   dispatch(registerUser(payload))
  //     .then((action) => {
  //       if (registerUser.fulfilled.match(action)) {
         
  //         toast.success('Registration successful! Redirecting to home page.');
  //         navigate('/');
  //       } else if (registerUser.rejected.match(action)) {
  //         toast.error('Registration failed. Please try again.');
  //       }
  //     });
  // };

  const handleRegister = () => {
    const payload = isAdmin
      ? { username, email, password, isAdmin, secretCode }
      : { username, email, password };
  
    dispatch(registerUser(payload))
      .then((action) => {
        if (registerUser.fulfilled.match(action)) {
          Swal.fire({
            icon: 'success',
            title: 'Registration successful!',
            text: 'Sign in to continue',
            timer: 2000, 
            showConfirmButton: false
          }).then(() => {
            navigate('/');
          });
        } else if (registerUser.rejected.match(action)) {
          Swal.fire({
            icon: 'error',
            title: 'Registration failed!',
            text: 'Please try again.',
            confirmButtonText: 'OK'
          });
        }
      });
  };

  return (
    <div className="register">
      <div >
        <div className="container" >
          <div className="row d-flex justify-content-center align-items-center" >
            <div className="col-md-9 col-xl-6">
              <div className="card" style={{ borderRadius: "15px", height: '100vh' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                    </div>

                     {/* Toggle isAdmin */}
                   <div className="form-check d-flex justify-content-center mb-3">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="isAdminCheckbox"
                      checked={isAdmin}
                      onChange={(e) => setIsAdmin(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="isAdminCheckbox">
                      Register as Admin
                    </label>
                  </div>

                  {/* Secret code input */}
                  {isAdmin && (
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="isAdminSecretCode"
                        className="form-control form-control-lg"
                        placeholder="Admin Secret Code"
                        value={secretCode}
                        onChange={(e) => setSecretCode(e.target.value)}
                      />
                      <label className="form-label" htmlFor="isAdminSecretCode">
                        Admin Secret Code
                      </label>
                    </div>
                  )}
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label className="form-check-label" htmlFor="form2Example3g">
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                      style={{padding: '10px', borderRadius: '14px', backgroundColor: '#203f5b', color: 'white'}}
                        onClick={handleRegister}
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" className="fw-bold text-body" onClick={e => navigate('/')}>
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;