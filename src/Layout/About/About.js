import React from "react";
import "./About.css";
import about_main from "../../Assests/about_main.png";
import about_bg1 from "../../Assests/about_bg1.png";
import about_bg2 from "../../Assests/about_bg2.png";
import about_bg3 from "../../Assests/about_bg3.png";

const About = () => {
  return (
    <div className="About">
      <div className="About_main">
        <div className="About_main_left">
          <img src={about_main} alt={about_main} />
        </div>
        <div className="About_main_right">
          <span>ABOUT US</span>
          <h2>Professional Creative Strategists</h2>
          <p>
            Here, at EleCreative, we bring you the most creative and
            professional strategies to convert your innovative ideas into
            bespoke, feature-rich, and conversion-focused facilities to help you
            meet your business needs and goals with complete ease! We make sure
            you exceed your customer expectations every step of the way. We will
            help to handle all your workflows that initiate and execute critical
            touchpoints for marketing and sales, skyrocketing your conversion
            rate in no time.
          </p>
        </div>
      </div>
      <div className="about_ecclipse1">
        <img src={about_bg1} alt={about_bg1} />
      </div>
      <div className="about_ecclipse2">
        <img src={about_bg2} alt={about_bg2} />
      </div>
      <div className="about_ecclipse3">
        <img src={about_bg3} alt={about_bg3} />
      </div>
    </div>
  );
};

export default About;
