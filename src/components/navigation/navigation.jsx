import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <nav className="navigation">
        <div className="container">
          <div className="navigation__left">
            <div className="menu--product-categories">
              <div className="menu__toggle">
                <i className="icon-menu"></i>
                <span> Shop by Category</span>
              </div>
              <div className="menu__content">
                <ul className="menu--dropdown">
                  <li>
                    <a href="#0">
                      <i className="icon-star"></i> Hot Promotions
                    </a>
                  </li>
                  <li className="menu-item-has-children has-mega-menu">
                    <a href="#0">
                      <i className="icon-laundry"></i> Consumer Electronic
                    </a>
                    <div className="mega-menu">
                      <div className="mega-menu__column">
                        <h4>
                          Electronic<span className="sub-toggle"></span>
                        </h4>
                        <ul className="mega-menu__list">
                          <li>
                            <a href="#0">Home Audio &amp; Theathers</a>
                          </li>
                          <li>
                            <a href="#0">TV &amp; Videos</a>
                          </li>
                          <li>
                            <a href="#0">Camera, Photos &amp; Videos</a>
                          </li>
                          <li>
                            <a href="#0">Cellphones &amp; Accessories</a>
                          </li>
                          <li>
                            <a href="#0">Headphones</a>
                          </li>
                          <li>
                            <a href="#0">Videosgames</a>
                          </li>
                          <li>
                            <a href="#0">Wireless Speakers</a>
                          </li>
                          <li>
                            <a href="#0">Office Electronic</a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu__column">
                        <h4>
                          Accessories &amp; Parts
                          <span className="sub-toggle"></span>
                        </h4>
                        <ul className="mega-menu__list">
                          <li>
                            <a href="#0">Digital Cables</a>
                          </li>
                          <li>
                            <a href="#0">Audio &amp; Video Cables</a>
                          </li>
                          <li>
                            <a href="#0">Batteries</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-shirt"></i> Clothing &amp; Apparel
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-lampshade"></i> Home, Garden &amp;
                      Kitchen
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-heart-pulse"></i> Health &amp; Beauty
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-diamond2"></i> Yewelry &amp; Watches
                    </a>
                  </li>
                  <li className="menu-item-has-children has-mega-menu">
                    <a href="#0">
                      <i className="icon-desktop"></i> Computer &amp; Technology
                    </a>
                    <div className="mega-menu">
                      <div className="mega-menu__column">
                        <h4>
                          Computer &amp; Technologies
                          <span className="sub-toggle"></span>
                        </h4>
                        <ul className="mega-menu__list">
                          <li>
                            <a href="#0">Computer &amp; Tablets</a>
                          </li>
                          <li>
                            <a href="#0">Laptop</a>
                          </li>
                          <li>
                            <a href="#0">Monitors</a>
                          </li>
                          <li>
                            <a href="#0">Networking</a>
                          </li>
                          <li>
                            <a href="#0">Drive &amp; Storages</a>
                          </li>
                          <li>
                            <a href="#0">Computer Components</a>
                          </li>
                          <li>
                            <a href="#0">Security &amp; Protection</a>
                          </li>
                          <li>
                            <a href="#0">Gaming Laptop</a>
                          </li>
                          <li>
                            <a href="#0">Accessories</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-baby-bottle"></i> Babies &amp; Moms
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-baseball"></i> Sport &amp; Outdoor
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-smartphone"></i> Phones &amp;
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-book2"></i> Books &amp; Office
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-car-siren"></i> Cars &amp; Motocycles
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-wrench"></i> Home Improments
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="icon-tag"></i> Vouchers &amp; Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="navigation__right">
            <ul className="menu menu--organic">
              <li className="current-menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="current-menu-item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="current-menu-item">
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className="current-menu-item">
                <Link to="/be-a-vendor">Be A Vendor</Link>
              </li>
            </ul>
            <div className="ps-block--header-hotline inline">
              <p>
                <i className="icon-telephone"></i>Hotline:
                <strong> +234-805-198-5616</strong>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
