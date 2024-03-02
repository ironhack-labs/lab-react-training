import { useState } from 'react';
import profilesData from '../data/berlin.json';
import Profile from './Profile';

// eslint-disable-next-line react/prop-types
export default function Facebook() {
  const [profiles, setProfiles] = useState(profilesData);

  const countries = {
    all: "All",
    usa: "USA",
    england: "England",
    malaysia: "Malaysia",
    germany: "Germany",
    italy: "Italy"
  }

  const changeBackground = (country) => {
    const updatedProfiles = profiles.map((prof) => {
        if(country == prof.country){
            prof.isFrom = true;
        }
        else{
            prof.isFrom = false;
        }
        // console.log({profile: prof})
        return prof;
    })
    setProfiles(updatedProfiles);
    console.log({profiles, updatedProfiles})
  }

  const displayProfiles = () => {
    return profiles.map((profile, index) => {
        return <Profile {...profile} key={index}/>
  })}

  return (
    <div className="facebook">
        <button className="button" onClick={() => changeBackground(countries.all)}>All</button>
        <button className="button" onClick={() => changeBackground(countries.england)}>England</button>
        <button className="button" onClick={() => changeBackground(countries.usa)}>Usa</button>
        <button className="button" onClick={() => changeBackground(countries.malaysia)}>Malaysia</button>
        <button className="button" onClick={() => changeBackground(countries.germany)}>Germany</button>
        <button className="button" onClick={() => changeBackground(countries.italy)}>Italy</button> 
        
        {displayProfiles()}
    </div>
  )
}
