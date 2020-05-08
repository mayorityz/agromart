import React from "react";
import Footer from "../navigation/footer";

const AboutUS = () => {
  return (
    <>
      <div className="ps-breadcrumb">
        <div className="container">
          <ul class="breadcrumb">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div class="ps-page--single" id="about-us">
        <img src="img/bg/about-us.jpg" alt="" />
      </div>

      <div className="ps-about-intro">
        <div className="container">
          <div className="ps-section__header">
            <h4>Welcome to Martfury</h4>
            <h3>
              We connect millions of buyers and sellers around the world,
              empowering people & creating economic opportunity for all.
            </h3>
            <p>
              Within our markets, millions of people around the world connect,
              both online and offline, to make, sell and buy unique goods. We
              also offer a wide range of Seller Services and tools that help
              creative entrepreneurs start, manage and scale their businesses.
              Our mission is to reimagine commerce in ways that build a more
              fulfilling and lasting world, and we’re committed to using the
              power of business to strengthen communities and empower people.
            </p>
          </div>
          <div className="ps-section__content">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                <div className="ps-block--icon-box">
                  <i className="icon-cube"></i>
                  <h4>45M</h4>
                  <p>Product for sale</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                <div className="ps-block--icon-box">
                  <i className="icon-store"></i>
                  <h4>1.8M</h4>
                  <p>Sellers Active on Martfury</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                <div className="ps-block--icon-box">
                  <i className="icon-bag2"></i>
                  <h4>30.6M</h4>
                  <p>Buyer active on Martfury</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                <div className="ps-block--icon-box">
                  <i className="icon-cash-dollar"></i>
                  <h4>$2.46M</h4>
                  <p>Annual gross merchandise sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUS;
