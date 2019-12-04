import React, { Component } from "react";
import { Box } from "../styles/components";
export default class Great extends Component {
  render() {
    return (
      <Box
        style={{
          "background-color": `rgb(${this.props.r}, ${this.props.g}, ${this.props.b}`
        }}
      />
    );
  }
}
