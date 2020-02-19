import React, { Component } from "react";

class idCard extends Component {
  constructor(props) {
    super(props);

    this.lastName = String;
    this.firstName = String;
    this.gender = String;
    this.height = Number;
    this.birth = Date;
    this.picture = String;
  }

  render() {
    return (
      <div className="Flex">
        <div className="imgCard">
          <img src={this.props.picture} alt="" />
        </div>
        <div>
          <p>
            <strong>First Name : </strong> {this.props.firstName}
          </p>
          <p>
            <strong>Last Name : </strong> {this.props.lastName}
          </p>
          <p>
            <strong>Gender : </strong> {this.props.gender}
          </p>
          <p>
            <strong>Height : </strong> {this.props.height}
          </p>
          <p>
            <strong>Birth : </strong> {this.props.birth.toDateString()}
          </p>
        </div>
      </div>
    );
  }
}

export default idCard;
