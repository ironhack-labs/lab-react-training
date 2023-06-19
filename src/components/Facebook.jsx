import { useState } from 'react';

import Profiles from '../data/berlin.json';

function Facebook() {
  const [profiles, setProfiles] = useState(Profiles);

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="profiles-container">
      <div className="country-buttons">
        {profiles
          .reduce((countries, profile) => {
            if (!countries.includes(profile.country)) {
              countries.push(profile.country);
            }
            return countries;
          }, [])
          .map((country) => (
            <button
              key={country}
              onClick={() => handleCountryClick(country)}
              className={country === selectedCountry ? 'selected' : ''}
            >
              {country}
            </button>
          ))}
      </div>

      <div className="fb">
        {profiles.map((profile) => {
          return (
            <div
              className={`prof-container ${
                profile.country === selectedCountry ? 'selected' : ''
              }`}
            >
              <img src={profile.img} alt="" />
              <div className="info-prof">
                <p>
                  First name: <span>{profile.firstName}</span>
                </p>
                <p>
                  Last name: <span>{profile.lastName}</span>
                </p>
                <p>
                  Country: <span>{profile.country}</span>
                </p>
                <p>
                  Type: <span>{profile.isStudent}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Facebook;
