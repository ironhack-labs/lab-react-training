import React from 'react';
import profiles from '../data/berlin.json';

const Facebook = () => {
  return (
    <>
      {profiles.map((profile) => (
        <div className="card">
          <img src={profile.img} alt="profile" />
          <div>
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
              <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Facebook;
