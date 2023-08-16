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
        <form style={{marginTop: '8px'}}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email :
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              className="input"
            />
          </div>
          <div className="form-group">
            <label for="inputPassword5" class="form-label">
              Password : 
            </label>
            <input
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-describedby="passwordHelpBlock"
              className="input"
            />
           
          </div>
          <div style={{display: 'flex', flexDirection: ' column', justifyContent: 'center', alignItems: 'center'}}>
          <button style={{marginTop: '8%'}} class="btn btn-outline-dark" type="submit">Login</button>
          <p  style={{marginTop: '8%'}}>Not registered?</p>
          <button style={{backgroundColor: '#203f5b', padding: '2%', borderRadius: '10px', color: 'white'}} type="submit">Register</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default SignUp;






// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   loginStart,
//   loginSuccess,
//   loginFailure,
// } from "../Redux/authSlice"; // Import auth-related actions from authSlice
// import {
//   registrationStart,
//   registrationSuccess,
//   registrationFailure,
// } from "../Redux/userSlice"; // Import user-related actions from userSlice
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const AuthComponent = () => {
//   const dispatch = useDispatch();
//  ;
//   const { registrationLoading, registrationError } = useSelector(
//     (state) => state.user
//   );
//   const { user, loading, error } = useSelector((state) => state.auth);

 
//   const nav = useNavigate()

//   const [credentials, setCredentials] = useState({
//     username: "",
//     email: "",
//     password: "",
//     isAdmin: false
//   });

//   const handleChange = (e) => {
//     const value =
//       e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setCredentials({ ...credentials, [e.target.name]: value });
//   };

//   const handleLogin = async () => {
//     try {
//       dispatch(loginStart());

//       const response = await axios.post("http://localhost:3000/api/auth/login", credentials);

//       dispatch(loginSuccess(response.data.details));
//       console.log(response.data.isAdmin)
//        nav('/admin')


//     } catch (error) {
//       dispatch(loginFailure("Wrong email or password."));
//     }
//   };

//   const handleRegistration = async () => {
//     try {
//       dispatch(registrationStart());

//       const response = await axios.post("http://localhost:3000/api/auth/register", credentials);
//       if (response.status === 200) {
//         dispatch(registrationSuccess());
//         console.log("User registered successfully.");
//       }
//     } catch (error) {
//       dispatch(registrationFailure("Registration failed."));
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="email"
//         name="email"
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         name="password"
//         onChange={handleChange}
//       />
//       <button onClick={handleLogin} disabled={loading}>
//         Login
//       </button>
//       {error && <p>Error: {error}</p>}
//       <p>
//         Not registered?{" "}
//         <Link to="/register">Click here to register.</Link>
//       </p>

//       <h2>Register</h2>
//       <input
//         type="username"
//         placeholder="username"
//         name="username"
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         name="email"
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         name="password"
//         onChange={handleChange}
//       />
//       <label>
//         <input
//           type="checkbox"
//           name="isAdmin"
//           onChange={handleChange}
//           checked={credentials.isAdmin}
//         />
//         Is Admin
//       </label>
//       <button onClick={handleRegistration} disabled={registrationLoading}>
//         Register
//       </button>
//       {registrationError && <p>Error: {registrationError}</p>}
   
// {/*    
//       <div>
//       <h2>Users List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user._id}>
//             {user.username}{" "}
//             <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
   
   
//     */}
   
   
   
   
//     </div>




//   );
// };

// export default AuthComponent;
