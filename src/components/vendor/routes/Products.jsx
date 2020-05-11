import React, { useState, useEffect } from "react";
import { Sugar } from "react-preloaders";
import { Link } from "react-router-dom";
const VendorProducts = ({ status }) => {
  const [state_, setState_] = useState(false);
  useEffect(() => {
    if (!status) window.location = "./login";
    else setState_(true);
  }, [status]);
  return (
    <>
      <Sugar customLoading={state_} />
      <div className="alert alert-success text-center">
        <Link to="./add-product">Create A New Product</Link>
      </div>
      <h4>Vendor Products</h4>
    </>
  );
};

export default VendorProducts;
