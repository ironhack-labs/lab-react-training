import React, { Component } from "react";


export default class NumbersBox extends Component {

  render() {
    const { action, num } = this.props;

    return (
        <div action={action}>
          {num}
        </div>
    );
  }
}