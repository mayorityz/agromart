import React from "react";
import * as Links from "../../connect/data.json";
const Mobile = () => {
  return (
    <>
      <header class="header header--mobile organic" data-sticky="true">
        <div class="header__top">
          <div class="header__left">
            <p>Welcome to AgroMart</p>
          </div>
          <div class="header__right">
            <ul class="navigation__extra">
              <li>
                <a href={`${Links.website}/vendor/`}>Sell on AgroMart</a>
              </li>
              <li>
                <a href={`${Links.website}/track-my-order`}>Track your order</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navigation--mobile">
          <div class="navigation__left">
            <a class="ps-logo" href="/">
              {/* <img src="img/logo-organic.png" alt="" /> */}
            </a>
          </div>
          <div class="navigation__right">
            <div class="header__actions">
              <div class="ps-cart--mini">
                <a class="header__extra" href="#0">
                  <i class="icon-bag2"></i>
                  <span>
                    <i>0</i>
                  </span>
                </a>
                <div class="ps-cart__content">
                  <div class="ps-cart__items">
                    <div class="ps-product--cart-mobile">
                      <div class="ps-product__thumbnail">
                        <a href="#0">
                          <img src="img/products/clothing/7.jpg" alt="" />
                        </a>
                      </div>
                      <div class="ps-product__content">
                        <a class="ps-product__remove" href="#0">
                          <i class="icon-cross"></i>
                        </a>
                        <a href="product-default.html">
                          MVMTH Classical Leather Watch In Black
                        </a>
                        <p>
                          <strong>Sold by:</strong> YOUNG SHOP
                        </p>
                        <small>1 x $59.99</small>
                      </div>
                    </div>
                    <div class="ps-product--cart-mobile">
                      <div class="ps-product__thumbnail">
                        <a href="#0">
                          <img src="img/products/clothing/5.jpg" alt="" />
                        </a>
                      </div>
                      <div class="ps-product__content">
                        <a class="ps-product__remove" href="#0">
                          <i class="icon-cross"></i>
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
                  <div class="ps-cart__footer">
                    <h3>
                      Sub Total:<strong>$59.99</strong>
                    </h3>
                    <figure>
                      <a class="ps-btn" href={`${Links.website}/cart`}>
                        View Cart
                      </a>
                      <a class="ps-btn" href={`${Links.website}/checkout`}>
                        Checkout
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div class="ps-block--user-header">
                <div class="ps-block__left">
                  <i class="icon-user"></i>
                </div>
                <div class="ps-block__right">
                  <a href={`${Links.website}/login`}>Login</a>
                  <a href={`${Links.website}/joinus`}>Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ps-search--mobile">
          <form class="ps-form--search-mobile" action="" method="get">
            <div class="form-group--nest">
              <input
                class="form-control"
                type="text"
                placeholder="Search something..."
              />
              <button>
                <i class="icon-magnifier"></i>
              </button>
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default Mobile;
