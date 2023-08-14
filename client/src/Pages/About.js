import React from "react";
import abtPic from "../assets/abt4.jpg";

const About = () => {
  return (
    <div class="about-container">
      <div class="left">
        <img src={abtPic} alt="" className="about-image" />
      </div>

      <div class="right">
        <div class="about-text">
          <h2 className="about-title">Welcome to your home away from home</h2>
          <p className="about-paragrapgh">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sodales, risus pharetra elementum pellentesque, enim
            tellus consectetur ante, ac gravida orci libero quis eros.
            Suspendisse euismod feugiat magna, vel laoreet sem porta sed. Sed
            porttitor augue non rhoncus semper. Suspendisse egestas mauris nec
            ornare scelerisque. Etiam non nibh placerat, luctus arcu at,
            pellentesque ipsum. Sed nec ultricies nulla, eu cursus massa.
            Quisque mollis massa libero, posuere hendrerit erat porta vitae.
            Maecenas interdum quam at nisi posuere posuere. <br/><br/>Cras cursus viverra
            metus nec eleifend. Fusce quis orci sit amet eros tristique
            pellentesque. Vestibulum sodales libero sed felis bibendum egestas.
            Proin molestie nibh ut velit pulvinar, vitae semper justo porttitor.
            Morbi eu orci interdum, bibendum sapien in, fringilla dolor. Cras
            purus nunc, mattis a imperdiet sed, imperdiet eu augue. Curabitur
            sed eleifend nisl. Duis eget velit nec velit tincidunt lacinia non
            nec est. Sed nulla nibh, sollicitudin nec augue sit amet, mollis
            euismod velit. Donec eu lectus in ipsum fermentum aliquam. Ut vel
            erat enim. Vestibulum a nibh urna. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
