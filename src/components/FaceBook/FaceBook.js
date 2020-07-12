import React, { useState } from 'react';
import profiles from '../../data/berlin.json';
import IdCard from '../IdCard/IdCard';

function FaceBook() {
  const [countrySelected, setCountry] = useState('all');

  function getCards() {
    const idCards = profiles.map((p, index) => {
      const isSelected = p.country === countrySelected;
      return (
        <IdCard
          key={index}
          lastName={p.lastName}
          firstName={p.firstName}
          country={p.country}
          type={p.isStudent ? 'Student' : 'Teacher'}
          picture={p.img}
          selected={isSelected}
        />
      );
    });
    return idCards;
  }
  function getCountries() {
    const buttonCountries = [];
    const countries = profiles.map((p, index) => {
      const isSelected = p.country === countrySelected;
      if (buttonCountries.indexOf(p.country) < 0) {
        buttonCountries.push(p.country);
        return (
          <button
            key={p.country}
            onClick={() => handleCountrySelect(p.country)}
            className={isSelected ? 'cardSelected' : ''}
          >
            {p.country}
          </button>
        );
      }
    });
    return countries;
  }

  function handleCountrySelect(_country) {
    setCountry(_country);
  }

  return (
    <div>
      <div>
        <button
          onClick={() => handleCountrySelect('all')}
          className={countrySelected === 'all' ? 'cardSelected' : ''}
        >
          All
        </button>
        {getCountries()}
      </div>
      <div>{getCards()}</div>
    </div>
  );
}
export default FaceBook;
