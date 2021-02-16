import React from 'react';
import profiles from '../../data/berlin.json';

function FaceBook() {
  const countries = ['All'];
  const countryColors = {};

  profiles.forEach((value) => {
    if (!countries.includes(value.country)) {
      countries.push(value.country);
    }
  });

  for (let i = 0; i < countries.length; i++) {
    countryColors[countries[i]] = 'white';
  }

  const [colors, setColors] = React.useState(countryColors);

  const handleClick = ({ target }) => {
    const newColors = {};

    for (let i = 0; i < countries.length; i++) {
      newColors[countries[i]] = 'white';
    }

    if (target.name === 'All') {
      for (let i = 0; i < countries.length; i++) {
        newColors[countries[i]] = '#00FFFF';
      }
    }

    setColors({
      ...newColors,
      [target.name]: '#00FFFF',
    });
  };

  const getCountries = () => {
    return countries.map((value, index) => {
      return (
        <button
          key={value}
          type="button"
          name={value}
          style={{ backgroundColor: colors[value] }}
          onClick={handleClick}
        >
          {value}
        </button>
      );
    });
  };

  const initialList = () => {
    return profiles.map((value) => {
      return (
        <>
          <div
            key={value.firstName + value.lastName}
            style={{
              alignItems: 'center',
              display: 'flex',
              backgroundColor: colors[value.country],
            }}
          >
            <img
              src={value.img}
              alt="profile-img"
              style={{ height: '100px' }}
            />
            <div>
              <p>First name: {value.firstName}</p>
              <p>Last name: {value.lastName}</p>
              <p>Country: {value.country}</p>
              <p>Type: {value.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div style={{ display: 'flex' }}>{getCountries()}</div>
      {initialList()}
    </>
  );
}

export default FaceBook;
