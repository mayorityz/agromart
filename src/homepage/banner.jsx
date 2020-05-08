import React from "react";
const HomeBanner = () => {
  return (
    <div className="ps-home-banner">
      <div
        className="ps-carousel--nav-inside owl-slider"
        data-owl-auto="true"
        data-owl-loop="true"
        data-owl-speed="5000"
        data-owl-gap="0"
        data-owl-nav="true"
        data-owl-dots="true"
        data-owl-item="1"
        data-owl-item-xs="1"
        data-owl-item-sm="1"
        data-owl-item-md="1"
        data-owl-item-lg="1"
        data-owl-duration="1000"
        data-owl-mousedrag="on"
        data-owl-animate-in="fadeIn"
        data-owl-animate-out="fadeOut"
      >
        <div
          className="ps-banner--organic"
          data-background="img/slider/home-9/1.jpg"
        >
          <img src="img/slider/home-9/1.jpg" alt="" />
          <div className="ps-banner__content">
            <h4>Weekend Promotions</h4>
            <h3>
              Happy Summer <br /> combo super discount <br /> up to
              <strong>40% Off</strong>
            </h3>
            <a className="ps-btn" href="#0">
              Shop Now
            </a>
          </div>
        </div>
        <div
          className="ps-banner--organic"
          data-background="img/slider/home-9/2.jpg"
        >
          <img src="img/slider/home-9/2.jpg" alt="" />
          <div className="ps-banner__content">
            <h4>Weekend Promotions</h4>
            <h3>
              Fresh vegetables & <br /> fruits basket <br /> up to
              <strong>40% Off</strong>
            </h3>
            <a className="ps-btn" href="#0">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
