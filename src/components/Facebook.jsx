import profilesData from '../data/berlin.json';
import { useState } from 'react';

function Facebook(props) {
  const [profiles, setProfiles] = useState(profilesData);

  const countries = [];

  profiles.forEach(profile => {
    if (countries.includes(profile.country) === false)
      countries.push(profile.country);
  });

  const style = {
    backgroundColor: 'blue',
    color: 'white'
  };

  const setBackground = (country) => {
    const profilesWithStyle = profiles.map(profile => {
      if (profile.country === country)
        profile.style = style;
      else if (profile.style !== null)
        profile.style = null;
      return (profile);
    });
    setProfiles(profilesWithStyle);
  };

  return (
    <div className="profilesContainer">
      <div className="countries">
        {countries.map(country => {
          return (<button key={country} className="countryBtn" onClick={() => setBackground(country)}>{country}</button>);
        })}
      </div>
      {profiles.map(profile => {
        return (
          <div className='Facebook box' style={profile.style} key={profile.firstName + profile.lastName}>
            <img alt="picture" src={`${profile.img}`}/>
            <ul>
              <li><b>First name: </b>{profile.firstName}</li>
              <li><b>Last name: </b>{profile.lastName}</li>
              <li><b>Country: </b>{profile.country}</li>
              <li><b>Type: </b>{profile.isStudent === true ? 'Student' : 'Teacher'}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Facebook;
