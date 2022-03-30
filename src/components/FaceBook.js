import React from 'react';
import profiles from '../data/berlin.json';
import '../App.css';

export const FaceBook = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button>USA</button>
        <button>Malaysia</button>
        <button>England</button>
        <button>Germany</button>
      </div>
      {profiles.map((user, index) => {
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
            />
            <div style={{ textAlign: 'left' }}>
              <h3>First name: {user.firstName}</h3>
              <h3>Last name: {user.lastName}</h3>
              <h3>Country: {user.country}</h3>
              {!user.isStudent ? <h3>Teacher</h3> : <h3>Student</h3>}
            </div>
          </div>
        );
      })}
    </>
  );
};
