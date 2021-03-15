import React, { Component } from 'react';

export default class Id extends Component {
  render() {
    const { firstName, lastName, gender, height, birth, picture } = this.props;
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return (
      <div className="idCard">
        <img src={picture} alt="Profile" />
        <div className="idText">
          <p>
            <span>First Name: </span>
            {firstName}
          </p>
          <p>
            <span>Last Name: </span>
            {lastName}
          </p>
          <p>
            <span>Gender: </span>
            {gender}
          </p>
          <p>
            <span>Heigtht: </span>
            {height / 100}m
          </p>
          <p>
            <span>Birth: </span>
            {days[birth.getDay()] +
              ' ' +
              months[birth.getMonth() + 1] +
              ' ' +
              birth.getDate() +
              ' ' +
              birth.getFullYear()}
          </p>
        </div>
      </div>
    );
  }
}
