import React, { Component } from "react";

export default class IdCard extends Component {
  render() {
    return (
      <div>
        <h1>
          First Name: {this.props.firstName} <br />
          Last Name: {this.props.lastName} <br />
          Gender: {this.props.gender} <br />
          Height: {this.props.height} <br />
          {/* Birth: {this.props.birth} */}
        </h1>
      </div>
    );
  }
}
