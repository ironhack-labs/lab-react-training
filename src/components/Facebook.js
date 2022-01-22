import profiles from '../data/berlin.json';
import classes from './Facebook.module.css';

import { useState } from 'react';

const Facebook = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const profilesArr = profiles.map((profile) => {
    return (
      <div
        key={profile.img}
        className={`${classes.container} ${
          selectedCountry === profile.country ? classes.blue : ''
        }`}
      >
        <img
          src={profile.img}
          alt={profile.name}
          className={classes.profileImg}
        />
        <div className={classes.dataContainer}>
          <p>First name: {profile.firstName}</p>
          <p>Last name: {profile.lastName}</p>
          <p>Country: {profile.country}</p>
          <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
        </div>
      </div>
    );
  });
  ///COUNTRY buttons

  const setCountryHandler = ({ target }) => {
    setSelectedCountry(target.textContent);
  };
  let countries = new Set(profiles.map((profile) => profile.country));
  countries = Array.from(countries);
  const countryButtons = countries.map((el) => (
    <button
      type="button"
      key={el}
      onClick={setCountryHandler}
      className={selectedCountry === el ? classes.blue : ''}
    >
      {el}
    </button>
  ));

  return (
    <div>
      {countryButtons}
      {profilesArr}
    </div>
  );
};

export default Facebook;
