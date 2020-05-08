import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="ps-footer ps-footer--2">
        <div className="container">
          <div className="ps-footer__content">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                <aside className="widget widget_footer">
                  <h4 className="widget-title">Quick links</h4>
                  <ul className="ps-list--link">
                    <li>
                      <a href="policy.html">Policy</a>
                    </li>
                    <li>
                      <a href="term-condition.html">Term & Condition</a>
                    </li>
                    <li>
                      <a href="shipping.html">Shipping</a>
                    </li>
                    <li>
                      <a href="return.html">Return</a>
                    </li>
                    <li>
                      <a href="faqs.html">FAQs</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                <aside className="widget widget_footer">
                  <h4 className="widget-title">Company</h4>
                  <ul className="ps-list--link">
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="affilate.html">Affilate</a>
                    </li>
                    <li>
                      <a href="shipping.html">Career</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
                <aside className="widget widget_footer">
                  <h4 className="widget-title">Links</h4>
                  <ul className="ps-list--link">
                    <li>
                      <a href="our-press.html">Vendor Login</a>
                    </li>
                    <li>
                      <a href="checkout.html">Vendor Registration</a>
                    </li>
                    <li>
                      <a href="my-account.html">My account</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 ">
                <aside className="widget widget_newletters">
                  <h4 className="widget-title">Newsletter</h4>
                  <form className="ps-form--newletter" action="#" method="get">
                    <div className="form-group--nest">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email Address"
                      />
                      <button className="ps-btn">Subscribe</button>
                    </div>
                    <ul className="ps-list--social">
                      <li>
                        <a className="facebook" href="#0">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#0">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="google-plus" href="#0">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a className="instagram" href="#0">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </form>
                </aside>
              </div>
            </div>
          </div>
          <div className="ps-footer__copyright">
            <p>© 2020 AgroMart. All Rights Reserved</p>
            <p>
              <span>We Using Safe Payment For:</span>
              <a href="#0">
                <img src="img/payment-method/1.jpg" alt="" />
              </a>
              <a href="#0">
                <img src="img/payment-method/2.jpg" alt="" />
              </a>
              <a href="#0">
                <img src="img/payment-method/3.jpg" alt="" />
              </a>
              <a href="#0">
                <img src="img/payment-method/4.jpg" alt="" />
              </a>
              <a href="#0">
                <img src="img/payment-method/5.jpg" alt="" />
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
