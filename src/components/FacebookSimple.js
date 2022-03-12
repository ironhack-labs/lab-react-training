import { useState } from 'react';
import profiles from '../data/berlin.json';
import './Component.css';

function Facebook() {
  const [colorCountry, setColorCountry] = useState('white');
  let countries = [];

  profiles.map((currentProfile) => {
    if (countries.indexOf(currentProfile.country) === -1) {
      countries.push(currentProfile.country);
    }
  });

  function handleClick(event) {
    if (event.target.innerText === profiles[1].country) {
      setColorCountry('blue');
    }

    function selectedCountry(currentCountry) {
      if (currentCountry.country === event.target.innerText) {
        return true;
      }
    }

    let blueCountries = profiles.filter(selectedCountry);
    console.log(blueCountries);

    console.log(colorCountry);
    console.log(event.target.innerText);
  }

  return (
    <div>
      <div>
        <button
          style={{ backgroundColor: `${colorCountry}` }}
          onClick={handleClick}
        >
          All
        </button>
        {countries.map((currentCountry) => {
          return (
            <button
              style={{ backgroundColor: `${colorCountry}` }}
              onClick={handleClick}
            >
              {currentCountry}
            </button>
          );
        })}
      </div>

      <div className="allCards">
        {profiles.map((currentInfo) => {
          const student = currentInfo.isStudent ? 'Student' : 'Teacher';
          return (
            <div
              className="card"
              style={{ backgroundColor: `${colorCountry}` }}
            >
              <div>
                <img
                  className="imgProfile"
                  src={currentInfo.img}
                  alt={currentInfo.firstName}
                />
              </div>

              <div>
                <p className="text">
                  <strong>First name:</strong> {currentInfo.firstName}
                </p>
                <p className="text">
                  <strong>Last name:</strong> {currentInfo.lastName}
                </p>
                <p className="text">
                  <strong>Country:</strong> {currentInfo.country}
                </p>
                <p className="text">
                  <strong>Type:</strong> {student}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Facebook;
