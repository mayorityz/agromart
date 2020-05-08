import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Footer from "../navigation/footer";
import Dashboard from "./routes/Dashboard";
import Orders from "./routes/Orders";
import VendorSettings from "./routes/Settings";
import VendorProducts from "./routes/Products";

const Vdashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div class="ps-page--single">
        <div class="ps-breadcrumb">
          <div class="container">
            <ul class="breadcrumb">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>Vendor Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div class="ps-vendor-dashboard">
        <div class="container">
          <div class="ps-section__content">
            <ul class="ps-section__links">
              <li class="active">
                <Link to={`${url}`}>Dashboard</Link>
              </li>
              <li>
                <Link to={`${url}/products`}>Products</Link>
              </li>
              <li>
                <Link to={`${url}/orders`}>Order</Link>
              </li>
              <li>
                <Link to={`${url}/settings`}>Setting</Link>
              </li>
              <li>
                <Link to="./mystore">View Store</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path={path}>
                <Dashboard />
              </Route>
              <Route path={`${path}/orders`}>
                <Orders />
              </Route>
              <Route path={`${path}/settings`}>
                <VendorSettings />
              </Route>
              <Route path={`${path}/products`}>
                <VendorProducts />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vdashboard;
