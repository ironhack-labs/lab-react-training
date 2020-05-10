//Iteration 1 | Component: IdCard

import React, { Component } from "react";

class IdCard extends Component {
  render() {
    return (
      <div>
        <p>First Name: {this.props.firstName} </p>
        <p>Last Name: {this.props.lastName} </p>
        <p>Gender: {this.props.gender} </p>
        <p>Height: {this.props.height} </p>
        <p>Birth: {this.props.birth} </p>
        <p>Picture: {this.props.picture}</p>
      </div>
    );
  }
}

export default IdCard;
