import React, {useState} from "react";
import profiles from '../data/berlin.json';

const Facebook = () => {
    const countries = [...new Set(profiles.map((profile) => profile.country))];

    const [selectedCountries, setSelectedCountries] = useState('');

    const handleCountry = (country) => {
        setSelectedCountries(country);
    }
    
    return (
        <div>
      <div>
        {countries.map((country) => (
          <button
            key={country}
            onClick={() => handleCountry(country)}
            style={{
              backgroundColor: selectedCountries === country ? 'lightblue' : 'white',
              margin: '5px',
              padding: '5px 10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {country}
          </button>
        ))}
      </div>
      <div>
        {profiles.map((profile) => (
          <div
            key={profile.id}
            style={{
              backgroundColor:
                selectedCountries === profile.country ? 'lightblue' : 'transparent',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={profile.img}
              alt={profile.firstName + ' ' + profile.lastName}
              style={{ width: '50px', marginRight: '10px' }}
            />
            <div>
              <strong>Name: </strong>
              {profile.firstName} {profile.lastName}
              <br />
              <strong>Country: </strong>
              {profile.country}
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Facebook;