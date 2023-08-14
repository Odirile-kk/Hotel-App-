import React from "react";
import abtPic from "../assets/venice-hotel-2.jpg";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <div>
      <div class="cards-wrapper">
        <div class="card">
          <img src={abtPic} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">De luxe Standard Room</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              mattis metus nec finibus pretium. Mauris nec tempor nibh.
              Pellentesque elementum, felis et feugiat eleifend, felis.
            </p>
            <Link to={"/book"} class="btn btn-primary" style={{ marginLeft: "40%" }}>
              Book
            </Link>
          </div>
        </div>

        <div class="card">
          <img src={abtPic} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">De Luxe Sea View</h5>
            <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              mattis metus nec finibus pretium. Mauris nec tempor nibh.
              Pellentesque elementum, felis et feugiat eleifend, felis.
            </p>
            <Link to={"/book"} class="btn btn-primary" style={{ marginLeft: "40%" }}>
              Book
            </Link>
          </div>
        </div>

        <div class="card">
          <img src={abtPic} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">De Luxe Family Suite</h5>
            <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              mattis metus nec finibus pretium. Mauris nec tempor nibh.
              Pellentesque elementum, felis et feugiat eleifend, felis.
            </p>

            <Link to={"/book"} class="btn btn-primary" style={{ marginLeft: "40%" }}>
              Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
