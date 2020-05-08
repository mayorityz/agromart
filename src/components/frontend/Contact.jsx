import React from "react";
import Footer from "../navigation/footer";

const ContactUs = () => {
  return (
    <>
      <div class="ps-page--single" id="contact-us">
        <div class="ps-breadcrumb">
          <div class="container">
            <ul class="breadcrumb">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div class="ps-contact-info">
          <div class="container">
            <div class="ps-section__header">
              <h3>Contact Us For Any Questions</h3>
            </div>
            <div class="ps-section__content">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <div class="ps-block--contact-info">
                    <h4>Contact Directly</h4>
                    <p>
                      <a href="#0">
                        <span
                          class="__cf_email__"
                          data-cfemail="bbd8d4d5cfdad8cffbd6dac9cfddcec9c295d8d4d6"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                      <span>(+004) 912-3548-07</span>
                    </p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <div class="ps-block--contact-info">
                    <h4>Head Quater</h4>
                    <p>
                      <span>
                        17 Queen St, Southbank, Melbourne 10560, Australia
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <div class="ps-block--contact-info">
                    <h4>Work With Us</h4>
                    <p>
                      <span>Send your CV to our email:</span>
                      <a href="#0">
                        <span
                          class="__cf_email__"
                          data-cfemail="10737162757562507d716264766562693e737f7d"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <div class="ps-block--contact-info">
                    <h4>Customer Service</h4>
                    <p>
                      <a href="#0">
                        <span
                          class="__cf_email__"
                          data-cfemail="6f0c1a1c1b00020a1d0c0e1d0a2f020e1d1b091a1d16410c0002"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                      <span>(800) 843-2446</span>
                    </p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <div class="ps-block--contact-info">
                    <h4>Media Relations</h4>
                    <p>
                      <a href="#0">
                        <span
                          class="__cf_email__"
                          data-cfemail="8fe2eaebe6eecfe2eefdfbe9fafdf6a1ece0e2"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                      <span>(801) 947-3564</span>
                    </p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                  <div class="ps-block--contact-info">
                    <h4>Vendor Support</h4>
                    <p>
                      <a href="#0">
                        <span
                          class="__cf_email__"
                          data-cfemail="4137242f252e33323431312e3335012c203335273433386f222e2c"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                      <span>(801) 947-3100</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ps-contact-form">
          <div class="container">
            <form class="ps-form--contact-us" action="" method="get">
              <h3>Get In Touch</h3>
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Name *"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Email *"
                    />
                  </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Subject *"
                    />
                  </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="form-group submit">
                <button class="ps-btn">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
