import React, { useState } from 'react';
import profiles from '../data/berlin.json';
import IdCard from './IdCard';

function FaceBook() {
  const [countrySelected, setCountry] = useState('all');

  function getCards() {
    const idCards = profiles.map((p, index) => {
      console.log(p.country, countrySelected);
      return (
        <IdCard
          key={index}
          lastName={p.lastName}
          firstName={p.firstName}
          country={p.country}
          type={p.isStudent ? 'Student' : 'Teacher'}
          picture={p.img}
          selected={p.country === countrySelected ? true : false}
        />
      );
    });
    return idCards;
  }
  function getCountries() {
    const buttonCountries = [];
    const countries = profiles.map((p, index) => {
      if (buttonCountries.indexOf(p.country) < 0) {
        buttonCountries.push(p.country);
        return (
          <button
            key={p.country}
            onClick={() => handleCountrySelect(p.country)}
            className={p.country === countrySelected ? 'cardSelected' : ''}
          >
            {p.country}
          </button>
        );
      }
    });
    return countries;
  }
  const [cards, setCards] = useState(getCards);
  const [countries, setCountries] = useState(getCountries);

  function handleCountrySelect(_country) {
    console.log(_country);
    setCountry(_country);
    console.log(countrySelected);
    setCountries(getCountries);
    setCards(getCards);
  }

  return (
    <div>
      <div>
        <button>All</button>
        {countries}
      </div>
      <div>{cards}</div>
    </div>
  );
}
export default FaceBook;
