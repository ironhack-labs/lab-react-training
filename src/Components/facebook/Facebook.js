import React from 'react';
import profiles from '../../data/berlin.json';
import './Facebook.css';

export default function Facebook() {
  const [selected, setSelected] = React.useState('');
  let buttonsArr = [];

  profiles.forEach((el) => {
    if (!buttonsArr.includes(el.country)) {
      buttonsArr.push(el.country);
    }
  });

  const buttons = buttonsArr.map((el, index) => {
    return (
      <div key={index} className="button">
        <button onClick={selectCountry}>{el}</button>
      </div>
    );
  });

  function selectCountry(event) {
    profiles.forEach((el) => {
      if (el.country === event.target.innerText) {
        setSelected(event.target.innerText);
      }
    });
  }

  const allProfiles = profiles.map((el, index) => {
    return (
      <div
        key={index}
        style={
          el.country === selected
            ? { backgroundColor: 'lightblue' }
            : { backgroundColor: 'white' }
        }
      >
        <div>
          <img className="profileImage" src={el.img} alt="that guy profile" />
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
      <div className="buttonsContainer">{buttons}</div>
      <div>{allProfiles}</div>
    </div>
  );
}
