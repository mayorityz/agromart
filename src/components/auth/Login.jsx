import React from "react";
import Footer from "../navigation/footer";

const Login = () => {
  return (
    <>
      <div className="ps-page--my-account">
        <div className="ps-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="index-2.html">Home</a>
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
              action=""
              method="get"
            >
              <div className="ps-tabs">
                <div className="" id="sign-in">
                  <div className="ps-form__content">
                    <h5>Log In Your Account</h5>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Username or email address"
                      />
                    </div>
                    <div className="form-group form-forgot">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
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
                        <label for="remember-me">Rememeber me</label>
                      </div>
                    </div>
                    <div className="form-group submtit">
                      <button className="ps-btn ps-btn--fullwidth">
                        Login
                      </button>
                    </div>
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

export default Login;
