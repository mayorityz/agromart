import React, { Component } from "react";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <nav className="navigation">
        <div className="container">
          <div className="navigation__left">
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
          </div>
          <div className="navigation__right">
            <ul className="menu menu--organic">
              <li className="current-menu-item menu-item-has-children">
                <a href="index-2.html">Home</a>
                <span className="sub-toggle"></span>
                <ul className="sub-menu">
                  <li>
                    <a href="index-2.html">Marketplace Full Width</a>
                  </li>
                  <li>
                    <a href="homepage-2.html">Home Auto Parts</a>
                  </li>
                  <li>
                    <a href="homepage-10.html">Home Technology</a>
                  </li>
                  <li>
                    <a href="homepage-9.html">Home Organic</a>
                  </li>
                  <li>
                    <a href="homepage-3.html">Home Marketplace V1</a>
                  </li>
                  <li>
                    <a href="homepage-4.html">Home Marketplace V2</a>
                  </li>
                  <li>
                    <a href="homepage-5.html">Home Marketplace V3</a>
                  </li>
                  <li>
                    <a href="homepage-6.html">Home Marketplace V4</a>
                  </li>
                  <li>
                    <a href="homepage-7.html">Home Electronic</a>
                  </li>
                  <li>
                    <a href="homepage-8.html">Home Furniture</a>
                  </li>
                  <li>
                    <a href="homepage-kids.html">Home Kids</a>
                  </li>
                  <li>
                    <a href="homepage-photo-and-video.html">
                      Home photo and picture
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children has-mega-menu">
                <a href="shop-default.html">Shop</a>
                <span className="sub-toggle"></span>
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>
                      Catalog Pages<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="shop-default.html">Shop Default</a>
                      </li>
                      <li>
                        <a href="shop-default.html">Shop Fullwidth</a>
                      </li>
                      <li>
                        <a href="shop-categories.html">Shop Categories</a>
                      </li>
                      <li>
                        <a href="shop-sidebar.html">Shop Sidebar</a>
                      </li>
                      <li>
                        <a href="shop-sidebar-without-banner.html">
                          Shop Without Banner
                        </a>
                      </li>
                      <li>
                        <a href="shop-carousel.html">Shop Carousel</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>
                      Product Layout<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="product-default.html">Default</a>
                      </li>
                      <li>
                        <a href="product-extend.html">Extended</a>
                      </li>
                      <li>
                        <a href="product-full-content.html">Full Content</a>
                      </li>
                      <li>
                        <a href="product-box.html">Boxed</a>
                      </li>
                      <li>
                        <a href="product-sidebar.html">Sidebar</a>
                      </li>
                      <li>
                        <a href="product-default.html">Fullwidth</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>
                      Product Types<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="product-default.html">Simple</a>
                      </li>
                      <li>
                        <a href="product-default.html">Color Swatches</a>
                      </li>
                      <li>
                        <a href="product-image-swatches.html">
                          Images Swatches
                        </a>
                      </li>
                      <li>
                        <a href="product-countdown.html">Countdown</a>
                      </li>
                      <li>
                        <a href="product-multi-vendor.html">Multi-Vendor</a>
                      </li>
                      <li>
                        <a href="product-instagram.html">Instagram</a>
                      </li>
                      <li>
                        <a href="product-affiliate.html">Affiliate</a>
                      </li>
                      <li>
                        <a href="product-on-sale.html">On sale</a>
                      </li>
                      <li>
                        <a href="product-video.html">Video Featured</a>
                      </li>
                      <li>
                        <a href="product-groupped.html">Grouped</a>
                      </li>
                      <li>
                        <a href="product-out-stock.html">Out Of Stock</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>
                      Woo Pages<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="shopping-cart.html">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="whishlist.html">Whishlist</a>
                      </li>
                      <li>
                        <a href="compare.html">Compare</a>
                      </li>
                      <li>
                        <a href="order-tracking.html">Order Tracking</a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-item-has-children has-mega-menu">
                <a href="#0">Pages</a>
                <span className="sub-toggle"></span>
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>
                      Basic Page<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact</a>
                      </li>
                      <li>
                        <a href="faqs.html">Faqs</a>
                      </li>
                      <li>
                        <a href="comming-soon.html">Comming Soon</a>
                      </li>
                      <li>
                        <a href="404-page.html">404 Page</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>
                      Vendor Pages<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="become-a-vendor.html">Become a Vendor</a>
                      </li>
                      <li>
                        <a href="vendor-store.html">Vendor Store</a>
                      </li>
                      <li>
                        <a href="vendor-dashboard-free.html">
                          Vendor Dashboard Free
                        </a>
                      </li>
                      <li>
                        <a href="vendor-dashboard-pro.html">
                          Vendor Dashboard Pro
                        </a>
                      </li>
                      <li>
                        <a href="store-list.html">Store List</a>
                      </li>
                      <li>
                        <a href="store-list.html">Store List 2</a>
                      </li>
                      <li>
                        <a href="store-detail.html">Store Detail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-item-has-children has-mega-menu">
                <a href="#0">Blogs</a>
                <span className="sub-toggle"></span>
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>
                      Blog Layout<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="blog-grid.html">Grid</a>
                      </li>
                      <li>
                        <a href="blog-list.html">Listing</a>
                      </li>
                      <li>
                        <a href="blog-small-thumb.html">Small Thumb</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html">Right Sidebar</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>
                      Single Blog<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="blog-detail.html">Single 1</a>
                      </li>
                      <li>
                        <a href="blog-detail-2.html">Single 2</a>
                      </li>
                      <li>
                        <a href="blog-detail-3.html">Single 3</a>
                      </li>
                      <li>
                        <a href="blog-detail-4.html">Single 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <div className="ps-block--header-hotline inline">
              <p>
                <i className="icon-telephone"></i>Hotline:
                <strong> 1-800-234-5678</strong>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
