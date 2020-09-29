import React, { useState } from 'react';
import './FaceBook.css';

function Facebook(props) {
  const [choosenCountry, setChoosenCountry] = useState('');
  const allCountries = props.profiles.map((prof) => prof.country);
  const countries = [...new Set(allCountries)];
  const paintCountry = (country) => setChoosenCountry(country);

  const buttons = countries.map((country) => {
    return (
      <li key={country}>
        <button onClick={() => paintCountry(country)}>{country}</button>
      </li>
    );
  });
  const profiles = props.profiles.map((profile) => {
    return (
      <li
        className={`profiles ${profile.country === choosenCountry && 'blue'}`}
      >
        <img src={profile.img} alt="avatar"></img>
        <div className="infoDiv">
          <p>
            <b>First Name:</b>
            {profile.firstName}
          </p>
          <p>
            <b>Last Name: </b>
            {profile.lastName}
          </p>
          <p>
            <b>Country: </b>
            {profile.country}
          </p>
          <p>
            <b>Role: </b>
            {profile.isStudent ? 'Student' : 'Teacher'}
          </p>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul className="buttonsFilter">{buttons}</ul>
      <ul>{profiles}</ul>
    </div>
  );
}

export default Facebook;
