import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>This is out term and conditions</h2>
      <h5>
        Go to <Link to="/register">Register</Link>
      </h5>
    </div>
  );
};

export default Terms;
