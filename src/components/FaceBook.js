import React from 'react';
import profiles from '../data/berlin.json';
import '../App.css';

function CountryButton() {
  const countryArr = [];
  profiles.map((person) => {
    if (countryArr.indexOf(person.country) < 0) {
      countryArr.push(person.country);
      console.log(countryArr);
    }
  });
  return (
    <div style={{ display: 'flex', flexFlow: 'row-wrap' }}>
      {countryArr.map((country) => (
        <div>
          <button>{country}</button>
        </div>
      ))}
    </div>
  );
}

function FaceBook() {
  return (
    <div>
      <CountryButton />
      {profiles.map((person, index) => (
        <div key={index}>
          <img src={person.img} style={{ height: '150px' }}></img>
          <p>
            <b>First name: </b>
            {person.firstName}
          </p>
          <p>
            <b>Last name: </b>
            {person.lastName}
          </p>
          <p>
            <b>Country: </b>
            {person.country}
          </p>
          <p>
            <b>Type: </b>
            {person.isStudent ? 'Student' : 'Teacher'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
