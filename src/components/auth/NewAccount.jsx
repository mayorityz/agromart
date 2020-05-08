import React from "react";
import Footer from "../navigation/footer";

const NewAccount = () => {
  return (
    <>
      <div className="ps-page--my-account">
        <div className="ps-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>New Account</li>
            </ul>
          </div>
        </div>
        <div className="ps-my-account">
          <div className="container">
            <form
              className="ps-form--account ps-tab-root"
              action=""
              method="get"
            >
              <div className="ps-tabs">
                <div className="" id="sign-in">
                  <div className="ps-form__content">
                    <h5>Register An Account</h5>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Username or email address"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                      />
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

export default NewAccount;
