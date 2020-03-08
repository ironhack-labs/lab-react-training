import React, { Component } from 'react';
import profiles from './../../data/berlin.json';
import './style.scss';

export default class FaceBook extends Component {
  render() {
    return (
      <div>
        <div className="profileButtons">
          <button>All</button>
          {profiles.map((country, i) => (
            <button key={i}>{country.country}</button>
          ))}
        </div>
        {profiles.map((singleProfile, i) => (
          <div className="profile" key={i}>
            <img src={singleProfile.img} alt={singleProfile.firstName} />
            <div className="notes">
              <h3>
                <strong>First Name: </strong>
                {singleProfile.firstName}
              </h3>
              <h3>
                <strong>Last Name: </strong>
                {singleProfile.lastName}
              </h3>
              <h3>
                <strong>Country: </strong>
                {singleProfile.country}
              </h3>
              <h3>
                <strong>Type: </strong>
                {singleProfile.isStudent ? 'Student' : 'Teacher'}
              </h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
