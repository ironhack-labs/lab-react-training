import React, { Component } from 'react';
import './style.scss';
import profiles from './../../data/berlin.json';

class Facebook extends Component {
  render() {
    // const { img, imgClicked } = this.props;

    return (
      <div>
        {profiles.map(profile => {
          let type = profile.isStudent ? 'Student' : 'Teacher';
          return (
            <div key={profile.firstName} className="idCard">
              <img src={profile.img} alt={profile.firstName} />
              <div>
                <p>First Name: {profile.firstName}</p>
                <p>Last Name:{profile.lastName}</p>
                <p>Country:{profile.country}</p>
                <p>Type: {type}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Facebook;
