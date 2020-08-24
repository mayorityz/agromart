import React, { useState, useEffect } from "react";
import { Sugar } from "react-preloaders";
import { get } from "../connect/index";
import * as Links from "../connect/data.json";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  const productsUrl = `${Links.url}/allproducts`;
  const [products, setProducts] = useState([]);
  const [loading, isLoaded] = useState(true);

  useEffect(() => {
    get(productsUrl)
      .then((result) => {
        console.log(result);
        setProducts(result);
        isLoaded(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productsUrl]);

  return (
    <div className="ps-product-list ps-product-list--2">
      <Sugar customLoading={loading} />
      <div className="container">
        <div className="ps-section__header">
          <h3>New Arrivals</h3>
          <ul className="ps-section__links">
            <li>
              <a href="shop-grid.html">Milks & Creams</a>
            </li>
            <li>
              <a href="shop-grid.html">Fruits</a>
            </li>
            <li>
              <a href="shop-grid.html">Vegetables</a>
            </li>
            <li>
              <a href="shop-grid.html">Ocean Foods</a>
            </li>
            <li>
              <a href="shop-grid.html">Fresh Meats</a>
            </li>
            <li>
              <a href="shop-grid.html">View All</a>
            </li>
          </ul>
        </div>
        <div className="ps-section__content">
          <div className="row">
            {products.length === 0 ? (
              <div>No New Items</div>
            ) : null
            // products.map((product) => (
            //   <div
            //     key={product._id}
            //     className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 "
            //   >
            //     <div className="ps-product">
            //       <div className="ps-product__thumbnail">
            //         <a href="product-default.html">
            //           <img src={product.imgUrls[0]} alt="" />
            //         </a>
            //         <ul className="ps-product__actions">
            //           <li>
            //             <a
            //               href="#0"
            //               data-toggle="tooltip"
            //               data-placement="top"
            //               title="Add To Cart"
            //             >
            //               <i className="icon-bag2"></i>
            //             </a>
            //           </li>
            //           <li>
            //             <a
            //               href="#0"
            //               data-toggle="tooltip"
            //               data-placement="top"
            //               title="Details"
            //             >
            //               <i className="icon-eye"></i>
            //             </a>
            //           </li>
            //           <li>
            //             <a
            //               href="#0"
            //               data-toggle="tooltip"
            //               data-placement="top"
            //               title="Add to Whishlist"
            //             >
            //               <i className="icon-heart"></i>
            //             </a>
            //           </li>
            //         </ul>
            //       </div>
            //       <div className="ps-product__container">
            //         <div className="ps-product__content">
            //           <Link
            //             className="ps-product__title"
            //             to={`/product-details/${product._id}`}
            //           >
            //             {product.title}
            //           </Link>
            //           <p className="ps-product__price">₦{product.price}</p>
            //         </div>
            //         <div className="ps-product__content hover">
            //           <Link
            //             className="ps-product__title"
            //             to={`/product-details/${product._id}`}
            //           >
            //             {product.title}
            //           </Link>
            //           <p className="ps-product__price">₦{product.price}</p>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
