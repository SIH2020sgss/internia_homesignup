import React, { Component } from "react";
import "./Infoimages.css";

export class Infoimages extends Component {
  render() {
    return (
      <div className="cell">
        <img src={this.props.path} width="250px"></img>
      </div>
    );
  }
}

export default Infoimages;
