import React, { useState } from 'react';
import profiles from '../data/berlin.json';
import { IdCard } from './styles/';

const FaceBook = () => {
  const [country, setCountry] = useState('');

  const selectCountry = (arg) => {
    return () => {
      setCountry(arg);
    };
  };

  const countryUnique = [
    ...new Set(profiles.map((profile) => profile.country)),
  ];

  return (
    <div>
      <button onClick={selectCountry('')}>All</button>
      {countryUnique.map((e, i) => (
        <button key={i} onClick={selectCountry(e)}>
          {e}
        </button>
      ))}

      {profiles.map((e, i) => (
        <IdCard key={i} isSelected={country === e.country}>
          <img src={e.img} alt={e.firstname} />
          <div>
            <p>
              <b>First Name:</b> {e.firstname}
            </p>
            <p>
              <b>Last Name:</b> {e.lastname}
            </p>
            <p>
              <b>Country:</b> {e.country}
            </p>
            <p>
              <b>Type:</b> {e.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </IdCard>
      ))}
    </div>
  );
};

export default FaceBook;
