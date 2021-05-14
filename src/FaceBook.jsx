import React from 'react';
import './FaceBook.css';
import profiles from './data/berlin.json';

function FaceBook() {
  const [countrySelect, setCountrySelect] = React.useState('null');
  let countryArr = [];

  function selectCountry(event) {
    setCountrySelect(event.target.value);
  }

  profiles.map((profile) => {
    if (countryArr.indexOf(profile.country) === -1) {
      countryArr.push(profile.country);
    }
  });

  return (
    <div>
      {countryArr.map((el) => {
        return (
          <button
            className="FaceBook-button"
            value={el}
            onClick={selectCountry}
          >
            {el}
          </button>
        );
      })}
      {profiles.map((person) => {
        const { firstName, lastName, img, isStudent, country } = person;
        return (
          <div
            className="FaceBook"
            style={
              countrySelect === country
                ? { backgroundColor: 'lightBlue' }
                : { backgroundColor: 'white' }
            }
          >
            <img src={img} alt={firstName} />
            <div className="FaceBook-text">
              <p>
                <strong>First Name: </strong>
                {firstName}
              </p>
              <p>
                <strong>Last Name: </strong>
                {lastName}
              </p>
              <p>
                <strong>Country: </strong>
                {country}
              </p>
              <p>
                <strong>Type: </strong>
                {isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
