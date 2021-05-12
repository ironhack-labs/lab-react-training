import React from 'react';
import profiles from '../../data/berlin.json';

export default function Facebook() {
  const allProfiles = profiles.map((el, index) => {
    return (
      <div key={index}>
        <div>
          <img src={el.img} alt="that guy profile" />
        </div>
        <p>First name: {el.firstName}</p>
        <p>Last name: {el.lastName}</p>
        <p>Country: {el.country}</p>
        <p>Type: {el.isStudent ? 'Student' : 'Teacher'}</p>
      </div>
    );
  });

  return <div>{allProfiles}</div>;
}
