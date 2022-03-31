import React from 'react';
import profiles from '../data/berlin.json';
import '../App.css';
import { useState } from 'react';

export const FaceBook = () => {
  const [userProfiles, setUserProfiles] = useState(profiles);

  // const sortBtn = () => {
  //   const sortedUsers = userProfiles.sort((a, b) => {
  //     return b.lastName - a.lastName;
  //   });

  //   console.log(sortedUsers, 'sorted');
  //   console.log(userProfiles, 'not sorted');
  //   setUserProfiles(sortedUsers);
  // };

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

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={() => filterByCountry('USA')}>USA</button>
        <button onClick={() => filterByCountry('Malaysia')}>Malaysia</button>
        <button onClick={() => filterByCountry('England')}>England</button>
        <button onClick={() => filterByCountry('Germany')}>Germany</button>

        {/* <button onClick={sortBtn}>Sort</button> */}
      </div>

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
