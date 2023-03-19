import React, { useState, useEffect } from 'react';
import data from '../data/berlin.json';

function AdvancedFacebook() {
  const [profilesList, setProfilesList] = useState([]);
  const [filteredProfilesList, setFilteredProfilesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [displayedProfile, setDisplayedProfile] = useState(null);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    setProfilesList(data);
    setFilteredProfilesList(data);
  }, []);

  useEffect(() => {
    filterProfiles();
  }, [selectedCountry, searchString, sortCriteria]);

  const countries = [...new Set(profilesList.map((profile) => profile.country))];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };
  
  const handleShowAllClick = () => {
    setSelectedCountry('');
  };

  const handlePictureClick = (profile) => {
    setDisplayedProfile(profile);
  };

  const handleSortClick = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleSearchInputChange = (event) => {
    setSearchString(event.target.value);
  };

  const compareProfiles = (profileA, profileB) => {
    if (sortCriteria === 'name') {
      return profileA.lastName.localeCompare(profileB.lastName);
    } else if (sortCriteria === 'country') {
      return profileA.country.localeCompare(profileB.country);
    } else if (sortCriteria === 'type') {
      return profileA.isStudent - profileB.isStudent;
    } else {
      return 0;
    }
  };

  const filterProfiles = () => {
    const filteredByCountry = selectedCountry === '' ? profilesList : profilesList.filter((profile) => profile.country === selectedCountry);
    const filteredBySearchString = searchString === '' ? filteredByCountry : filteredByCountry.filter((profile) => {
      const fullName = `${profile.firstName.toLowerCase()} ${profile.lastName.toLowerCase()}`;
      const parts = searchString.toLowerCase().split(' ');
      for (let i = 0; i < parts.length; i++) {
        if (!fullName.includes(parts[i])) {
          return false;
        }
      }
      return true;
    });
    const sortedProfiles = filteredBySearchString.sort(compareProfiles);
    setFilteredProfilesList(sortedProfiles);
    setDisplayedProfile(null);
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
        <button 
          onClick={() => handleShowAllClick()} 
          className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2`}
        >
          Show All
        </button>
      </div>
      <div className="my-4">
        <input type="text" placeholder="Search profiles" className="px-2 py-1 border border-gray-400 rounded" value={searchString} onChange={handleSearchInputChange} />
      </div>
      <div className="my-4">
        <button onClick={() => handleSortClick('name')} className={`px-2 py-1 rounded ${sortCriteria === 'name' ? 'bg-gray-300' : ''}`}>Sort by Name</button>
        <button onClick={() => handleSortClick('country')} className={`px-2 py-1 rounded ${sortCriteria === 'country' ? 'bg-gray-300' : ''}`}>Sort by Country</button>
        <button onClick={() => handleSortClick('type')} className={`px-2 py-1 rounded ${sortCriteria === 'type' ? 'bg-gray-300' : ''}`}>Sort by Type</button>
      </div>
      {displayedProfile ? (
        <div className="w-full md:w-1/2 mx-auto">
          <img src={displayedProfile.img} alt="profilePic" className="w-full mb-4 rounded-lg"/>
          <h2 className="text-base font-bold mb-2">{displayedProfile.firstName} {displayedProfile.lastName}</h2>
          <p className="text-sm mb-1">Country: {displayedProfile.country}</p>
          <p className="text-sm mb-1">Type: {displayedProfile.isStudent ? 'Student' : 'Teacher'}</p>
          <button onClick={() => setDisplayedProfile(null)} className="mt-4 px-2 py-1 bg-gray-300 rounded">Back to List</button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {filteredProfilesList.map((profile) => (
            <div 
              className={` p-4 rounded-lg shadow ${profile.country === selectedCountry ? 'bg-blue-500' : 'bg-white'}`} 
              key={profile.id}
            >
              <img src={profile.img} alt="profilePic" className="w-full mb-4 rounded-lg cursor-pointer" onClick={() => handlePictureClick(profile)}/>
              <h2 className="text-base font-bold mb-2">{profile.firstName} {profile.lastName}</h2>
              <p className="text-sm mb-1">Country: {profile.country}</p>
              <p className="text-sm mb-1">Type: {profile.isStudent ? 'Student' : 'Teacher'}</p> 
            </div>
          ))}
        </div>
      )}
      <p className="text-sm mb-1">{filteredProfilesList.length} profiles found for {selectedCountry}</p>
    </div>
  );
}

export default AdvancedFacebook;