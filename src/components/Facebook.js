import React, { useState } from 'react';
import profiles from '../data/berlin.json';


export default function Facebook() {
  const [allProfiles, setAllProfiles] = useState(profiles);

  let [selectedCountry, setNameCountry] = useState('');

  function uniqueCountry() {
    return [ ...new Set(
      allProfiles.map((e) => {
        return e.country;
      }),
    )]
  }

  const newList = uniqueCountry();


  function nameCountry (name) {
      console.log(name)
       return setNameCountry(name)
  }

  return (
    <div>
      {newList.map((e) => {
        return <button  onClick={() => nameCountry(e)} >{e}</button>;
      })}
      {allProfiles.map((e) => {
        return (
          <>
            <div style={{backgroundColor: `${e.country === selectedCountry ? 'lightblue' : 'white'}`, border:'1px solid'}}>
              <img width= '100' src={e.img} />
              <p>First name: {e.firstName}</p>
              <p>Last name: {e.lastName}</p>
              <p>Country: {e.country}</p>
              <p>Type: {e.isStudent ? 'student' : 'teacher'}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}



