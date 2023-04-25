import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const Facebook = () => {
  const uniqleCoutry = [...new Set(profiles.map((profile) => profile.country))];
  const options = ['All', ...uniqleCoutry];
  const [selectedCountry, setSelectedCountry] = React.useState(options[0]);

  const handleSelect = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          value={option}
          onClick={handleSelect}
          style={{
            backgroundColor: option === selectedCountry ? 'blue' : 'white',
          }}
        >
          {option}
        </button>
      ))}

      {profiles.map((profile) => (
        <div
          className="card"
          style={{
            backgroundColor:
              profile.country === selectedCountry ? 'blue' : 'white',
          }}
        >
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
