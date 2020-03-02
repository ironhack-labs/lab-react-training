import React, { Component } from 'react';
import './style.scss';

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div className="idCard">
        <div>
          <img src={picture} alt="oi" />
        </div>
        <div>
          <p>
            <strong>First Name</strong>: {firstName}
          </p>
          <p>
            <strong>Last Name</strong>: {lastName}
          </p>
          <p>
            <strong>Gender</strong>: {gender}
          </p>
          <p>
            <strong>Height</strong>: {height}
          </p>
          <p>
            <strong>Birth</strong>: {birth}
          </p>
        </div>
      </div>
    );
  }
}

export default IdCard;
