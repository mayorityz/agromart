import React, { useState } from "react";
import * as links from "../../../../connect/data.json";
import { post } from "../../../../connect/index";
import Footer from "../../../navigation/footer";
import { Link } from "react-router-dom";

const VendorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const url = `${links.url}/login`;
  const submitForm = (e) => {
    e.preventDefault();
    setMsg("Please wait!!");
    post(url, { email, password }).then((res) => {
      if (res.success) {
        setMsg("Login Successful, Please Wait!!!");
        window.location = "/";
      } else {
        setMsg(res.msg);
      }
    });
  };
  return (
    <>
      <div className="ps-page--my-account">
        <div className="ps-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Login</li>
            </ul>
          </div>
        </div>
        <div className="ps-my-account">
          <div className="container">
            <a href="#sign-in">Login</a>
            <form
              className="ps-form--account ps-tab-root"
              onSubmit={submitForm}
            >
              <div className="ps-tabs">
                <div className="" id="sign-in">
                  <div className="ps-form__content">
                    <h5>Log In Your Account</h5>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={({ target }) => {
                          setEmail(target.value);
                        }}
                      />
                    </div>
                    <div className="form-group form-forgot">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={({ target }) => {
                          setPassword(target.value);
                        }}
                      />
                      <a href="#0">Forgot?</a>
                    </div>
                    <div className="form-group">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="remember-me"
                          name="remember-me"
                        />
                        <label htmlFor="remember-me">Rememeber me</label>
                      </div>
                    </div>
                    <div className="form-group submtit">
                      <button className="ps-btn ps-btn--fullwidth">
                        Login
                      </button>
                    </div>
                    <hr />
                    {msg ? (
                      <div className="alert alert-success">{msg}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VendorLogin;
