import React, { useState } from 'react';
import profiles from '../data/berlin.json';

export default function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState(() => null);

  const handleClickCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="facebook">
      <button onClick={() => handleClickCountry('England')}>England</button>
      <button onClick={() => handleClickCountry('USA')}>USA</button>
      <button onClick={() => handleClickCountry('Malaysia')}>Malaysia</button>
      <button onClick={() => handleClickCountry('Germany')}>Germany</button>
      <button onClick={() => handleClickCountry('Sweden')}>Sweden</button>
      <button onClick={() => handleClickCountry('Nigeria')}>Nigeria</button>
      <button onClick={() => handleClickCountry('Italy')}>Italy</button>
      <button onClick={() => handleClickCountry('Scotland')}>Scotland</button>
      <button onClick={() => handleClickCountry('Kazakhstan')}>
        Kazakhstan
      </button>
      <button onClick={() => handleClickCountry('Russia')}>Russia</button>
      <button onClick={() => handleClickCountry('Catalonia')}>Catalonia</button>
      <button onClick={() => handleClickCountry('France')}>France</button>
      <button onClick={() => handleClickCountry('Israel')}>Israel</button>
      <button onClick={() => handleClickCountry('Brazil')}>Brazil</button>
      <button onClick={() => handleClickCountry('Taiwan')}>Taiwan</button>
      <button onClick={() => handleClickCountry('Turkey')}>Turkey</button>
      <button onClick={() => handleClickCountry('Norway')}>Norway</button>


      <div className="grid-container">
      {profiles.map((profile, index) => (
        <div className={`idcard-container ${profile.country === selectedCountry ? 'selected-country' : ''}`} key={index}>
        <div className="image-box">
          <img src={profile.img} alt={profile.firstName}/>
          </div>
          <div className="profile-box">
            <p>
              <span>First name:</span> <span> {profile.firstName} </span>
            </p>
            <p>
              <span>Last name:</span> <span> {profile.lastName} </span>
            </p>
            <p>
              <span>Country:</span> <span> {profile.country} </span>
            </p>
            <p>
              <span>Type:</span> <span> {profile.isStudent ? 'Student' : 'Teacher'} </span>
            </p>
          </div>
        </div>

      ))}
    </div>
    </div>
  )
}