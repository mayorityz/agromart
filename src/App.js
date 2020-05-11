import React from "react";
import TopHeader from "./components/navigation/top-header";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/navigation/footer";
import HomeBanner from "./homepage/banner";
import SiteFeatures from "./homepage/site-features";
import TopCategory from "./homepage/top-categories";
import Promotions from "./homepage/promotions";
import NewArrivals from "./homepage/newarrivals";
import Testimonial from "./homepage/testimonials";
import HomeBlog from "./homepage/blog";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import AboutUS from "./components/frontend/AboutUs";
import ContactUs from "./components/frontend/Contact";
import Category from "./components/frontend/Category";
import Cart from "./components/frontend/Cart";
import CheckOut from "./components/frontend/Checkout";
import Tracking from "./components/frontend/Tracking";
import BeAVendor from "./components/frontend/Vendor";
import Vdashboard from "./components/vendor/Dashboard";
import Details from "./components/frontend/Details";

function App() {
  return (
    <>
      <div className="header header--organic" data-sticky="true">
        <TopHeader />
        <Navigation />
      </div>

      <Switch>
        <Route exact path="/">
          <div id="homepage-9">
            <HomeBanner />
            <SiteFeatures />
            <TopCategory />
            <Promotions />
            <NewArrivals />
            <Testimonial />
            <HomeBlog />
            <Footer />
          </div>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/joinus">
          <NewAccount />
        </Route>
        <Route path="/about-us">
          <AboutUS />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/product-details/:productid">
          <Details />
        </Route>
        <Route path="/product-details">
          <Details />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <CheckOut />
        </Route>
        <Route path="/track-my-order">
          <Tracking />
        </Route>
        <Route path="/be-a-vendor">
          <BeAVendor />
        </Route>
        <Route path="/vendor">
          <Vdashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
