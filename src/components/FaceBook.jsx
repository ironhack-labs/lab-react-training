import React, { useState } from 'react';
import profiles from './../data/berlin.json'; // Make sure to adjust the import path

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleCountryFilter = (country) => {
    setSelectedCountry(country);
    setSelectedProfile(null);
  };

  const handleProfileClick = (index) => {
    setSelectedProfile(index === selectedProfile ? null : index);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedProfiles = profiles.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.firstName.localeCompare(b.firstName);
    } else {
      return b.firstName.localeCompare(a.firstName);
    }
  });

  return (
    <div className="facebook">
      <div className="filter-buttons">
        <button onClick={() => handleCountryFilter(null)}>All</button>
        {Array.from(new Set(profiles.map(profile => profile.country))).map((country, index) => (
          <button key={index} onClick={() => handleCountryFilter(country)}>{country}</button>
        ))}
      </div>
      <div className="sort-button">
        <button onClick={handleSort}>Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</button>
      </div>
      <div className="profile-list">
        {sortedProfiles.map((profile, index) => (
          <div
            key={index}
            className={`profile-card ${selectedProfile === index ? 'active' : ''}`}
            onClick={() => handleProfileClick(index)}
            style={{ backgroundColor: selectedCountry === profile.country ? 'blue' : 'white' }}
          >
            <img src={profile.img} alt={`Profile ${index}`} />
            {selectedProfile === index && (
              <div className="profile-details">
                <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
                <p><strong>Country:</strong> {profile.country}</p>
                <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Not a student'}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceBook;
