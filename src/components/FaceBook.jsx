import { useState } from 'react';
import profilesJSON from '../data/berlin.json';

function FaceBook() {
  const profiles = [...profilesJSON];
  const [country, setCountry] = useState('');

  return (
    <div>
      <div>
        <button onClick={() => setCountry('All')}>All</button>
        <button onClick={() => setCountry('England')}>England</button>
        <button onClick={() => setCountry('USA')}>USA</button>
        <button onClick={() => setCountry('Maylasia')}>Maylasia</button>
        <button onClick={() => setCountry('Germany')}>Germany</button>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {profiles.map((profile) => {
          let bgColor = 'white';
          if (country === profile.country) {
            bgColor = 'blue';
          }
          return (
            <div
              key={profile.firstName}
              style={{
                border: '1px solid black',
                backgroundColor: bgColor,
              }}
            >
              <div>
                <img src={profile.img} height="150px" alt={profile.firstName} />
                <p>
                  <strong>First Name: </strong>
                  {profile.firstName}
                </p>
                <p>
                  <strong>Last Name: </strong>
                  {profile.lastName}
                </p>
                <p>
                  <strong>Country: </strong>
                  {profile.country}
                </p>

                <p>
                  <strong>Type: </strong>
                  {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FaceBook;
