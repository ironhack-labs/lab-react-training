import React from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
  return (
    <div>
      {profiles.map((el) => {
        return (
          <div
            style={{
              border: '1px solid black',
              display: 'flex',
              margin: '2rem',
            }}
          >
            <div>
              <img style={{ width: '150px' }} src={el.img} />
            </div>
            <div>
              <p>First name: {el.firstName}</p>
              <p>Last name: {el.lastName}</p>
              <p>County: {el.country}</p>
              <p>Type: {el.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Facebook;
