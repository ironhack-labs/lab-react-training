import { useState } from 'react';
import profiles from '../data/berlin.json';
import './Component.css';

function Facebook() {
  const [country, setCountry] = useState('');
  const [disable, setDisable] = useState('false');

  let countries = [];

  profiles.map((currentProfile) => {
    if (countries.indexOf(currentProfile.country) === -1) {
      countries.push(currentProfile.country);
    }
  });

  function handleBtnClick(event) {
    setCountry(event.target.innerText);
  }

  function handleImgClick() {
    setDisable(true);
  }

  return (
    <div>
      <div>
        <button
          style={{ backgroundColor: 'All' === country ? '#A3D2E2' : 'white' }}
          onClick={handleBtnClick}
        >
          All
        </button>
        {countries.map((currentCountry) => {
          return (
            <button
              style={{
                backgroundColor:
                  currentCountry === country ? '#A3D2E2' : 'white',
              }}
              onClick={handleBtnClick}
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
              style={{
                backgroundColor:
                  currentInfo.country === country || country === 'All'
                    ? '#A3D2E2'
                    : 'white',
              }}
            >
              <div>
                <img
                  className="imgProfile"
                  src={currentInfo.img}
                  alt={currentInfo.firstName}
                  onClick={handleImgClick}
                />
              </div>

              <div style={{ display: disable ? 'block' : 'none' }}>
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
