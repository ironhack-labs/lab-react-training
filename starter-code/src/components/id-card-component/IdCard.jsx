import React, { Component } from "react";

export default class IdCard extends Component {
  constructor(props) {
    super(props);

    this.flexBox = {
      display: "flex",
      border: "1px solid black",
      alignItems: "center"
    };
  }
  render() {
    return (
      <div style={this.flexBox}>
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
            <span>Type: </span>
            {this.props.type}
          </p>
          <p>
            <span>Country: </span>
            {this.props.country}
          </p>
          {/* <p>
            <span>Birth: </span>
            {this.props.birth.toDateString()}
          </p> */}
        </div>
      </div>
    );
  }
}
