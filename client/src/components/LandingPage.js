import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import deluxe from "../assets/Deluxe.png";
import Navbar from "./Navbar";
import About from "../Pages/About";
import Amenities from "../Pages/Amenities";
import Rooms from "../Pages/Rooms";
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'
import {MdLocationOn, MdCall, MdOutlineEmail} from 'react-icons/md'
import contact from '../assets/pexels-thorsten-technoman-338504.jpg'

const LandingPage = () => {

const handleSubmit = () => {
  alert('Thank you for contacting us. We will respond shortly')
  window.location.reload()
}

const [fadeIn, setFadeIn] = useState(false);

useEffect(() => {
  setFadeIn(true);
}, []);

  return (
    <div>
      {/*Navbar */}

      <div class="navbar-container">
        <Navbar />
      </div>

      {/*Header */}
      <section className="home" id="home">
     
      
      <div className={`logo ${fadeIn ? 'fade-in' : ''}`}>
      <img src={deluxe} alt='' width={450} height={450}/>
      </div>
     
        <div class="btn-container">
       
          <button className="link-btn"><a href="#rooms">Book Now</a></button>
        </div>
        
      </section>

      <section className="about" id="about">
      {/* <h1>ABOUT</h1> */}
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
      
          <div className="contact-image">
            <img src={contact} alt="Image" />
          </div>

          <div className="form">
          <h1>Contact Us</h1>
            <form className="text-center border border-light p-5" action="#!">
              <input
                type="text"
                id="defaultContactFormName"
                className="form-control mb-4"
                placeholder="Name"
              />

              <input
                type="email"
                id="defaultContactFormEmail"
                className="form-control mb-4"
                placeholder="E-mail"
              />
              <div class="form-group">
                <textarea
                  className="form-control rounded-0"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="btn btn-info btn-block" type="submit" onClick={handleSubmit}>
                Send
              </button>
            </form>
          </div>
      
      </section>

      {/*Footer */}
      <section className="footer">

        <div className="footer-clean">
          <footer>
            <div className="footer-container">
              <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 item">
                  {/* <h3>Address</h3> */}
                  <MdLocationOn size={25} style={{marginLeft: '11%'}}/>
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
                <div className="col-sm-4 col-md-3 item">
                  {/* <h3>Contact</h3> */}
                  <MdCall size={25} style={{marginLeft: '11%'}}/>
                  <p>(011) 834-7699</p>
                </div>
                <div className="col-sm-4 col-md-3 item">
                  {/* <h3>Email</h3> */}
                  <MdOutlineEmail size={25} style={{marginLeft: '11%'}}/>
                  <p>deluxeblu@info.com</p>
                </div>
              </div>
              <div className="icons-container">
              <Link to='/terms'>Terms of service</Link>
              <div className="social-icons">
                <Link to="https://www.facebook.com/">
                  <BsFacebook size={40} color="white"/>
                </Link>
                <Link to="https://twitter.com/">
                  <BsTwitter size={40} color="white"/>
                </Link>
                <Link to="https://www.instagram.com/">
                  <BsInstagram size={40} color="white"/>
                </Link>
               
              </div>
              <p className="copyright">De luxe blu © 2018</p>
              </div>
             
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
