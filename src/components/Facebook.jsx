import Data from '../data/berlin.json';
import UserCard from './UserCard';
import { useState } from 'react';
export default function Facebook() {
  const [isSelected, setSelected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountry = (country) => {
    setSelected(true);
    setSelectedCountry(country);
  };

  return (
    <div>
      <button>All</button>
      <button
        onClick={() => {
          handleCountry('England');
        }}
      >
        England
      </button>
      <button
        onClick={() => {
          handleCountry('USA');
        }}
      >
        USA
      </button>
      <button
        onClick={() => {
          handleCountry('Malasia');
        }}
      >
        Malasia
      </button>
      <button
        onClick={() => {
          handleCountry('Germany');
        }}
      >
        Germany
      </button>

      {Data.map((person) => {
        return (
          <UserCard
            person={person}
            country={selectedCountry}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
}
