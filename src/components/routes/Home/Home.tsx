import "./Home.scss";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      toast.warning(`Page loading is still ${loading}`);
    } else {
      toast.success("Page loaded successfully");
    }
  });

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <div className="main">
      <div className="my-3">
        <h3>
          <FormattedMessage id="home.title" />
        </h3>
      </div>
      <div>
        <button className="btn btn-dark" onClick={toggleLoading}>
          Toggle loading
        </button>
      </div>
    </div>
  );
};

export default Home;
