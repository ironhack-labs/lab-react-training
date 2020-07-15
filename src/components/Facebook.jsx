import React, { useState } from 'react';
import FbProfile from './FbProfile';
import FilterButton from './FilterButton';
import profiles from '../data/berlin.json';

export default function Facebook() {
  const [currentCountry, setCurrentCountry] = useState('');

  const renderFBProfiles = profiles.map((user, idx) => {
    const isSelectedCountry = currentCountry === user.country;
    const bgColor = isSelectedCountry ? 'lightblue' : 'white';
    return (
      <FbProfile
        firstName={user.firstName}
        lastName={user.lastName}
        country={user.country}
        isStudent={user.isStudent}
        img={user.img}
        key={idx}
        bgColor={bgColor}
      />
    );
  });

  const uniqueCountries = [...new Set(profiles.map((e) => e.country))];

  const renderFilterButtons = uniqueCountries.map((e) => {
    const isSelectedCountry = currentCountry === e;
    const bgColor = isSelectedCountry ? 'lightblue' : 'white';
    return (
    <FilterButton 
        filterName={e} 
        key={e} 
        bgColor={bgColor}
        filter={setCurrentCountry}
        />)
});

  return (
    <div>
      <FilterButton filterName={"Disable"} filter={setCurrentCountry}/>
      {renderFilterButtons}
      {renderFBProfiles}
    </div>
  );
}
