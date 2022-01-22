import profiles from '../data/berlin.json';
import classes from './Facebook.module.css';

import { useState } from 'react';

const Facebook = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showDetails, setShowDetails] = useState('');
  const [searchState, setSearchState] = useState('');

  const profilesArr = profiles
    .filter(
      (el) =>
        el.firstName.toLowerCase().includes(searchState) ||
        el.lastName.toLowerCase().includes(searchState)
    )
    .map((profile) => {
      return (
        <div
          key={profile.id}
          className={`${classes.container} ${
            selectedCountry === profile.country ? classes.blue : ''
          }`}
        >
          <img
            src={profile.img}
            alt={profile.name}
            className={classes.profileImg}
            onClick={() =>
              setShowDetails((showDetails) => (showDetails = profile.id))
            }
          />
          {showDetails === profile.id && (
            <div className={classes.dataContainer}>
              <p>First name: {profile.firstName}</p>
              <p>Last name: {profile.lastName}</p>
              <p>Country: {profile.country}</p>
              <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          )}
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

  const searchChangeHandler = ({ target }) => {
    setSearchState(target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={searchState}
        onChange={searchChangeHandler}
      />
      {countryButtons}
      {profilesArr}
    </div>
  );
};

export default Facebook;
