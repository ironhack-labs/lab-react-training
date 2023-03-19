import React, { useState, useEffect } from 'react';
import data from '../data/berlin.json';

function AdvancedFacebook() {
  const [profilesList, setProfilesList] = useState([]);
  const [filteredProfilesList, setFilteredProfilesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    setProfilesList(data);
    setFilteredProfilesList(data);
  }, []);


  const countries = [...new Set(profilesList.map((profile) => profile.country))];


  const handleCountryClick = (country) => {
    setSelectedCountry(country);

    if (country === '') {
      setFilteredProfilesList(profilesList);
    } else {
      setFilteredProfilesList(profilesList.filter((profile) => profile.country === country));
    }
  };

  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-4">List of Profiles</h1>
      <div className="my-4">

        {countries.map((country) => (
          <button 
            key={country} 
            onClick={() => handleCountryClick(country)} 
            className={`bg-blue-500 hover:bg-blue-700 text-white 
              font-bold py-2 px-4 rounded mr-2 mb-2
              ${selectedCountry === country ? 'bg-blue-700' : ''} 
              ${filteredProfilesList.some((profile) => profile.country === country) ? 'bg-blue-300' : ''}`}
          >
            {country}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">

        {profilesList.map((profile) => (
          <div 
            className={` p-4 rounded-lg shadow ${profile.country === selectedCountry ? 'bg-blue-500' : filteredProfilesList.some((p) => p.id === profile.id && p.country === selectedCountry) ? 'bg-white' : ''}`} 
            key={profile.id}
          >
            <img src={profile.img} alt="profilePic" className="w-full mb-4 rounded-lg"/>
            <h2 className="text-base font-bold mb-2">{profile.firstName} {profile.lastName}</h2>
            <p className="text-sm mb-1">Country: {profile.country}</p>
            <p className="text-sm mb-1">Type: {profile.isStudent ? 'Student' : 'Teacher'}</p> 
          </div>
        ))}
      </div>
      <p className="text-sm mb-1">{filteredProfilesList.length} profiles found for {selectedCountry}</p>
    </div>
  );
}

export default AdvancedFacebook;