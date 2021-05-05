import profiles from './data/berlin.json';
import React from 'react';
import './index.css';

export default function Facebook() {
  const profilesCopy = [...profiles];
  const display = profilesCopy.map((profile, index) => {
    return (
      <div key={ index } className="cardContainer">
        <img height="150px" src={ profile.img } alt="Student" />
        <div>
          <strong>First name: </strong>{ profile.firstName }<br />
          <strong>Last name: </strong>{ profile.lastName }<br />
          <strong>Country: </strong>{ profile.country }<br />
          <strong>Type: </strong>{ profile.isStudent ? 'Student' : 'Teacher' }<br />
        </div>
      </div>
    )
  })
  const bgHandler = () => {
    console.log('hello');

  }

  const countries = [];
  for (let profile of profiles) {
    if (!countries.includes(profile.country)) {
      countries.push(profile.country)
    }
  }
  const countryButtons = countries.map(country => {
    return <button onClick={ bgHandler }>{ country }</button>
  })

  return (
    <div>
      {countryButtons }
      {display }
    </div>
  )
}