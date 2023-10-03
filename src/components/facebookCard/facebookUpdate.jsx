import React, { useState } from 'react';
import FacebookCard from '../facebookCard/facebookCard';

function FacebookUpdate({personList}) {


  const uniqueCountries = [...new Set(personList.map((person) => person.country))];

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Facebook Profiles</h1>

      <div className="country-buttons">
        {uniqueCountries.map((country, index) => (
          <button
            key={index}
            className={`country-button ${selectedCountry === country ? 'selected' : ''}`}
            onClick={() => handleCountryClick(country)}
          >
            {country}
          </button>
        ))}
      </div>

      <FacebookCard
        personList={
          selectedCountry
            ? personList.filter((person) => person.country === selectedCountry)
            : personList
        }
      />
    </div>
  );
}

export default FacebookUpdate;