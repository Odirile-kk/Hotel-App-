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
                <p style={{ fontSize: 16 }}>
                A recreational facility filled with water for swimming, relaxation, and water-based activities. Pools can come in various sizes and shapes, and they offer guests a refreshing way to cool off, exercise, or simply unwind while enjoying the water.
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
                <p style={{ fontSize: 16 }}>
                A social space within a hotel where guests can enjoy a variety of beverages, including alcoholic and non-alcoholic drinks. It provides a convivial environment for relaxation, socializing, and enjoying drinks. Some bars also offer light snacks and appetizers.
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
                <p style={{ fontSize: 16 }}>
                Dining facility within a hotel where guests can enjoy a wide range of prepared meals and dishes. Restaurants offer diverse menus that cater to different culinary preferences and dining occasions, from casual to fine dining.
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
                <p style={{ fontSize: 16 }}>
                A facility that offers various relaxation and wellness treatments, often including massages, facials, body treatments, and other therapeutic services. Spas provide guests with opportunities for rejuvenation, stress relief, and self-care.
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
                <p style={{ fontSize: 16 }}>
                A designated space within a hotel equipped with audiovisual technology and seating arrangements suitable for hosting meetings, seminars, presentations, workshops, and other business-related events. It provides a professional environment for productive gatherings.
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
                <p style={{ fontSize: 16 }}>
                Our failities include a golf course with carefully designed holes and fairways. It provides an opportunity for guests, whether experienced golfers or beginners, to play the sport of golf in a scenic and challenging environment.
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