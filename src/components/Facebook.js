import { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
  return (
    <div className="facebook">
      <div>
        <button>All</button>
        <button>England</button>
        <button>USA</button>
        <button>Malaysia</button>
        <button>Germany</button>
        <button>...</button>
      </div>

      {profiles.map((profile) => (
        <div key={profile.firstName + profile.lastName} className="profile">
          <img src={profile.img} alt="Profile" width={150} />
          <div className="profile-info">
            <div>
              <strong>Name:</strong> {profile.firstName} {profile.lastName}
            </div>
            <div>
              <strong>Country:</strong> {profile.country}
            </div>
            <div>
              <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facebook;
