import React, { Component } from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends Component {
  state = {
    profiles: [...profiles],
  };

  render() {
    return (
      <div className="card">
        {this.state.profiles.map((profile) => (
          <div key={profile.lastName} className="info-profile">
            <img src={profile.img} className="image-profile" alt="" />
            <div className="info-student">
              <p>
                <strong>First name: </strong>
                {profile.firstName}
              </p>
              <p>
                <strong>Last name: </strong>
                {profile.lastName}
              </p>
              <p>
                <strong>Country: </strong>
                {profile.country}
              </p>
              <p>
                <strong>Type: </strong>
                {profile.isStudent}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FaceBook;
