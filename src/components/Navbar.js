import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="top">
          <div className="nav">
            <div className="nav_items">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/">
                About
              </Link>
              <Link className="link" to="/signup">
                Login
              </Link>
              <Link className="link" to="/">
                Internship
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        <div className="header">
          <div className="logo">
            <img
              src="data:image/png;base64,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"
              width="70px"
              alt="Logo"
            ></img>
          </div>
          <div className="title">
            <h1 id="t">Internia</h1>
            <h3 id="subtitle">Your Internship Hub</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
