import React, {useState} from 'react'
import profiles from '../../data/berlin.json';

const Facebook = () => {
  const allProfiles = [...profiles];
  const countries = [...new Set(allProfiles.map(profile => profile.country))]

  const initialState = {
      countrySelected: false,
  }
  
  const [state, setState] = useState(initialState)

  const createButtons = () => {return countries.map(country => (
    <button key={country} style={{
        backgroundColor: state.countrySelected === country ? 'lightblue' : 'white'
    }} onClick={() => handleClick(country)}>{country}</button>
  ))}


  const listProfiles = () => { return allProfiles.map(profile => (
    <div key={profile.lastName} style={{
            backgroundColor: state.countrySelected === profile.country ? 'lightblue' : 'white'
        }} className="idCard">
    <div>
        <img  style={{width: '200px', height: '200px'}} src={profile.img} alt="Profile pic" />
      </div>
      <div className="idCardText">
        <p>
          <span>First name:</span> {profile.firstName}
        </p>
        <p>
          <span>Last name:</span> {profile.lastName}
        </p>
        <p>
          <span>Country:</span> {profile.country}
        </p>
        <p>
          <span>Type:</span> {profile.isStudent ? 'Student' : 'Teacher'}
        </p>
      </div>
    </div>
  ))    
}

const handleClick = country => {
    setState(() => ({
        countrySelected: country,
    }))
}



  return (
    <div>
        <div>{createButtons()}</div>
        {listProfiles()}
    </div>
  );
};

export default Facebook;
