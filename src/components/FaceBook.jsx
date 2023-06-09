import profiles from '../data/berlin.json';
import React from 'react';
import { useState } from 'react';

function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const uniqueCountries = profiles.reduce((acc, profile) => {
    if (!acc.includes(profile.country)) {
      acc.push(profile.country);
    }
    return acc;
  }, []);
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };
  return (
    <div>
      <div className="country-buttons">
        {uniqueCountries.map(
          (country) =>{
            
            return (
             
            <button
              className={country === selectedCountry ? 'active' : ''}
              onClick={() => handleCountryClick(country)}
            >
              {country}
            </button>
          )}
        )}
      </div>
      {profiles.map(({ firstName, lastName, country, img, isStudent }) => {
        return (
          <div className={`facebook-card ${
              country === selectedCountry ? 'selected' : ''
            }`}>
            <img src={img} alt={lastName + firstName} />
            <div>
              <p>First name: {firstName}</p>
              <p>Last name: {lastName}</p>
              <p>Country: {country}</p>
              <p>Type: {isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
