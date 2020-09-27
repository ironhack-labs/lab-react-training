import React, { Component } from 'react';
import profiles from '../data/berlin.json';

export default class Facebook extends Component {
  state = {
    profilesArr: profiles,
  };

  render() {
    return (
      <div>
        {this.state.profilesArr.map((profile, idx) => {
          return (
            <div className='profiles-container'>

            <div key={idx} className="profile-card">
              <img
                style={{ width: '200px' }}
                src={profile.img}
                alt="profile-pic"
              />

              <div className="profile-details">
                <p>
                  <strong>First name:</strong> <span> {profile.firstName}</span>
                </p>
                <p>
                  <strong>Last name:</strong> <span> {profile.lastName}</span>
                </p>
                <p>
                  <strong> Country: </strong> <span> {profile.country}</span>
                </p>
                {profile.isStudent && (
                  <p>
                    <strong>Type:</strong> <span> Student</span>
                  </p>
                )}
                {!profile.isStudent && (
                  <p>
                    <strong> Type: </strong> <span>Teacher</span>
                  </p>
                )}
              </div>
            </div>

            </div>
          );
        })}
      </div>
    );
  }
}
