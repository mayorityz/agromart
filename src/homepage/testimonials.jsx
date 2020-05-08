import React from "react";

const Testimonial = () => {
  return (
    <div
      className="ps-client-say bg--cover"
      data-background="img/bg/testimonial-organic.jpg"
    >
      <div className="container">
        <div className="ps-section__header">
          <h3>What client say</h3>
          <div className="ps-section__nav">
            <a className="ps-carousel__prev" href="-2.html">
              <i className="icon-chevron-left"></i>
            </a>
            <a className="ps-carousel__next" href="-2.html">
              <i className="icon-chevron-right"></i>
            </a>
          </div>
        </div>
        <div className="ps-section__content">
          <div
            className="ps-carousel--testimonials owl-slider"
            data-owl-auto="true"
            data-owl-loop="true"
            data-owl-speed="10000"
            data-owl-gap="30"
            data-owl-nav="false"
            data-owl-dots="false"
            data-owl-item="2"
            data-owl-item-xs="1"
            data-owl-item-sm="1"
            data-owl-item-md="1"
            data-owl-item-lg="2"
            data-owl-duration="1000"
            data-owl-mousedrag="on"
          >
            <div className="ps-block--testimonial">
              <div className="ps-block__header">
                <img src="img/users/1.jpg" alt="" />
              </div>
              <div className="ps-block__content">
                <i className="icon-quote-close"></i>
                <h4>
                  Kanye West<span>Head Chef at BBQ Restaurant</span>
                </h4>
                <p>
                  Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at
                  magna akal semperFusce commodo molestie luctus.Lorem ipsum
                  Dolor tusima olatiup.
                </p>
              </div>
            </div>
            <div className="ps-block--testimonial">
              <div className="ps-block__header">
                <img src="img/users/2.png" alt="" />
              </div>
              <div className="ps-block__content">
                <i className="icon-quote-close"></i>
                <h4>
                  Anabella Kleva<span>Boss at TocoToco</span>
                </h4>
                <p>
                  Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at
                  magna akal semperFusce commodo molestie luctus.Lorem ipsum
                  Dolor tusima olatiup.
                </p>
              </div>
            </div>
            <div className="ps-block--testimonial">
              <div className="ps-block__header">
                <img src="img/users/3.jpg" alt="" />
              </div>
              <div className="ps-block__content">
                <i className="icon-quote-close"></i>
                <h4>
                  William Roles<span>Head Chef at BBQ Restaurant</span>
                </h4>
                <p>
                  Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at
                  magna akal semperFusce commodo molestie luctus.Lorem ipsum
                  Dolor tusima olatiup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
