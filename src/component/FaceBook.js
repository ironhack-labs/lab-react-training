/*

import React from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const renderProfiles = () => {
    return profiles.map((profile) => {
      const {
        firstName,
        lastName,
        country,
        img,
        isStudent,
      } = profile;
      return (
        <div
          key={`${firstName}-${lastName}`}
          className="profile-card"
          style={{ backgroundColor: isStudent ? 'lightblue' : 'white' }}
        >
          <img src={img} alt={`${firstName} ${lastName}`} />
          <div className="profile-details">
            <p>
              <strong>First Name: </strong>
              {firstName}
            </p>
            <p>
              <strong>Last Name: </strong>
              {lastName}
            </p>
            <p>
              <strong>Country: </strong>
              {country}
            </p>
            <p>
              <strong>Type: </strong>
              {isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      );
    });
  };

  return <div className="facebook-container">{renderProfiles()}</div>;
};

export default FaceBook;



import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [activeCountry, setActiveCountry] = useState('');

  const renderCountries = () => {
    const countries = profiles.reduce((acc, profile) => {
      if (!acc.includes(profile.country)) {
        acc.push(profile.country);
      }
      return acc;
    }, []);
    return countries.map((country) => {
      return (
        <button
          key={country}
          onClick={() => setActiveCountry(country)}
          className={`country-button ${activeCountry === country ? 'active' : ''}`}
        >
          {country}
        </button>
      );
    });
  };

  const renderProfiles = () => {
    return profiles.map((profile) => {
      const { firstName, lastName, country, img, isStudent } = profile;
      const isActive = activeCountry ? activeCountry === country : true;
      return (
        <div
          key={`${firstName}-${lastName}`}
          className="profile-card"
          style={{ backgroundColor: isStudent ? 'lightblue' : 'white', display: isActive ? 'block' : 'none' }}
        >
          <img src={img} alt={`${firstName} ${lastName}`} />
          <div className="profile-details">
            <p>
              <strong>First Name: </strong>
              {firstName}
            </p>
            <p>
              <strong>Last Name: </strong>
              {lastName}
            </p>
            <p>
              <strong>Country: </strong>
              {country}
            </p>
            <p>
              <strong>Type: </strong>
              {isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="facebook-container">
      <div className="country-buttons-container">{renderCountries()}</div>
      <div className="profiles-container">{renderProfiles()}</div>
    </div>
  );
};

export default FaceBook;



import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const renderProfiles = () => {
    return profiles.map((profile) => {
      const {
        firstName,
        lastName,
        country,
        img,
        isStudent,
      } = profile;
      return (
        <div
          key={`${firstName}-${lastName}`}
          className="profile-card"
          style={{ backgroundColor: isStudent ? 'lightblue' : 'white', border: country === selectedCountry ? '2px solid blue' : 'none' }}
        >
          <img src={img} alt={`${firstName} ${lastName}`} />
          <div className="profile-details">
            <p>
              <strong>First Name: </strong>
              {firstName}
            </p>
            <p>
              <strong>Last Name: </strong>
              {lastName}
            </p>
            <p>
              <strong>Country: </strong>
              {country}
            </p>
            <p>
              <strong>Type: </strong>
              {isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      );
    });
  };

  const uniqueCountries = [...new Set(profiles.map(profile => profile.country))];

  const handleShowAllClick = () => {
    setSelectedCountry('');
  };

  const handleFilterClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="facebook-container">
      <div className="filter-buttons">
        <button onClick={handleShowAllClick}>Show All</button>
        {uniqueCountries.map((country, index) => (
          <button key={index} onClick={() => handleFilterClick(country)}>
            {country}
          </button>
        ))}
      </div>
      {renderProfiles()}
    </div>
  );
};

export default FaceBook;

*/

import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const handleShowAllClick = () => {
    setSelectedCountry('');
  };
  
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const renderProfiles = () => {
    return profiles.map((profile) => {
      const {
        firstName,
        lastName,
        country,
        img,
        isStudent,
      } = profile;
      return (
        <div
          key={`${firstName}-${lastName}`}
          className="profile-card"
          style={{ backgroundColor: isStudent ? 'lightblue' : 'white', display: selectedCountry === '' || selectedCountry === country ? 'block' : 'none' }}
        >
          <img src={img} alt={`${firstName} ${lastName}`} />
          <div className="profile-details">
            <p>
              <strong>First Name: </strong>
              {firstName}
            </p>
            <p>
              <strong>Last Name: </strong>
              {lastName}
            </p>
            <p>
              <strong>Country: </strong>
              {country}
            </p>
            <p>
              <strong>Type: </strong>
              {isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      );
    });
  };

  const renderCountryButtons = () => {
    const countries = [...new Set(profiles.map((profile) => profile.country))];
    return (
      <div className="country-buttons">
        <button className={`country-button ${selectedCountry === '' ? 'selected' : ''}`} onClick={handleShowAllClick}>
          All
        </button>
        {countries.map((country) => (
          <button key={country} className={`country-button ${selectedCountry === country ? 'selected' : ''}`} onClick={() => handleCountryClick(country)}>
            {country}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="facebook-container">
      {renderCountryButtons()}
      {renderProfiles()}
    </div>
  );
};

export default FaceBook;
