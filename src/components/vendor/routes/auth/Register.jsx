import React, { useState } from "react";
import * as links from "../../../../connect/data.json";
import { post } from "../../../../connect/index";
import Footer from "../../../navigation/footer";

const NewVendorAccount = () => {
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [password, setPassword] = useState("");
  const url = `${links.url}/vendor/newaccount`;
  const submitForm = (e) => {
    e.preventDefault();
    setMsg("please wait!");
    post(url, { firstName, lastName, email, pass1: password }).then((res) => {
      if (res.success) {
        setMsg("Vendor Account Created Successfully");
      } else {
        setMsg(res.errors[0].msg);
      }
    });
  };

  return (
    <>
      <div className="ps-page--my-account">
        <div className="ps-my-account">
          <div className="container">
            <form
              className="ps-form--account ps-tab-root"
              onSubmit={submitForm}
            >
              <div className="ps-tabs">
                <div className="" id="sign-in">
                  <div className="ps-form__content">
                    <h5>Create Vendor Account</h5>

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

export default NewVendorAccount;
