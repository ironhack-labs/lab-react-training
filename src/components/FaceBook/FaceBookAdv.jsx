import React, { useState } from 'react';
import './FaceBook.css';
import profiles from '../../data/berlin.json';

const FacebookProfile = ({ profiles, selectCountry }) => {
  return (
    <div>
      {profiles.map((newProfile, index) => {
        return (
          <div
            className="fbcard fbbox"
            key={(newProfile.lastName, index)}
            style={
              selectCountry === newProfile.country || selectCountry === 'All'
                ? { backgroundColor: 'lightblue' }
                : {}
            }
          >
            <img
              src={newProfile.img}
              alt="fb-profile-img"
              className="fb-profile-img"
            />
            <div className="fb-profile-info">
              <p>
                <strong>Firstname:</strong>
                {newProfile.firstName}
              </p>
              <p>
                <strong>Lastname:</strong>
                {newProfile.lastName}
              </p>
              <p>
                <strong>Country:</strong>
                {newProfile.country}
              </p>
              <p>
                <strong>Type:</strong>
                {newProfile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const FaceBookAdv = () => {
  const allProfiles = profiles;

  const [selectCountry, setSelectCountry] = useState('');
  function handleClick(event) {
    setSelectCountry(event.target.value);
  }

  const profilesGroupedByCountry = allProfiles.reduce((result, currentValue) => { 
    if (!result.includes(currentValue['country']))
      result.push(currentValue['country']);
    return result;
    },['All']);

  return (
    <div>
      {profilesGroupedByCountry.map((profile, index) => (
        <span key={index}>
          <button value={profile} onClick={handleClick}>
            {profile}
          </button>
        </span>
      ))}
      <FacebookProfile
        profiles={allProfiles} selectCountry={selectCountry}
      />
    </div>
  );
};
