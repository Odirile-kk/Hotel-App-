import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import abtPic from "../assets/pexels-kindel-media-7294585.jpg";

const LandingPage = () => {
  return (
    <div>
      {/*Navbar */}

      <header class="header fixed-top">
        <div class="container">
          <div class="row align-items-center">
            <a href="#" class="logo mr-auto">
              De luxe blu
            </a>

            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#"></a>
                </div>
                <ul class="nav navbar-nav">
                  <li class="active">
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Rooms</a>
                  </li>
                  <li>
                    <a href="#">Amenities</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">
                      <button type="button" class="btn btn-info">
                        SignUp
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div class="icons">
              <div id="menu-btn" class="fas fa-bars"></div>
              <div id="login-btn" class="fas fa-user"></div>
            </div>
          </div>
        </div>
      </header>

      {/*Header */}
      <section className="home" id="home">
        <div class="container">
          <div class="row align-items-center text-center text-md-left min-vh-100"></div>
        </div>
      </section>

      {/*About */}
      {/* <section className="about" id="about">
        <div class="">
          <div class="row align-items-center">
            <div className="col-md-6" id="pic">
              <img src={abtPic} class="w-100" alt="" />
            </div>

            <div class="col-md-6">
              <h3 class="title">Welcome to your home away from home</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                dolorem laborum itaque. Perspiciatis in veniam illum deserunt,
                quos animi maiores nisi officiis amet accusantium soluta a,
                excepturi vero obcaecati nobis.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="about">
        <div class="container">
          <div class="left">
            <img src={abtPic} alt="Image" class="image" />
          </div>
          <div class="right">
            <div class="text">
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum quis sem quis tortor ultrices scelerisque. Proin id
                sapien sed ligula iaculis hendrerit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Rooms */}
      <section className="rooms">
        <h1>ACCOMMODATION</h1>
        <div class="cards-wrapper">
          <div class="card d-none d-md-block" />
          <div class="card">
            <img src={abtPic} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img src={abtPic} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img src={abtPic} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

      </section>

      {/*Amenities */}
      <section className="amenities">
        <h1>AMENITIES</h1>
      </section>

      {/*Reviews */}
      <section className="reviews">
      <h1>What people say about us</h1>
      </section>

      {/*Contact */}
      <section className="contact">
      <h1>Get in touch</h1>
     
      </section>

      {/*Footer */}
      <section></section>
    </div>
  );
};

export default LandingPage;
