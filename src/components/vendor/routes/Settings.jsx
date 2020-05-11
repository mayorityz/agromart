import React, { useState, useEffect } from "react";
import { Sugar } from "react-preloaders";
const VendorSettings = ({ status }) => {
  const [state_, setState_] = useState(false);
  useEffect(() => {
    if (!status) window.location = "./login";
    else setState_(true);
  }, [status]);
  return (
    <>
      <Sugar customLoading={state_} />
      <h4>Seettings</h4>
    </>
  );
};

export default VendorSettings;
