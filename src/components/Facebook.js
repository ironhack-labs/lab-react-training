import React, { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
    const [activeCountry, setActiveCountry] = useState('all');
    let list = [];
    for (let ii = 0; ii <= profiles.length -1; ii++) {
        let evaluatedCountry = profiles[ii].country
        if(!list.includes(evaluatedCountry)){
            list.push(evaluatedCountry)
        }
    }


  return (
    <div style={{ margin: '10px' }}>
      <button value="all" onClick={(e) => setActiveCountry(e.target.value)}>
          All
        </button>

        {list.map((item, index) => (
          <button
            value={item}
            onClick={(e) => setActiveCountry(e.target.value)}
          >
            {item}
          </button>
        ))}

      {profiles.map((item, index) => (
        <div
          style={{ display: 'flex', margin: '10px', border: 'solid black 1px', backgroundColor:item.country === activeCountry ? "cyan" : "white" }}
        >
          <img src={item.img} style={{ width: 200, height: 200 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>
              <b>First Name: </b>
              {item.firstName}
            </p>
            <p>
              <b>Last Name: </b>
              {item.lastName}
            </p>
            <p>
              <b>Country Name: </b>
              {item.country}
            </p>
            <p>
              <b>Type: </b>
              {item.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facebook;
