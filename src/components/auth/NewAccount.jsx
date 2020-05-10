import React, { useState, useEffect } from "react";
import * as links from "../../connect/data.json";
import { post } from "../../connect/index";
import Footer from "../navigation/footer";

const NewAccount = () => {
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [password, setPassword] = useState("");
  const url = `${links.url}/newuser`;
  const submitForm = (e) => {
    e.preventDefault();
    post(url, { firstName, lastName, email, pass1: password }).then((res) => {
      if (res.success) {
        setMsg(res.success);
      } else {
        setMsg(res.errors[0].msg);
      }
    });
  };

  useEffect(() => {}, [url]);

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
              onSubmit={submitForm}
            >
              <div className="ps-tabs">
                <div className="" id="sign-in">
                  <div className="ps-form__content">
                    <h5>Register An Account</h5>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={({ target }) => {
                          setFN(target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={({ target }) => {
                          setLN(target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={({ target }) => {
                          setEmail(target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={({ target }) => {
                          setPassword(target.value);
                        }}
                      />
                    </div>
                    <div className="form-group submtit">
                      <button className="ps-btn ps-btn--fullwidth">
                        Join Us
                      </button>
                      <hr />
                      {msg ? (
                        <div className="alert alert-success text-center">
                          {msg}
                        </div>
                      ) : null}
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
