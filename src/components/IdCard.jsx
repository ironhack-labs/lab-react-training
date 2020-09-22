import React, { Component } from 'react';

export default class IdCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.picture} alt="" />
        <div className="details-section">
          <strong>First Name:</strong> {this.props.firstName}
          <br />
          <strong>Last Name:</strong> {this.props.lastName}
          <br />
          <strong>Gender:</strong> {this.props.gender}
          <br />
          <strong>Height:</strong> {this.props.height}
          <br />
          <strong>Birth:</strong> {this.props.birth.toDateString()}
        </div>
      </div>
    );
  }
}
