import React, { Component } from 'react';

class IdCard extends Component {
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  months = [
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

  render() {
    console.log('coucou');
    return (
      <div className="idCard">
        <img src="{this.picture}" alt="Profile picture" />
        <div className="idText">
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
            <span>Heigtht: </span>
            {this.props.height / 100}m
          </p>
          <p>
            <span>Birth: </span>
            {days[this.props.birth.getDay()] +
              ' ' +
              months[this.props.birth.getMonth() + 1] +
              ' ' +
              this.props.birth.getDate() +
              ' ' +
              this.props.birth.getFullYear()}
          </p>
        </div>
      </div>
    );
  }
}

// export default IdCard;
