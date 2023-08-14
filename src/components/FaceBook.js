import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country === 'All' ? null : country);
  };

  const uniqueCountries = ['All', ...new Set(profiles.map((profile) => profile.country))];
  const displayedCountries = uniqueCountries.slice(0, 5);

  return (
    <div className="facebook">
      <div className="country-buttons">
        {displayedCountries.map((country, index) => (
          <button
            key={index}
            onClick={() => handleCountryClick(country)}
            className={selectedCountry === country ? 'selected' : ''}
          >
            {country}
          </button>
        ))}
        {uniqueCountries.length > 5 && (
          <button disabled>...</button>
        )}
      </div>
      {profiles.map((profile, index) => (
        <div
          key={index}
          className={`profile ${selectedCountry === profile.country || selectedCountry === 'All' ? 'highlight' : ''}`}
        >
          <img src={profile.img} alt={`Profile ${index}`} className="profile-img" />
          <div className="info">
            <p><strong>First Name:</strong> {profile.firstName}</p>
            <p><strong>Last Name:</strong> {profile.lastName}</p>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;

