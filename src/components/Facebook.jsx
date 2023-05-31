import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const Facebook = () => {

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [shownProfiles, setShownProfiles] = useState(profiles)

  const handleCountryClick = (country) => {
    if (selectedCountry === country) {
      setSelectedCountry(''); 
    } else {
      setSelectedCountry(country); 
    }
  };
  

  const handleUserClick = (user) => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser !== user));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleSearchbarChange = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredProfiles = profiles.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query) ||
        user.country.toLowerCase().includes(query)
    );
    setShownProfiles(filteredProfiles);
  };
  

  const sortByName = () => {
    const copy = [...profiles]
    const sortedArray = copy.sort((a,b) => a.firstName.localeCompare(b.firstName))
    setShownProfiles(() => [...sortedArray])
  }

  const sortByLastname = () => {
    const copy = [...profiles]
    const sortedArray = copy.sort((a,b) => a.lastName.localeCompare(b.lastName))
    setShownProfiles(() => [...sortedArray])
  }

  const sortByCountry = () => {
    const copy = [...profiles]
    const sortedArray = copy.sort((a,b) => a.country.localeCompare(b.country))
    setShownProfiles(() => [...sortedArray])
  }

  const sortByType = () => {
    const copy = [...profiles];
    const sortedArray = copy.sort((a, b) => {
      if (a.isStudent && !b.isStudent) {
        return 1;
      } else if (!a.isStudent && b.isStudent) {
        return -1;
      }
      return 0;
    });
    setShownProfiles([...sortedArray]);
  };
  

  const uniqueCountries = [];
  profiles.forEach((user) => {
    if (!uniqueCountries.includes(user.country)) {
      uniqueCountries.push(user.country);
    }
  });

  return (
    <div>
      <div className="country-buttons">
      <div>
        <h2>Select country</h2>
      </div>
      <div className='action-buttons'>
        {uniqueCountries.map((country) => (
          <button
            key={country}
            className={`each-country-button ${selectedCountry === country ? 'active' : ''}`}
            onClick={() => handleCountryClick(country)}
          >
            {country}
          </button>
        ))}
        </div>
      </div>
      <div>
        <div>
            <h2>Action buttons</h2>
        </div>
        <div className="action-buttons">
            <button className="sort-button"  onClick={sortByName}>Order by Name</button>
            <button className="sort-button"  onClick={sortByLastname}>Order by Lastname</button>
            <button className="sort-button"  onClick={sortByCountry}>Order by Country</button>
            <button className="sort-button"  onClick={sortByType}>Order by Type</button>
        </div>
      </div>

      <div>
        <h2>Searchbox</h2>
        <input name="search" placeholder="Search profile" onChange={handleSearchbarChange} />
      </div>
      <div>
        {shownProfiles.map((user) => (
          <div
            key={`${user.firstName}-${user.lastName}-${user.country}`}
            className={`fb-user-card ${user.country === selectedCountry ? 'selected' : ''} ${
              selectedUsers.includes(user) ? 'expanded' : ''
            }`}
            onClick={() => handleUserClick(user)}
          >
            <div>
              <img className="fb-user-picture" src={user.img} alt="user" />
            </div>
            {selectedUsers.includes(user) && (
              <div className="fb-user-info">
                <p>
                  <b>First name:</b> {user.firstName}
                </p>
                <p>
                  <b>Last name:</b> {user.lastName}
                </p>
                <p>
                  <b>Country:</b> {user.country}
                </p>
                {user.isStudent && <p><b>Type:</b> Student</p>}
                {!user.isStudent && <p><b>Type:</b> Teacher</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facebook;
