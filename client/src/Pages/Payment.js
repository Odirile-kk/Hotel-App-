import React from "react";
import Navbar from "../components/Navbar";

const Payment = () => {

  
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
            <div className="paymentAmt">$100</div>
          </div>
        </div>

        <div className="details-container">
          <div className="tab-content">
            <form>
              <div className="form-row">
                <div className="form-group required">
                  <label className="control-label">Name</label>
                  <input className="form-control" size="4" type="text" />
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
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="control-label"></label>

                  <button
                    className="form-control btn btn-primary"
                    type="submit"
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
