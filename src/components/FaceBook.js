import React from 'react';
import profiles from '../data/berlin.json';
import '../App.css';
import { useState } from 'react';
import { Search } from './Search';

export const FaceBook = () => {
  const [userProfiles, setUserProfiles] = useState(profiles);

  const sortCountryBtn = () => {
    const sortedUsers = userProfiles.sort((a, b) => {
      if (a.country.toLowerCase() < b.country.toLowerCase()) {
        return -1;
      }
      if (a.country.toLowerCase() > b.country.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    setUserProfiles([...sortedUsers]);
  };

  const sortLastNameBtn = () => {
    const sortedUsers = userProfiles.sort((a, b) => {
      if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
        return -1;
      }
      if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    setUserProfiles([...sortedUsers]);
  };

  const filterByCountry = (country) => {
    let cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      if (card.innerHTML.includes(`Country: ${country}`)) {
        card.style.backgroundColor = 'lightblue';
      } else {
        card.style.backgroundColor = 'white';
      }
    });
  };

  const [userClicked, setUserClicked] = useState([]);

  const showUserInfo = (e) => {
    const userFound = profiles.find((user) => {
      return user.lastName === e;
    });
    setUserClicked(userFound);
  };

  const searchFilter = (str) => {
    let filterItems = [];

    if (str === '') {
      filterItems = [...profiles];
    } else {
      const inputStr = str.toLowerCase();
      filterItems = profiles.filter((profile) =>
        profile.firstName.toLowerCase().includes(inputStr)
      );
    }
    setUserProfiles(filterItems);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={() => filterByCountry('USA')}>USA</button>
        <button onClick={() => filterByCountry('Malaysia')}>Malaysia</button>
        <button onClick={() => filterByCountry('England')}>England</button>
        <button onClick={() => filterByCountry('Germany')}>Germany</button>

        <button onClick={sortCountryBtn}>Sort by country</button>
        <button onClick={sortLastNameBtn}>Sort by last name</button>
      </div>

      <Search searchFilter={searchFilter} />

      {userProfiles.map((user, index) => {
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              border: '1px solid grey',
              width: '600px',
            }}
            className="card"
          >
            <img
              src={user.img}
              alt="profile-pic"
              style={{ width: '150px', height: '150px' }}
              onClick={() => showUserInfo(user.lastName)}
            />
            {userClicked.lastName === user.lastName ? (
              <div style={{ textAlign: 'left' }}>
                <h3>First name: {userClicked.firstName}</h3>
                <h3>Last name: {userClicked.lastName}</h3>
                <h3>Country: {userClicked.country}</h3>
                {!userClicked.isStudent ? <h3>Teacher</h3> : <h3>Student</h3>}
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </>
  );
};
