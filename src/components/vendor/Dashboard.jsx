import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// import Footer from "../navigation/footer";
import Dashboard from "./routes/Dashboard";
import Orders from "./routes/Orders";
import VendorSettings from "./routes/Settings";
import VendorProducts from "./routes/Products";
import VendorLogin from "./routes/auth/Login";
import NewVendorAccount from "./routes/auth/Register";
import NewProduct from "./routes/NewProduct";
import jsonwebtoken from "jsonwebtoken";

let userToken = localStorage.getItem("agromartvend");
const verify = (token) => {
  return jsonwebtoken.verify(token, "vendorLoggedIn", (err, res) => {
    if (err) {
      return null;
    }
    return res;
  });
};
let status = verify(userToken);

const Vdashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="ps-page--single">
        <div className="ps-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>Vendor Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="ps-vendor-dashboard">
        <div className="container">
          <div className="ps-section__content">
            <ul className="ps-section__links">
              <li className="active">
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
                <Dashboard status={status} />
              </Route>
              <Route path={`${path}/orders`}>
                <Orders status={status} />
              </Route>
              <Route path={`${path}/settings`}>
                <VendorSettings status={status} />
              </Route>
              <Route path={`${path}/products`}>
                <VendorProducts status={status} />
              </Route>
              <Route path={`${path}/add-product`}>
                <NewProduct status={status} />
              </Route>
              <Route path={`${path}/login`}>
                <VendorLogin />
              </Route>
              <Route path={`${path}/register`}>
                <NewVendorAccount />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Vdashboard;
