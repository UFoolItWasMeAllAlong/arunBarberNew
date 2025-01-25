import React, { useState } from "react";
import emailjs from "emailjs-com";
import './contact.css'

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <div className="col-12 col-md-6">
            <div className="form-wrapper">
              <form className="form" name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="title">
                  Get In Touch
                  <span>Send me a message</span>
                </div>
                
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                />
                
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
                
                <textarea
                  name="message"
                  id="message"
                  className="input"
                  style={{ height: '120px' }}
                  placeholder="Message"
                  required
                  onChange={handleChange}
                ></textarea>

                <button type="submit" className="button-confirm">
                  Send Message
                </button>

                <div className="login-with">
                  <a href="https://www.instagram.com/ar.blendz.to/" className="button-log">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Hours Form */}
          <div className="col-12 col-md-6 hours-section">
            <div className="form-wrapper">
              <div className="form">
                <div className="title">
                  Hours of Operation
                  <span>When you can find us</span>
                </div>
                
                <div className="hours-row">
                  <span className="day">Monday</span>
                  <span className="time">10:00 AM - 7:00 PM</span>
                </div>
                
                <div className="hours-row">
                  <span className="day">Tuesday</span>
                  <span className="time">10:00 AM - 7:00 PM</span>
                </div>
                
                <div className="hours-row">
                  <span className="day">Wednesday</span>
                  <span className="time">10:00 AM - 7:00 PM</span>
                </div>
                
                <div className="hours-row">
                  <span className="day">Thursday</span>
                  <span className="time">10:00 AM - 7:00 PM</span>
                </div>
                
                <div className="hours-row">
                  <span className="day">Friday</span>
                  <span className="time">10:00 AM - 7:00 PM</span>
                </div>
                
                <div className="hours-row">
                  <span className="day">Saturday</span>
                  <span className="time">10:00 AM - 6:00 PM</span>
                </div>
                
                <div className="hours-row">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};