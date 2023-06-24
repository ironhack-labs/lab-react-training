import profiles from '../data/berlin.json';
import '../App.css'
import { useState } from 'react';

function Facebook(){
    const [selectedCountry, setSelectedCountry] = useState('');
  
    const handleCountryClick = (country) => {
      setSelectedCountry(country);
    };
  
    return (
      <div>
        <div className="country-buttons">
          {profiles.reduce((countries, profile) => {
            if (!countries.includes(profile.country)) {
              countries.push(profile.country);
            }
            return countries;
          }, []).map((country) => (
            <button key={country} onClick={() => handleCountryClick(country)}>
              {country}
            </button>
          ))}
        </div>
        <div className="facebook">
          {profiles.map((profile) => (
            <div
              key={profile.firstName + profile.lastName}
              className={`profile ${profile.country === selectedCountry ? 'selected' : ''}`}
            >
              <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
              <p>First Name: {profile.firstName}</p>
              <p>Last Name: {profile.lastName}</p>
              <p>Country: {profile.country}</p>
              {profile.isStudent ? <p>Type: Student</p> : <p>Type: Teacher</p>}
            </div>
          ))}
        </div>
  
      
      </div>
    );
  }

export default Facebook