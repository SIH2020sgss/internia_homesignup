import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import InternImp from "./components/InternImp";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Navbar />
                <div className="body">
                  <div className="bimg"></div>
                  <InternImp />
                </div>
              </React.Fragment>
            )}
          ></Route>
        </Router>
      </div>
    );
  }
}

export default App;
