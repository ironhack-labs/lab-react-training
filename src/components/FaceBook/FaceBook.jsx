import React, { useState } from 'react';

import './FaceBook.css';
import profiles from '../../data/berlin.json';

const FaceBook = () => {
  const [color, setColor] = useState('white');
  const [country, setCountry] = useState('');

  const countries = [];
  profiles.map((ele) => countries.push(ele.country));

  const uniqueCountries = [...new Set(countries)];

  const setCountryy = () => {
    setCountry({country})
    
  };

  const buttons = uniqueCountries.map((country, i) => {
    return (
      <button className="ButtonFacebook" key={i} onClick={setCountryy}>
        {country}
      </button>
    );
  });

 
  

  const cards = [...profiles].map(function (ele, i) {
    return (
      <div className="cardImg" key={i}>
        <img src={ele.img} alt="" />
        <div className="text">
          <p>
            <strong>First Name: </strong>
            {ele.firstName}
          </p>
          <p>
            <strong>Last Name: </strong>
            {ele.lastName}
          </p>
          <p>
            <strong>Country: </strong>
            {ele.country}
          </p>
          <p>
            <strong>Type: </strong>
            {ele.isStudent ? 'Student' : 'Teacher'}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      {buttons}
      {cards}
    </div>
  );
};
export default FaceBook;
