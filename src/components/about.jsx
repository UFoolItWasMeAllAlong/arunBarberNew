import React from "react";
import './about.css'

export const About = (props) => {
  return (
    <div id="about">
      <div className="container-fluid">
        <div className="row">
          {/* Image Section */}
          <div className="who-am-i-image-container">
            <div className="col-xs-12 col-md-6 d-flex align-items-stretch p-0">
              <img src="img/myIcons/arunWhoAmI.jpg" className="img-responsive" alt="" />
            </div>
          </div>          
          
          {/* Content Section */}
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              {/* Who Am I */}
              <div className="who-am-i"></div>
              <h2>Who Am I</h2>
              <div className="hide-mobile">
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
              
              {/* What Do I Bring */}
              <h3>What Do I Bring To The Table?</h3>
              <div className="list-style row">
                <div className="col-md-6">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>

              {/* Where To Find Me - Inside the right column */}
              <div className="where-to-find-me">
                <h2>Where To Find Me</h2>
                <p className="location-text">
                  Currently based in the Greater Toronto Area @Ace of Blades - Kingston Location. I'm always open to 
                  new clients and you can follow me on IG and book through the Ace of Blades site. 
                </p>
                <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8523.059006037704!2d-79.26199356397919!3d43.70810773732142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cfd115bfb407%3A0x2bcd0bbee185c060!2sAce%20of%20Blades%20Barbershop%20Kingston%20Rd!5e0!3m2!1sen!2sca!4v1737736897084!5m2!1sen!2sca"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                {/* Add your location content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};