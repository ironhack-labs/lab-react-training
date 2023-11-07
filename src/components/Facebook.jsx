import React, { useState } from "react";
import profiles from "../data/berlin.json";

const FaceBook = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);

    const uniqueCountries = Array.from(new Set(profiles.map(profile => profile.country)));

    const handleCountryButtonClick = (country) => {
      setSelectedCountry(country);
    };

    return (
        <div className="facebook-container">
          <div className="country-buttons">
            {uniqueCountries.map((country, index) => (
              <button
                key={index}
                onClick={() => handleCountryButtonClick(country)}
                className={selectedCountry === country ? 'active' : ''}
              >
                {country}
              </button>
            ))}
          </div>
    
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`profile-card ${profile.country === selectedCountry ? 'highlighted' : ''}`}
            >
              <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
              <div className="profile-details">
                <p>{`${profile.firstName} ${profile.lastName}`}</p>
                <p>{`Country: ${profile.country}`}</p>
                <p>{`Type: ${profile.isStudent ? 'Student' : 'Teacher'}`}</p>
              </div>
            </div>
          ))}
        </div>
      );
};

export default FaceBook;
