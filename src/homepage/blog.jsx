import React from "react";
const HomeBlog = () => {
  return (
    <div className="ps-section--default ps-home-blog">
      <div className="container">
        <div className="ps-section__header">
          <h3>News</h3>
          <ul className="ps-section__links">
            <li>
              <a href="#0">News</a>
            </li>
            <li>
              <a href="#0">Review Products</a>
            </li>
            <li>
              <a href="#0">Tips & Tricks</a>
            </li>
            <li>
              <a href="#0">Promotions</a>
            </li>
            <li>
              <a href="#0">Videos</a>
            </li>
            <li>
              <a href="#0">See All</a>
            </li>
          </ul>
        </div>
        <div className="ps-section__content">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
              <div className="ps-post">
                <div className="ps-post__thumbnail">
                  <a className="ps-post__overlay" href="blog-detail.html">
                    n
                  </a>
                  <img src="img/blog/organic/1.jpg" alt="" />
                </div>
                <div className="ps-post__content">
                  <a className="ps-post__meta" href="#0">
                    Tips & Tricks
                  </a>
                  <a className="ps-post__title" href="#0">
                    How To Make A Fresh Juice Blended For Your Family?
                  </a>
                  <p>
                    December 17, 2017 by<a href="#0"> drfurion</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
              <div className="ps-post">
                <div className="ps-post__thumbnail">
                  <div className="ps-post__badge">
                    <i className="icon-volume-high"></i>
                  </div>
                  <a className="ps-post__overlay" href="blog-detail.html">
                    n
                  </a>
                  <img src="img/blog/organic/2.jpg" alt="" />
                </div>
                <div className="ps-post__content">
                  <a className="ps-post__meta" href="#0">
                    Review Product
                  </a>
                  <a className="ps-post__title" href="#0">
                    Fresh Eggs From Caroline’s Farm
                  </a>
                  <p>
                    December 17, 2017 by<a href="#0"> drfurion</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
              <div className="ps-post">
                <div className="ps-post__thumbnail">
                  <div className="ps-post__badge">
                    <i className="icon-volume-high"></i>
                  </div>
                  <div className="ps-post__badge">
                    <i className="icon-volume-high"></i>
                  </div>
                  <a className="ps-post__overlay" href="blog-detail.html">
                    n
                  </a>
                  <img src="img/blog/organic/3.jpg" alt="" />
                </div>
                <div className="ps-post__content">
                  <a className="ps-post__meta" href="#0">
                    News
                  </a>
                  <a className="ps-post__title" href="#0">
                    Discover Fresh Organic Farms In Switzeland Villages
                  </a>
                  <p>
                    December 17, 2017 by<a href="#0"> drfurion</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
