import React, { useState } from 'react';
import profiles from '../data/berlin.json';
import FBcard from './FBcard';
import FBbtn from './FBbtn';

export default function Facebook(props) {
  const initialState = {
    profiles: [...profiles],
  };
  const [currentCountry, setCurrentCountry] = useState('');
  const [state, setState] = useState(initialState);

  const getAllData = () => {
    return state.profiles.map((el) => {
      const isSelectedCountry = currentCountry === el.country;
      const bgColor = isSelectedCountry ? '#9e9ecc' : '#fff';

      return <FBcard key={el.firstName} profile={el} bgColor={bgColor} />;
    });
  };

  const getAllBtns = () => {
    return state.profiles
      .map((el) => el.country)
      .filter((country, idx, arr) => arr.indexOf(country) === idx)
      .map((country) => {
        const isSelectedCountry = currentCountry === country;
        const bgColor = isSelectedCountry ? '#9e9ecc' : '#fff';
        return (
          <FBbtn
            bgColor={bgColor}
            country={country}
            selectCountry={setCurrentCountry}
          />
        );
      });
  };

  return (
    <div>
      {getAllBtns()}
      {getAllData()}
    </div>
  );
}
