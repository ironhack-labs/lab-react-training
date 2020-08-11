import React, { Component } from 'react';
import './IdCard.css';

class IdCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="image">
          <img src={this.props.picture} />
        </div>
        <div className="info">
          <p>
            <b>First Name:</b> {this.props.firstName}
          </p>
          <p>
            <b>Last Name:</b> {this.props.lastName}
          </p>
          <p>
            <b>Gender:</b> {this.props.gender}
          </p>
          <p>
            <b>Height:</b> {this.props.height}
          </p>
          <p>
            <b>Birth:</b> {this.props.birth}
          </p>
        </div>
      </div>
    );
  }
}

export default IdCard;
