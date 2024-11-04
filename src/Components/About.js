import React from "react";
import "../Styles/About.css";
import Slider1 from "./Slider1";

const About = () => {
  return (
    <>
    <section className="about-us">
      <h2>About Us</h2>
      <p>
      "Welcome to Aiimfit Gym, where we’re dedicated to helping you achieve your fitness potential. Our mission is to create a supportive environment with expert guidance and cutting-edge equipment tailored to all fitness levels. Join us at Aiimfit Gym and take the first step towards a stronger, healthier you!"
      </p>
      
      <button className="join-now">Join Now</button>
    </section>
    <Slider1 />
    <section className="elements-main">
    <h2 className="three-elements-title">3 Elements</h2>
      <div className="three-elements">
        <div className="element mission">
          <h3>Mission</h3>
          <p>To inspire and empower our members.</p>
        </div>
        <div className="element vision">
          <h3>Vision</h3>
          <p>To become the leading fitness center.</p>
        </div>
      </div>
      <div className="three-elements">
        <div className="element values">
          <h3>Values</h3>
          <p>We value commitment, respect, and growth.</p>
        </div>
      </div>
    </section>
    <section className="choose-us">
      <div className="text">
                  <h1>Why Choose Us..?</h1>
                  <p>At Aiimfit Gym, we’re dedicated to helping you achieve your fitness goals through personalized training, state-of-the-art equipment, and a supportive community. Our experienced trainers focus on your unique needs, ensuring safe and effective workouts. With flexible membership options and a welcoming environment, Aiimfit Gym is your perfect partner on the journey to a healthier, stronger you.</p>
      </div>
      <div className="image">

      </div>
    </section>

    <section className="features">
      <h1>FEATURES</h1>
    </section>
    <section className="Trainers">

    </section>
    <section className="location">
      <h1>Location & Contact</h1>
      <div className="frame">
        <div className="contact">
          <h3 className="headtext">Aimfit Gym</h3>
          <div className="contacttext">
          <p className=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#B197FC" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <br />
         
          <b>Address:</b>123 Main St, Anytown, USA</p>
          <p className=""> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff80ff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><br /><b>Phone:</b> 555-555-5555</p>
          <p className="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#63E6BE" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
          <br />
            <b>Email:</b> [info@aimfitgym.com]</p>
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
          <br />
            <b>Timings:</b>
            Mon-Sat:(6:00-22:00) & sun(18:00-22:00)
          </p>
          </div>
        </div>
        <div className="gmap">
        <iframe class="gmap_iframe" src="https://maps.google.com/maps?width=599&amp;height=403&amp;hl=en&amp;q=Aimfit gym , dakoha&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

      </div>
    </section>
  
    </>
  );
};

export default About;
