import { useState } from 'react';

function FaceBook({ profiles }) {
  const [country, setCountry] = useState('');
  const profilesCopy = [...profiles];

  return (
    <div>
      <div>
        <button onClick={() => setCountry('All')}>All</button>
        <button onClick={() => setCountry('England')}>England</button>
        <button onClick={() => setCountry('USA')}>USA</button>
        <button onClick={() => setCountry('Maylasia')}>Maylasia</button>
        <button onClick={() => setCountry('Germany')}>Germany</button>
      </div>
      {profilesCopy.map((each) => {
        let bgColor = 'white';
        if (country === each.country) {
          bgColor = 'blue';
        }
        return (
          <div
            style={{
              display: 'flex',
              border: '1px solid black',
              backgroundColor: bgColor,
            }}
          >
            <img
              src={each.img}
              alt=""
              style={{ width: '120px', height: '120px' }}
            ></img>
            <div>
              <p>First Name:{each.firstName}</p>
              <p>Last Name: {each.lastName}</p>
              <p>Country: {each.country}</p>
              {each.isStudent ? <p>Type: Student</p> : <p>Type: Teacher</p>}
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default FaceBook;
