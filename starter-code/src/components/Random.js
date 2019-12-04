import React, { Component } from "react";
import { Random } from "../styles/components";
export default class IdCard extends Component {
  render() {
    return (
      <Random>
        <p>
          Random value between {this.props.min} and {this.props.max} =>{" "}
          {Math.floor(
            (this.props.max - this.props.min) * Math.random() + this.props.min
          )}
        </p>
      </Random>
    );
  }
}
