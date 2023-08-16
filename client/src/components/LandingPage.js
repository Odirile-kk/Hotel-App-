import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import abtPic from "../assets/pexels-kindel-media-7294585.jpg";
import pic from "../assets/pexels-kindel-media-7294584.jpg";
import Navbar from "./Navbar";
import About from "../Pages/About";
import Amenities from "../Pages/Amenities";
import Rooms from "../Pages/Rooms";
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'
import contact from '../assets/pexels-thorsten-technoman-338504.jpg'

const LandingPage = () => {
  return (
    <div>
      {/*Navbar */}

      <div class="navbar-container">
        <Navbar />
      </div>

      {/*Header */}
      <section className="home" id="home">
        <div class="btn-container">
          <button className="link-btn"><a href="#rooms">Book Now</a></button>
        </div>
      </section>

      <section className="about" id="about">
        <About />
      </section>

      {/*Rooms */}
      <section className="rooms" id="rooms">
        <h1>ACCOMMODATION</h1>
       <Rooms/>
      </section>

      {/*Amenities */}
      <section className="amenities" id="amenities">
        <h1>AMENITIES</h1>
        <Amenities />
      </section>

      {/*Contact */}
      <section className="contact" id="contact">
      

      
          <div class="contact-image">
            <img src={contact} alt="Image" />
          </div>

          <div class="form">
          <h1>Contact Us</h1>
            <form class="text-center border border-light p-5" action="#!">
              <input
                type="text"
                id="defaultContactFormName"
                class="form-control mb-4"
                placeholder="Name"
              />

              <input
                type="email"
                id="defaultContactFormEmail"
                class="form-control mb-4"
                placeholder="E-mail"
              />
              <div class="form-group">
                <textarea
                  class="form-control rounded-0"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button class="btn btn-info btn-block" type="submit">
                Send
              </button>
            </form>
          </div>
      
      </section>

      {/*Footer */}
      <section className="footer">

        <div class="footer-clean">
          <footer>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-sm-4 col-md-3 item">
                  <h3>Address</h3>
                  <p>
                    209 Aramis Ave
                    <br />
                    Waterkloof Gardens
                    <br />
                    George
                    <br />
                    6529
                  </p>
                </div>
                <div class="col-sm-4 col-md-3 item">
                  <h3>Contact</h3>
                  <p>(011) 834-7699</p>
                </div>
                <div class="col-sm-4 col-md-3 item">
                  <h3>Email</h3>
                  <p>deluxeblu@info.com</p>
                </div>
              </div>
              <div className="icons-container">
              <Link to='/terms'>Terms of service</Link>
              <div className="social-icons">
                <a href="#">
                  <BsFacebook size={40} color="white"/>
                </a>
                <a href="#">
                  <BsTwitter size={40} color="white"/>
                </a>
                <a href="#">
                  <BsInstagram size={40} color="white"/>
                </a>
               
              </div>
              <p class="copyright">De luxe blu © 2018</p>
              </div>
             
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
