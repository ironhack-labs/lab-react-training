import { useState } from 'react';
import { Profiler } from 'react/cjs/react.production.min';
import profiles from './data/berlin.json';

function FaceBook() {
  const [state, setState] = useState('All');

  const countries = ['England', 'USA', 'Malaysia', 'Germany'];

  function handleClick(event) {
    setState(event.target.name);
  }

  return (
    <div>
      <ul className="filters">
        <li key="All">
          <button
            name="All"
            onClick={handleClick}
            style={{ backgroundColor: state === 'All' ? 'aqua' : 'white' }}
          >
            All
          </button>
        </li>
        {countries.map((country) => (
          <li key={country}>
            <button
              name={country}
              onClick={handleClick}
              style={{ backgroundColor: state === country ? 'aqua' : 'white' }}
            >
              {country}
            </button>
          </li>
        ))}
        <li key="Other">
          <button
            name="Other"
            onClick={handleClick}
            style={{ backgroundColor: state === 'Other' ? 'aqua' : 'white' }}
          >
            ...
          </button>
        </li>
      </ul>

      {profiles.map((profile) => (
        <div
          className="id-card"
          key={profile.lastName}
          style={{
            backgroundColor:
              state === profile.country ||
              state === 'All' ||
              (state === 'Other' && !countries.includes(profile.country))
                ? 'aqua'
                : 'white',
          }}
        >
          <img src={profile.img}></img>
          <div>
            <b>First Name:</b> {profile.firstName}
            <br />
            <b>Last Name:</b> {profile.lastName}
            <br />
            <b>Country:</b> {profile.country}
            <br />
            <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
