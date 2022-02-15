import React, { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
  const profilesArray = [...profiles];
  // const [data, setData] = useState(profilesArray);

  const countriesArr = [];
  profiles.map((p) => {
    if (!countriesArr.includes(p.country)) {
      countriesArr.push(p.country);
    }
  });

  const handleCountries = (country) => {
    profiles.map((p) => {
        if (p.country === country) {
           return 'lightblue'
        }
      });
  }

  return (
    <div>
      <div className="buttons">
        <button >All</button>
        {countriesArr.map((elm) => {
          return <button onClick={() => handleCountries(elm)}>{elm}</button>;
        })}
      </div>
      {profilesArray.map((elm) => {
        return <SingleProfile profile={elm} />;
      })}
    </div>
  );
}

function SingleProfile(props) {

    const style = {
        backgroundColor: props.bgColor
    }

  return (
    <div className="id-card-box" style={style}>
      <img src={props.profile.img} alt="" />
      <div className="id-content">
        <p>
          <strong>First Name:</strong> {props.profile.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {props.profile.lastName}
        </p>
        <p>
          <strong>Country:</strong> {props.profile.country}
        </p>
        <p>
          <strong>Type:</strong>{' '}
          {props.profile.isStudent ? 'Student' : 'Teacher'}
        </p>
      </div>
    </div>
  );
}

export default Facebook;
