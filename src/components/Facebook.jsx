import profiles from '../data/berlin.json';
import FacebookCard from './FacebookCard';
import { useState } from 'react';
export default function Facebook() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const countries = profiles.map((profile) => profile.country);
  const uniqueCountries = countries.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  const handleClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick('')}>All</button>
        {uniqueCountries.map((country) => {
          return (
            <button onClick={() => handleClick(country)}>{country}</button>
          );
        })}
      </div>

      <div>
        {profiles.map((el) => {
          return el.country === selectedCountry ? (
            <FacebookCard profile={el} style={{ backgroundColor: 'blue' }} />
          ) : (
            <FacebookCard profile={el} />
          );
        })}
      </div>
    </>
  );
}
