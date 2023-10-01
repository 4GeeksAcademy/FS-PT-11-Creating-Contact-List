import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <Link to="/newcontact">
          <button className="btn btn-primary">Create contact</button>
        </Link>
      </nav>
    </div>
  );
};
