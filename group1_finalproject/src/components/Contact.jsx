import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../css/Contact.css'; // Import CSS file for Contact component

function Contact() {
  return (
    <section className="contact-mf">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="title-box-2">
              <h5 className="title-left">Send A Message</h5>
            </div>
            <div>
              <form
                action="https://formspree.io/xdoeonlo"
                method="POST"
                className="contactForm"
              >
                <div id="errormessage"></div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 characters"
                      />
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 characters for the subject"
                      />
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="button button-a button-big button-rounded"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              </div>
          </div>
          <div className="col-md-6">
            <div className="title-box-2 pt-4 pt-md-0">
              <h5 className="title-left">Get in Touch</h5>
            </div>
            <div className="more-info">
              <p className="lead">
                Whether you want to get in touch, talk about a project
                collaboration, or just say hi, I'd love to hear from you.
                <br />
                Simply fill the form and send me an email.
              </p>
              <div className="contact-details">
                <p>Pritesh Patel</p>
                <p>Pritesh29071998@gmail.com</p>
                <p>+1 548 577 5071</p>
                <p>227 Grulke Street, Kitchener, ON</p>
              </div>
            </div>
            <div className="map-wrapper">
              <MapContainer
                center={[43.451637, -80.492024]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "300px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[43.451637, -80.492024]}>
                  <Popup>227 Grulke Street, Kitchener, ON</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
