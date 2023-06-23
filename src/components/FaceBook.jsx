import React from 'react';

import profilesData from '../data/berlin.json';

function FaceBook() {
  const [profiles, setProfiles] = React.useState(profilesData);

  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedProfile, setSelectedProfile] = React.useState(0);
  const countries = profiles.map((profile) => profile.country);
  const countryList = [...new Set(countries)];
  const [searchWord, setSearchWord] = React.useState('');

  function handleSearch(event) {
    setSearchWord(event.target.value);
  }

  const filteredProfiles = profiles.filter((profile) =>
    profile.firstName.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <>
      <div>
        <button
          onClick={() => {
            setProfiles(profilesData);
          }}
        >
          All
        </button>
        {countryList.map((country) => {
          return (
            <button
              onClick={() => {
                setSelectedCountry(country);
              }}
              className={`${country === selectedCountry ? 'selected' : ''}`}
            >
              {country}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          const sortedProfiles = [...profiles].sort((a, b) =>
            a.firstName > b.firstname ? 1 : -1
          );
          setProfiles(sortedProfiles);
        }}
      >
        Sort
      </button>

      <label id="search">
        Search
        <input
          name="search"
          value={searchWord}
          type="text"
          onChange={handleSearch}
        />
      </label>

      {filteredProfiles.map((profile, index) => {
        return (
          <div
            className={`idCard ${
              profile.country === selectedCountry ? 'selectedCountry' : ''
            }`}
            key={index}
          >
            <img
              src={profile.img}
              alt=""
              onClick={() => {
                setSelectedProfile(index);
              }}
            />
            <div
              style={{
                display: `${selectedProfile === index ? 'block' : 'none'}`,
              }}
            >
              <div>
                <b>Last name:</b>
                {profile.lastName}
              </div>
              <div>
                <b>First name:</b>
                {profile.firstName}
              </div>
              <div>
                <b>Country: </b>
                {profile.country}
              </div>
              <div>
                <b>Type: </b>
                {profile.isStudent ? (
                  <span>Student</span>
                ) : (
                  <span>Teacher</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FaceBook;
