import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <>
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
                    <li>
                      <a href="#0">
                        <i className="icon-shirt"></i> Milk &amp; Cream
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="icon-lampshade"></i> Fresh Meat
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="icon-heart-pulse"></i> Butter &amp; Eggs
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="icon-diamond2"></i> Vegetables
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="icon-baby-bottle"></i> Fruits
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="icon-baseball"></i> Ocean Foods
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
      </>
    );
  }
}

export default Navigation;
