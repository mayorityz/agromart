import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sugar } from "react-preloaders";
import { useParams } from "react-router-dom";
import { get } from "../../connect/index";
import * as Links from "../../connect/data.json";
import Footer from "../navigation/footer";

const Details = () => {
  let { productid } = useParams();
  const url = `${Links.url}/productdetails/${productid}`;
  const [product, setProduct] = useState([]);
  const [loading, isLoaded] = useState(true);

  useEffect(() => {
    get(url)
      .then((res) => {
        if (res.status === "success") {
          console.log("loading ...");
          console.log(res.result[0]);
          setProduct(res.result[0]);
          isLoaded(false);
        } else {
          // product not found!
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <>
      <Sugar customLoading={loading} />
      <div className="ps-breadcrumb">
        <div className="ps-container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Product Title</Link>
            </li>
            <li>{product.title}</li>
          </ul>
        </div>
      </div>
      <div className="ps-page--product">
        <div className="ps-container">
          <div className="ps-page__container">
            <div className="ps-page__left">
              <div className="ps-product--detail ps-product--fullwidth">
                <div className="ps-product__header">
                  <div className="ps-product__thumbnail" data-vertical="true">
                    <figure>
                      <div className="ps-wrapper">
                        <div className="ps-product__gallery" data-arrow="true">
                          {product.length === 0
                            ? null
                            : product.imgUrls.map((p, i) => (
                                <div className="item" key={i}>
                                  <a href={p}>
                                    <img src={p} alt="" />
                                  </a>
                                </div>
                              ))}
                        </div>
                      </div>
                    </figure>
                    <div
                      className="ps-product__variants"
                      data-item="4"
                      data-md="4"
                      data-sm="4"
                      data-arrow="false"
                    >
                      {product.length === 0
                        ? null
                        : product.imgUrls.map((p, i) => (
                            <div className="item" key={i}>
                              <img src={p} alt="" />
                            </div>
                          ))}
                    </div>
                  </div>
                  {/*  */}
                  <div className="ps-product__info">
                    <h1>{product.title}</h1>
                    <div className="ps-product__meta">
                      <div className="ps-product__rating">
                        <span>(0 review)</span>
                      </div>
                    </div>
                    <h4 className="ps-product__price">₦{product.price}</h4>
                    <div className="ps-product__desc">
                      <p>
                        Sold By:
                        <a href="#0">
                          <strong> ... loading</strong>
                        </a>
                      </p>
                    </div>
                    <div className="ps-product__variations">
                      <p>
                        Rates : {product.quantity} per {product.measurement} @ ₦
                        {product.price}.
                      </p>
                      <p>Category : {product.category}.</p>
                    </div>
                    <div className="ps-product__shopping">
                      <figure>
                        <figcaption>Quantity</figcaption>
                        <div className="form-group--number">
                          <button className="up">
                            <i className="fa fa-plus"></i>
                          </button>
                          <button className="down">
                            <i className="fa fa-minus"></i>
                          </button>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="1"
                          />
                        </div>
                      </figure>
                      <a className="ps-btn ps-btn--black" href="#0">
                        Add to cart
                      </a>
                      <a className="ps-btn" href="#0">
                        Buy Now
                      </a>
                      <div className="ps-product__actions">
                        <a href="#0">
                          <i className="icon-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-product__specification">
                      <a className="report" href="#0">
                        Report Abuse
                      </a>
                      <p>
                        <strong>SKU:</strong> SF1133569600-1
                      </p>
                    </div>
                    <div className="ps-product__sharing">
                      <a className="facebook" href="#0">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a className="twitter" href="#0">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a className="google" href="#0">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a className="linkedin" href="#0">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a className="instagram" href="#0">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  {/*  */}
                </div>
                {/* tabs */}
                <div className="ps-product__content ps-tab-root">
                  <ul className="ps-tab-list">
                    <li className="active">
                      <a href="#tab-1">Description</a>
                    </li>
                    <li>
                      <a href="#tab-4">Reviews (1)</a>
                    </li>
                  </ul>
                  <div className="ps-tabs">
                    <div className="ps-tab active" id="tab-1">
                      <div className="ps-document">
                        <p>{product.description}</p>
                      </div>
                    </div>
                    <div className="ps-tab" id="tab-4">
                      <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
                          <div className="ps-block--average-rating">
                            <div className="ps-block__header">
                              <div>
                                <h6>Oz Chuks</h6>
                                <p>Good Product ...</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
                          <form
                            className="ps-form--review"
                            action="#"
                            method="get"
                          >
                            <h4>Submit Your Review</h4>
                            <p>
                              Your email address will not be published. Required
                              fields are marked<sup>*</sup>
                            </p>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                rows="6"
                                placeholder="Write your review here"
                              ></textarea>
                            </div>
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Your Name"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Your Email"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group submit">
                              <button className="ps-btn">Submit Review</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of tabs */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
