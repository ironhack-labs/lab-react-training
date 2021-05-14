import React from 'react';
import profiles from '../../data/berlin.json';

export default function Facebook() {
  const [state, setState] = React.useState('');

  const buttons = profiles.map((el, index) => {
    return (
      <div key={index}>
        <button onClick={selectCountry}>{el.country}</button>
      </div>
    );
  });

  function selectCountry(event) {
    const colorChange = profiles.map((el) => {
      if (el.country === event.target.innerText) {
        setState('lightblue');
      }
    });
  }

  const allProfiles = profiles.map((el, index) => {
    return (
      <div key={index} style={{ backgroundColor: state }}>
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

  return (
    <div>
      <div>{buttons}</div>
      <div>{allProfiles}</div>
    </div>
  );
}
