

import profiles from '../data/berlin.json';

import  { useState } from 'react';


const FaceBook = () => {
  
  const [selectedCountry, setSelectedCountry] = useState('');

 
  const countries = [...new Set(profiles.map(profile => profile.country))];

 
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
    
      {countries.map((country, index) => (
        <button
          key={index}
          onClick={() => handleCountrySelect(country)}
          style={{ margin: '5px', backgroundColor: selectedCountry === country ? 'blue' : 'white' }}
        >
          {country}
        </button>
      ))}

    
      {profiles.map((profile, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            backgroundColor: selectedCountry === profile.country ? 'lightblue' : 'transparent'
          }}
        >
          <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} style={{ width: "100px" }} />
          <p><strong>First Name:</strong> {profile.firstName}</p>
          <p><strong>Last Name:</strong> {profile.lastName}</p>
          <p><strong>Country:</strong> {profile.country}</p>
          <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;