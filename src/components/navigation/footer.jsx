import React from "react";
import * as Links from "../../connect/data.json";
import { Link } from "react-router-dom";

const Footer = () => {
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
                    <Link to="#">Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Term & Condition</Link>
                  </li>
                  <li>
                    <Link to="#">Shipping</Link>
                  </li>
                  <li>
                    <Link to="#">Return</Link>
                  </li>
                  <li>
                    <Link to="#">FAQs</Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
              <aside className="widget widget_footer">
                <h4 className="widget-title">Company</h4>
                <ul className="ps-list--link">
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Affilate</Link>
                  </li>
                  <li>
                    <Link to="#">Career</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
              <aside className="widget widget_footer">
                <h4 className="widget-title">Links</h4>
                <ul className="ps-list--link">
                  <li>
                    <a href={`${Links.website}/vendor/login`}>Vendor Login</a>
                  </li>
                  <li>
                    <a href={`${Links.website}/vendor/register`}>
                      Vendor Registration
                    </a>
                  </li>
                  <li>
                    <a href={`${Links.website}/login`}>My account</a>
                  </li>
                  <li>
                    <Link to="#">Shop</Link>
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
                      <Link className="facebook" to="#0">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="twitter" to="#0">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="google-plus" to="#0">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="instagram" to="#0">
                        <i className="fa fa-instagram"></i>
                      </Link>
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
            <span>Our Payment Gateways:</span>
            <Link to="#0">
              <img src="img/payment-method/1.jpg" alt="" />
            </Link>
            <Link to="#0">
              <img src="img/payment-method/2.jpg" alt="" />
            </Link>
            <Link to="#0">
              <img src="img/payment-method/3.jpg" alt="" />
            </Link>
            <Link to="#0">
              <img src="img/payment-method/4.jpg" alt="" />
            </Link>
            <Link to="#0">
              <img src="img/payment-method/5.jpg" alt="" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
