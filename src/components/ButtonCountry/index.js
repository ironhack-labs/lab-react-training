import React, { Component } from "react";

export default class ButtonCountry extends Component {

  render() {
    const {children,selectCuntry} = this.props;
    return <button onClick={()=>selectCuntry({children})}>{children} </button>;
  }
}