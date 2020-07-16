import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const modProfies = [...profiles];
  modProfies.forEach((el) => (el.isSelected = false));
  let activeCountry = undefined;
  const [selectedCountry, setSelectedCountry] = useState(activeCountry);
  const handleChange = (event) => {
    modProfies.map((el) => {
      if (event.target.value === el.country) {
        setSelectedCountry(el.country);
        return (el.isSelected = true);
      }
      return el.isSelected;
    });
  };
  const arrCountries = [];
  modProfies.forEach((el) => {
    arrCountries.push(el.country);
  });
  const setCountries = new Set(arrCountries);
  const uniqueCountries = [...setCountries];
  const buttonsList = uniqueCountries.map((el) => (
    <button
      style={selectedCountry === el ? { backgroundColor: 'lightblue' } : null}
      key={el}
      onClick={handleChange}
      value={el}
    >
      {el}
    </button>
  ));
  const profilesList = modProfies.map((el) => (
    <div
      key={el.firstName}
      className="box"
      style={
        selectedCountry === el.country ? { backgroundColor: 'lightblue' } : null
      }
    >
      <div className="col">
        <img className="profile_picture" src={el.img} alt={el.firstName} />
      </div>
      <div className="col">
        <ul>
          <li>
            <span className="tag">First name:</span> {el.firstName}
          </li>
          <li>
            <span className="tag">Last name:</span> {el.lastName}
          </li>
          <li>
            <span className="tag">Country:</span> {el.country}
          </li>
          <li>
            <span className="tag">Type:</span>
            {el.isStudent ? 'Student' : 'Teacher'}
          </li>
        </ul>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="buttons-row">{buttonsList}</div>
      {profilesList}
    </div>
  );
};

export default FaceBook;
