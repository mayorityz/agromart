import React from "react";
import Aside from "./components/Sidebar";
import Footer from "../navigation/footer";

const Category = () => {
  return (
    <>
      <div class="ps-breadcrumb">
        <div class="ps-container">
          <ul class="breadcrumb">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>Category</li>
          </ul>
        </div>
      </div>
      <div class="ps-page--shop" id="shop-sidebar">
        <div class="container">
          <div class="ps-layout--shop">
            <Aside />
            <div class="ps-layout__right">
              <div class="ps-shopping ps-tab-root">
                <div class="ps-shopping__header">
                  <p>
                    <strong> 36</strong> Products found
                  </p>
                </div>
              </div>
              {/* products */}
              <div class="ps-tabs">
                <div class="ps-tab active" id="tab-1">
                  <div class="ps-shopping-product">
                    <div class="row">
                      <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                        <div class="ps-product">
                          <div class="ps-product__thumbnail">
                            <a href="product-default.html">
                              <img src="img/products/shop/1.jpg" alt="" />
                            </a>
                            <ul class="ps-product__actions">
                              <li>
                                <a
                                  href="#0"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Read More"
                                >
                                  <i class="icon-bag2"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#0"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Quick View"
                                >
                                  <i class="icon-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#0"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Add to Whishlist"
                                >
                                  <i class="icon-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#0"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Compare"
                                >
                                  <i class="icon-chart-bars"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="ps-product__container">
                            <a class="ps-product__vendor" href="#0">
                              ROBERT’S STORE
                            </a>
                            <div class="ps-product__content">
                              <a
                                class="ps-product__title"
                                href="product-default.html"
                              >
                                Apple iPhone Retina 6s Plus 64GB
                              </a>
                              <p class="ps-product__price">$1310.00</p>
                            </div>
                            <div class="ps-product__content hover">
                              <a
                                class="ps-product__title"
                                href="product-default.html"
                              >
                                Apple iPhone Retina 6s Plus 64GB
                              </a>
                              <p class="ps-product__price">$1310.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* products */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
