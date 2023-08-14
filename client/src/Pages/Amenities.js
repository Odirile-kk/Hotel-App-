import React from 'react'
import pool from '../assets/pool.jpg'
import bar from '../assets/bar.jpg'
import res from '../assets/restuarant.jpg'
import spa from '../assets/spa.jpg'
import conf from '../assets/pexels-karolina-grabowska-5473341.jpg'
import golf from '../assets/golf.jpg'

const Amenities = () => {
  return (
    <div>
         <div class="flip-card-container">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front"><img src={pool} className="flip-card-img"/></div>
              <div class="flip-card-back">
                <p style={{ fontSize: 10 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id est in quam tincidunt blandit a vel ex. Donec sit
                  amet convallis nibh. Praesent vestibulum erat vitae est
                  placerat placerat. Donec vestibulum sem quis nunc viverra,
                  condimentum vulputate massa mattis. Vivamus posuere justo
                  pulvinar, consequat dui ut, vestibulum urna. Vivamus ac
                  ultrices urna.
                </p>
              </div>
            </div>
            <div className="text-container">
              <h4>POOL</h4>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front"><img src={bar} className="flip-card-img"/></div>
              <div class="flip-card-back">
                <p style={{ fontSize: 10 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id est in quam tincidunt blandit a vel ex. Donec sit
                  amet convallis nibh. Praesent vestibulum erat vitae est
                  placerat placerat. Donec vestibulum sem quis nunc viverra,
                  condimentum vulputate massa mattis. Vivamus posuere justo
                  pulvinar, consequat dui ut, vestibulum urna. Vivamus ac
                  ultrices urna.
                </p>
              </div>
            </div>
            <div className="text-container">
              <h4>BAR</h4>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front"><img src={res} className="flip-card-img"/></div>
              <div class="flip-card-back">
                <p style={{ fontSize: 10 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id est in quam tincidunt blandit a vel ex. Donec sit
                  amet convallis nibh. Praesent vestibulum erat vitae est
                  placerat placerat. Donec vestibulum sem quis nunc viverra,
                  condimentum vulputate massa mattis. Vivamus posuere justo
                  pulvinar, consequat dui ut, vestibulum urna. Vivamus ac
                  ultrices urna.
                </p>
              </div>
            </div>
            <div className="text-container">
              <h4>RESTUARANT</h4>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front"><img src={spa} className="flip-card-img"/></div>
              <div class="flip-card-back">
                <p style={{ fontSize: 10 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id est in quam tincidunt blandit a vel ex. Donec sit
                  amet convallis nibh. Praesent vestibulum erat vitae est
                  placerat placerat. Donec vestibulum sem quis nunc viverra,
                  condimentum vulputate massa mattis. Vivamus posuere justo
                  pulvinar, consequat dui ut, vestibulum urna. Vivamus ac
                  ultrices urna.
                </p>
              </div>
            </div>
            <div className="text-container">
              <h4>SPA</h4>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front"><img src={conf} className="flip-card-img"/></div>
              <div class="flip-card-back">
                <p style={{ fontSize: 10 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id est in quam tincidunt blandit a vel ex. Donec sit
                  amet convallis nibh. Praesent vestibulum erat vitae est
                  placerat placerat. Donec vestibulum sem quis nunc viverra,
                  condimentum vulputate massa mattis. Vivamus posuere justo
                  pulvinar, consequat dui ut, vestibulum urna. Vivamus ac
                  ultrices urna.
                </p>
              </div>
            </div>
            <div className="text-container">
              <h4>CONFERENCE ROOM</h4>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front"><img src={golf} className="flip-card-img"/></div>
              <div class="flip-card-back">
                <p style={{ fontSize: 10 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent id est in quam tincidunt blandit a vel ex. Donec sit
                  amet convallis nibh. Praesent vestibulum erat vitae est
                  placerat placerat. Donec vestibulum sem quis nunc viverra,
                  condimentum vulputate massa mattis. Vivamus posuere justo
                  pulvinar, consequat dui ut, vestibulum urna. Vivamus ac
                  ultrices urna.
                </p>
              </div>
            </div>
            <div className="text-container">
              <h4>Golf</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Amenities