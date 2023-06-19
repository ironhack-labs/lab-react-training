import { useState } from 'react';
import profilesData from '../data/berlin.json';
import Profile from './Profile';

export default function Facebook() {
  const [profiles, setProfiles] = useState(profilesData.slice());

  function getCountries() {
    return ['All', ...new Set(profilesData.map((profile) => profile.country))];
  }

  function handleCountrySelect(e) {
    const country = e.target.value;
    //deep copy
    const copyProfiles = profilesData.map((profile) => ({ ...profile }));

    if (country !== 'All') {
      copyProfiles.forEach((profile) => {
        if (profile.country === country) {
          profile.backgroundColor = 'rgb(69, 94, 181)';
        }
      });
    }
    setProfiles(copyProfiles);
  }

  function handleFilterResults(e) {
    const query = e.target.value;
    setProfiles(
      profilesData.filter((profile) =>
        profile.firstName.toLowerCase().startsWith(query.toLowerCase())
      )
    );
  }

  return (
    <>
      {getCountries().map((country) => (
        <button value={country} onClick={handleCountrySelect} key={country}>
          {country}
        </button>
      ))}
      <div>
        <label>
          Search by first name:
          <input type="search" name="query" onChange={handleFilterResults} />
        </label>
      </div>
      {profiles.length > 0
        ? profiles.map((profile) => (
            <Profile
              key={`${profile.firstName}${profile.lastName}`}
              picture={profile.img}
              firstName={profile.firstName}
              lastName={profile.lastName}
              country={profile.country}
              isStudent={profile.isStudent}
              backgroundColor={profile.backgroundColor}
            />
          ))
        : 'No matching results'}
    </>
  );
}
