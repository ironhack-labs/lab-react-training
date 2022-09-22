import React from 'react';
import './Facebook.css';
import profiles from '../../data/berlin.json';

const Facebook = () => {
  console.log(profiles);
  const allProfiles = profiles;
  return (
    <div>
      {allProfiles.map((newProfile, index) => {
        return (
          <div className="fbcard fbbox" key={(newProfile.lastName, index)}>
            <img
              src={newProfile.img}
              alt="fb-profile-img"
              className="fb-profile-img"
            />
            <div className="fb-profile-info">
              <p>
                <strong>Firstname:</strong>
                {newProfile.firstName}
              </p>
              <p>
                <strong>Lastname:</strong>
                {newProfile.lastName}
              </p>
              <p>
                <strong>Country:</strong>
                {newProfile.country}
              </p>
              <p>
                <strong>Type:</strong>
                {newProfile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Facebook;
