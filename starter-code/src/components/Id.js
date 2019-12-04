import React, { Component } from "react";

import { Card } from "../styles/components";

export default class IdCard extends Component {
  render() {
    return (
      <Card>
        <img src={this.props.picture} alt="papanatas" />
        <div className="id-stats">
          <p>
            <strong>First name:</strong>
            {this.props.firstName}
          </p>
          <p>
            <strong>Last name:</strong>
            {this.props.lastName}
          </p>
          <p>
            <strong>Gender:</strong>
            {this.props.gender}
          </p>
          <p>
            <strong>Height:</strong>
            {this.props.height}
          </p>
          <p>
            <strong>Birth:</strong>
            {this.props.birth}
          </p>
        </div>
      </Card>
    );
  }
}
