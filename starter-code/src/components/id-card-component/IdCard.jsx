import React, { Component } from "react";

export default class IdCard extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.picture} alt={this.props.name} />
        </div>
        <div>
          <p>
            <span>First Name: </span>
            {this.props.firstName}
          </p>
          <p>
            <span>Last Name: </span>
            {this.props.lastName}
          </p>
          <p>
            <span>Gender: </span>
            {this.props.gender}
          </p>
          <p>
            <span>Height: </span>
            {this.props.height / 100}m
          </p>
          <p>
            <span>Birth: </span>
            {this.props.birth.toDateString()}
          </p>
        </div>
      </div>
    );
  }
}
