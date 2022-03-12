import profiles from '../data/berlin.json';
import { useState } from 'react';

function Facebook() {
  let [bgColor, setBgColor] = useState(null);

  let countryArr = [];
  let country;
  profiles.map((currentElement) => {
    country = currentElement.country;
    countryArr.push(country);
    console.log(country);
  });

  function handleClick(event) {
    if (event.target.currentCountry === country) console.log(event.target);
  }
  return (
    <div>
      {countryArr.map((currentCountry) => (
        <button onClick={handleClick}>{currentCountry}</button>
      ))}
      {profiles.map((currentProfile) => (
        <div className="border idCard">
          <img
            style={{ width: '100px' }}
            src={currentProfile.img}
            alt="Foto de perfil"
          />
          <div>
            <p>
              <strong>First name:</strong> {currentProfile.firstName}
            </p>
            <p>
              <strong>Last name:</strong> {currentProfile.lastName}
            </p>
            <p>
              <strong>Coutry:</strong> {currentProfile.country}
            </p>
            <p>
              <strong>Type:</strong>
              {currentProfile.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Facebook;
