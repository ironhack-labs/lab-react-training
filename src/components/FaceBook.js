import React from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
  const allCountries = [];

  const allProfiles = profiles.map((user, index) => {
    let type;
    if (user.isStudent) {
      type = 'Student';
    } else {
      type = 'Teacher';
    }

    if (allCountries.includes(user.country) === false) {
      allCountries.push(user.country);
    }

    return (
      <div key={index} className="id-card">
        <img src={user.img} alt="avatar" />
        <div>
          <p>
            <strong>First name: </strong>
            {user.firstName}
          </p>
          <p>
            <strong>Last name: </strong>
            {user.lastName}
          </p>
          <p>
            <strong>Country: </strong>
            {user.country}
          </p>
          <p>
            <strong>Type: </strong>
            {type}
          </p>
        </div>
      </div>
    );
  });

  const allButtons = allCountries.map((element, index) => {
    return <button key={index}>{element}</button>;
  });

  return (
    <div>
      {allButtons}
      {allProfiles}
    </div>
  );
}

export default FaceBook;
