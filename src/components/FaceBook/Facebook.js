import profiles from '../../data/berlin.json';
import Card from './Card/Card';

import React, { useState } from 'react';

const FaceBook = () => {
  const countries = profiles.map((profile) => profile.country);
  const cleanedCountries = new Set(countries);
  const countriesArray = ['All', ...cleanedCountries];
  const [currentCountry, setCountry] = useState('All');
  const [profilesList, setProfiles] = useState(profiles);

  const handleButton = (country, event) => {
    setCountry(country);
  };

  return (
    <section>
      <article>
        {' '}
        {countriesArray.map((country, idx) => (
          <button
            onClick={(event) => handleButton(country, event)}
            key={`${country}${idx}`}
            id={country}
          >
            {country}
          </button>
        ))}
      </article>
      <article>
        {' '}
        {profilesList.map((profile, idx) => (
          <Card
            data={profile}
            key={`${profile.name}${idx}`}
            countrySelected={currentCountry}
          />
        ))}
      </article>
    </section>
  );
};

export default FaceBook;
