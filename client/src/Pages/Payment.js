import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../Redux/authSlice";
import { getUsers, setUser } from "../Redux/userSlice";
import { updateBooking } from "../Redux/bookSlice";

const Payment = ({route}) => {
  const [payment, setPayment] = useState(null);
  const location = useLocation();
  const { totalPrice, numberOfDays } = location.state;
  const data = {
    email: "emkayphozur@gmail.com",
    amount: totalPrice * 100,
  };


  const postPaymentData = async (e) => {
    e.preventDefault();
    // console.log("this is the total price", totalPrice);
   
    try {
      const response = await axios.post(
        "http://localhost:3000/api/payment/initiate-payment",
        data
      );
      console.log("payment fired", response);
      setPayment(response);
      console.log("this is resdata", response.data.data.authorization_url);

        const authorizationURL = response.data.data.authorization_url;
        window.location.href = authorizationURL;
      
       
    } catch (error) {
      console.log("Payment initiation error:", error);
    }
  };

  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="payment">
        <div className="payment-container">
          <div className="centered title">
            <h1>Payment Details</h1>
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="col-sm-6">
          <label className="control-label"></label>
          <div className="jumbotron-flat">
            <div className="center">
              <h2>
                <i>BALANCE DUE:</i>
              </h2>
            </div>
            <div className="paymentAmt">R {totalPrice}</div>
            <div>For {numberOfDays} night/s</div>
          </div>
        </div>

        <div className="details-container">
          <div className="tab-content">
            <form>
              {/* <div className="form-row">
                <div className="form-group required">
                  <label className="control-label">Name</label>
                  <input className="form-control" size="4" type="text" required='required'/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group ">
                  <label className="control-label">Surname</label>
                  <input
                    autocomplete="off"
                    className="form-control card-cvc"
                    placeholder=""
                    size="4"
                    type="text"
                  />
                </div>
                <div className="form-group ">
                  <label className="control-label">Email</label>
                  <input
                    className="form-control card-expiry-month"
                    placeholder=""
                    size="2"
                    type="text"
                  />
                </div>
                <div className="form-group ">
                  <label className="control-label">Phone</label>
                  <input
                    className="form-control "
                    placeholder=""
                    size="4"
                    type="text"
                  />
                </div>
              </div> */}

              <div className="form-row">
                <div className="form-group">
                  <label className="control-label"></label>

                  <button
                    className="form-control btn btn-primary"
                    type="submit"
                    onClick={postPaymentData}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
