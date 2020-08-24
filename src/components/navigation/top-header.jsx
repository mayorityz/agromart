import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopHeader extends Component {
  state = {};
  render() {
    return (
      <div className="header__top">
        <div className="container">
          <div className="header__left">
            <div className="menu--product-categories">
              <div className="menu__toggle">
                <i className="icon-menu"></i>
                <span> Shop by Department</span>
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
            <a className="ps-logo" href="index-2.html">
              <img src="img/" alt="" />
            </a>
          </div>
          <div className="header__center">
            <form className="ps-form--quick-search" action="" method="get">
              <div className="form-group--icon">
                <i className="icon-chevron-down"></i>
                <select className="form-control">
                  <option value="1">All</option>
                  <option value="1">Vegetables</option>
                  <option value="1">Meats</option>
                  <option value="1">Milks & Eggs</option>
                  <option value="1">Ocean Foods</option>
                  <option value="1">Fruits</option>
                </select>
              </div>
              <input
                className="form-control"
                type="text"
                placeholder="I'm shopping for..."
              />
              <button>Search</button>
            </form>
          </div>
          <div className="header__right">
            <div className="header__actions">
              <a className="header__extra" href="#0">
                <i className="icon-heart"></i>
                <span>
                  <i>0</i>
                </span>
              </a>
              <div className="ps-cart--mini">
                <a className="header__extra" href="#0">
                  <i className="icon-bag2"></i>
                  <span>
                    <i>0</i>
                  </span>
                </a>
                <div className="ps-cart__content">
                  <div className="ps-cart__items">
                    <div className="ps-product--cart-mobile">
                      <div className="ps-product__thumbnail">
                        <a href="#0">
                          <img src="img/products/clothing/7.jpg" alt="" />
                        </a>
                      </div>
                      <div className="ps-product__content">
                        <a className="ps-product__remove" href="#0">
                          <i className="icon-cross"></i>
                        </a>
                        <a href="product-default.html">
                          MVMTH classNameical Leather Watch In Black
                        </a>
                        <p>
                          <strong>Sold by:</strong> YOUNG SHOP
                        </p>
                        <small>1 x $59.99</small>
                      </div>
                    </div>
                    <div className="ps-product--cart-mobile">
                      <div className="ps-product__thumbnail">
                        <a href="#0">
                          <img src="img/products/clothing/5.jpg" alt="" />
                        </a>
                      </div>
                      <div className="ps-product__content">
                        <a className="ps-product__remove" href="#0">
                          <i className="icon-cross"></i>
                        </a>
                        <a href="product-default.html">
                          Sleeve Linen Blend Caro Pane Shirt
                        </a>
                        <p>
                          <strong>Sold by:</strong> YOUNG SHOP
                        </p>
                        <small>1 x $59.99</small>
                      </div>
                    </div>
                  </div>
                  <div className="ps-cart__footer">
                    <h3>
                      Sub Total:<strong>$59.99</strong>
                    </h3>
                    <figure>
                      <a className="ps-btn" href="shopping-cart.html">
                        View Cart
                      </a>
                      <a className="ps-btn" href="checkout.html">
                        Checkout
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="ps-block--user-header">
                <div className="ps-block__left">
                  <i className="icon-user"></i>
                </div>
                <div className="ps-block__right">
                  <Link to="/login">Login</Link>
                  <Link to="/joinus">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopHeader;
