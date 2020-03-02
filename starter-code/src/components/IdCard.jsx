import React, { Component } from 'react';
import './IdCard.css';

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div className="id-card">
        <div className="id-img">
          <img src={picture} alt={firstName} />
        </div>
        <div className="id-info">
          <strong>First Name:</strong> {firstName} <br />
          <strong>Last Name:</strong> {lastName} <br />
          <strong>Gender:</strong> {gender} <br />
          <strong>Height:</strong> {height} <br />
          <strong>Birth:</strong> {birth.toDateString()} <br />
        </div>
      </div>
    );
  }
}

export default IdCard;
