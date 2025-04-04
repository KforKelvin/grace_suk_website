import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  phone:"",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, phone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("service_7lktw5i", "template_2nl9i2i", e.target, "lIaI12YyGR7FULqJc")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          // Add success message
          document.getElementById("success").innerHTML = "<div class='alert alert-success'>Your message was sent successfully!</div>";
          
          // Make message disappear after 2 seconds
          setTimeout(() => {
            document.getElementById("success").innerHTML = "";
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          // Add error message
          document.getElementById("success").innerHTML = "<div class='alert alert-danger'>Failed to send message. Please try again later.</div>";
          
          // Make message disappear after 2 seconds
          setTimeout(() => {
            document.getElementById("success").innerHTML = "";
          }, 5000);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-6">
            <div className="row">
              <div className="section-title">
                <h2>{props.data ? props.data.contactInfo : "loading"}</h2>
                <p>
                  {props.data ? props.data.description : "loading"}
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>

                {/* Add Phone Number Field */}
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  {props.data ? props.data.sendMessage : "loading"}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-5 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3 style={{fontSize: "25px"}}>{props.data ? props.data.contactInfoLabel: "loading"}</h3>
              <p style={{ fontSize: "25px" }}>
                <span style={{ fontSize: "30px" }} >
                  <i className="fa fa-map-marker"></i> 
                  {props.data ? props.data.addressLabel: "loading"}
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p style={{ fontSize: "25px" }}>
                <span style={{ fontSize: "30px" }} >
                  <i className="fa fa-phone"></i>
                  {props.data ? props.data.phoneLabel: "loading"}
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p style={{ fontSize: "25px" }}>
                <span style={{ fontSize: "30px" }} >
                  <i className="fa fa-envelope-o"></i> 
                  {props.data ? props.data.emailLabel: "loading"}
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; Web Design by {" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
