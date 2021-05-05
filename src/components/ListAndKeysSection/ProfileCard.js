import React, { Component } from 'react';
import './ProfileCard.css';

export default class ProfileCard extends Component {
  render() {
    const { img, firstName, lastName, country, isStudent } = this.props;
    const style = {
      backgroundColor: this.props.active ? 'lightblue' : 'white',
    };
    return (
      <div className="Row" style={style}>
        <img src={img} alt="profile-pic" className="profile-pic" />
        <ul className="detail-list">
          <li>First name: {firstName}</li>
          <li>Last name: {lastName}</li>
          <li>Country: {country}</li>
          <li>Type: {isStudent ? 'Student' : 'Teacher'}</li>
        </ul>
      </div>
    );
  }
}
