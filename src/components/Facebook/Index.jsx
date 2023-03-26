import './Index.css';
import { Component } from 'react';
import profiles from '../../data/berlin.json';

class Facebook extends Component {
  state = {
    profiles: profiles,
    isStudent: true,
  };

  render() {
    return (
      <div className="Facebook">
        {this.state.profiles.map((profile) => {
          return (
            <div className="profile" key={profile.firstName}>
              <img src={profile.img} alt={profile.firstName} />
              <div className="profile-info">
                <p>
                  <strong>First name:</strong> {profile.firstName}
                </p>
                <p>
                  <strong>Last name:</strong> {profile.lastName}
                </p>
                <p>
                  <strong>Country:</strong> {profile.country}
                </p>
                <p>
                  <strong>Type:</strong>{' '}
                  {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Facebook;
