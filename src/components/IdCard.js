import React, { Component } from 'react';
import './IdCard.css';

export default class IdCard extends Component {
  render() {
    return (
      <>
        <div className="id-card">
          <img src={this.props.picture} />
          <div>
            <ul>
              <li>
                <strong>First Name:</strong> {this.props.firstName}
              </li>
              <li>
                <strong>Last Name:</strong> {this.props.lastName}
              </li>
              <li>
                <strong>Gender:</strong> {this.props.gender}
              </li>
              <li>
                <strong>Height:</strong> {this.props.height}
              </li>
              <li>
                <strong>Birth:</strong> {this.props.birth.toLocaleDateString()}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
