import profiles from '../data/berlin.json';
import { useState } from 'react';

function Facebook() {
  const [country, setCountry] = useState('');

  let countryArr = [];
  profiles.map((currentElement) => countryArr.push(currentElement.country));

  const uniqueCountryArr = [...new Set(countryArr)];
  uniqueCountryArr.sort();

  function handleClick(event) {
    setCountry(event.target.innerText);
  } // Retorna o nome do país dentro do botão

  return (
    <div>
      {uniqueCountryArr.map((currentCountry) => (
        <button onClick={handleClick}>{currentCountry}</button>
      ))}
      {profiles.map((currentProfile) => (
        <div
          key={currentProfile.value}
          className="border idCard"
          style={{
            backgroundColor:
              country === currentProfile.country ? 'blue' : 'white',
          }}
        >
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
              <strong>Country:</strong> {currentProfile.country}
            </p>
            <p>
              <strong>Type:</strong>
              {currentProfile.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facebook;
