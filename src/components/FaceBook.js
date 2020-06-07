import profiles from '../data/berlin.json';
import React, { Component } from 'react';
import './FaceBook.css';

class FaceBook extends Component {
  state = { profiles };
  renderCountryButtons = () => {
    const uniqueCountriesButtons = [...new Set(this.state.profiles.map((profile) => {
      return <button key={profile.country}>{profile.country}</button>
    }))]
   return uniqueCountriesButtons;
  ;}

  render() {
    return (
      <div>
        {this.renderCountryButtons()}
        {this.state.profiles.map((profile) => {
          return (
            <div
              key={profile.firstName + profile.lastName}
              className="FaceBook"
              style={{ display: 'flex' }}
            >
              <div></div>
              <div>
                <img
                  src={profile.img}
                  style={{ objectFit: 'cover' }}
                  width="200"
                  height="200"
                  alt=""
                />
              </div>
              <div style={{ marginLeft: '25px' }}>
                <p>
                  <span>
                    <strong>First name: </strong>
                    {profile.firstName}
                  </span>
                </p>
                <p>
                  <span>
                    <strong>Last name: </strong>
                    {profile.lastName}
                  </span>
                </p>
                <p>
                  <span>
                    <strong>Country: </strong>
                    {profile.country}
                  </span>
                </p>
                <p>
                  <span>
                    <strong>Type: </strong>
                    {profile.isStudent ? 'Student' : 'Teacher'}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FaceBook;
