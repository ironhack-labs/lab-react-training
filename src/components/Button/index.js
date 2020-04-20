import React, { Component } from "react";

export default class Button extends Component {

  render() {
    const {children,onAction} = this.props;
    return <button onClick={onAction}>{children} </button>;
  }
}