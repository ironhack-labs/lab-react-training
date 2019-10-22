import React, { Component } from "react";

export default class IdCard extends Component {
  render() {
    return (
      <div className="IdCard">
        <img src={this.props.picture} />
        <div>
          <strong>First name</strong>: {this.props.firstName} <br />
          <strong>Last name</strong>: {this.props.lastName} <br />
          <strong>gender</strong>: {this.props.gender} <br />
          <strong>height</strong>: {this.props.height} <br />
          <strong>birth</strong>: {this.props.birth.getFullYear()}
        </div>
      </div>
    );
  }
}
