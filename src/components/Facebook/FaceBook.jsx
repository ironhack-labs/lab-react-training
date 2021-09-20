import React, { Component } from 'react';
import profiles from '../../data/berlin.json';

export class FaceBook extends Component {
  render() {
    return (
      <>
        {profiles.slice(0, 2).map((profile) => {
          return (
            <div key={Math.random()} className="face-box">
              <div>
                <img src={profile.img} alt="" />
              </div>
              <div>
                <h4>First Name: </h4>
                <p>{profile.firstName}</p>
                <br />
                <h4>Last Name: </h4> <p>{profile.lastName}</p>
                <br />
                <h4>Country: </h4>
                <p>{profile.country}</p>
                <br />
                <h4>Type: </h4>
                <p>{profile.isStudent ? 'Student' : 'Teacher'}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default FaceBook;
