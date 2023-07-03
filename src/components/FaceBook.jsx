import React, { useState } from 'react';

function FaceBook({ profiles }) {
  const [selectedCountry, setSelectedCountry] = useState('All');

  const countries = [...new Set(profiles.map((profile) => profile.country))];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="button-container">
      <button onClick={() => handleCountryClick('All')}>All</button>
      {countries.map((country, index) => (
        <button key={index} onClick={() => handleCountryClick(country)}>
          {country}
        </button>
      ))}
      <div className="profile-container">
        {profiles.map((profile) => (
          <div
            key={profile.id || profile.firstName + profile.lastName}
            className={`id-card ${
              selectedCountry === profile.country || selectedCountry === 'All'
                ? 'highlight'
                : ''
            }`}
          >
            <img src={profile.img} alt="profile" />
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
        ))}
      </div>
    </div>
  );
}

export default FaceBook;
