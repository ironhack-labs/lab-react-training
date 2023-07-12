import React from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
  return (
    <div>
      <div>
        {profiles.map((profile) => (
          <div className="facebook">
            <div>
              <img className="facebook-img" src={profile.img} alt="profile" />{' '}
            </div>
            <p>
              {' '}
              <strong> First name:{profile.firstName}</strong>
            </p>
            <p>
              {' '}
              <strong> Last name:{profile.lastName}</strong>
            </p>
            <p>
              {' '}
              <strong>Country:{profile.country}</strong>
            </p>
            <p>
              {' '}
              <strong>Type:{profile.isStudent ? 'Student' : 'Teacher'}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facebook;
