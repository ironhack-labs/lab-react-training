import React from 'react';
import './Facebook.css';
import profiles from '../../data/berlin.json';

export default class FaceBook extends React.Component {
  render() {
    return [...profiles].map(function (profile, i) {
      return (
        <div className="Card">
          <div className="UserImage">
            <img className="Image" src={profile.img} />
          </div>
          <div className="UserInfo">
            <div className="userinfo-container">
              <span className="label">First Name: </span>
              <span className="data">{profile.firstName}</span>
            </div>
            <div className="userinfo-container">
              <span className="label">Last Name: </span>
              <span className="data">{profile.lastName}</span>
            </div>
            <div className="userinfo-container">
              <span className="label">Country: </span>
              <span className="data">{profile.country}</span>
            </div>
            <div className="userinfo-container">
              <span className="label">Type: </span>
              <span className="data">
                {profile.isStudent ? 'Student' : 'Teacher'}
              </span>
            </div>
          </div>
        </div>
      );
    });
  }
}


