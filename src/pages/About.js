import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import instagram from "../images/instagram.png";

const About = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="about-container">
          <h1>Hey,</h1>
          <p className="about-body">
            My name is Adam. I am a poet living in England. Welcome to my
            website where you can find most of my poems. Whilst many are still
            doing the rounds with editors, as soon as they have done the laps
            that some poems must, they will appear on this website. Because
            poetry should be free - just as it's sole purpose is to make us
            free.
          </p>
          <div className="insta-container">
            <img src={instagram} alt="instagram-logo" />
            <a
              href="https://www.instagram.com/adam_karamazov_farkas/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="insta-body">@adam_karamazov_farkas</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
