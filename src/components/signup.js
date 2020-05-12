import React, { Component } from "react";
import signup1 from "./signup1";
import "./signup.css";

export class signup extends Component {
  render() {
    return (
      <div className="body">
        <div className="bimg">
          <div className="space"></div>
          <div className="content">
            <div className="box">
              <div className="form">
                <signup1 />
              </div>
              <br />
              <p id="text">
                By registering, you agree to the
                <a id="terms" href="/terms">
                  Terms and Conditions.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signup;
