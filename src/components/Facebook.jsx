import React, { useState } from 'react'
import profiles from '../data/berlin.json'

function Facebook() {

  const countries = Array.from(new Set(profiles.flatMap(profile => profile.country)))
  const [background, setBackground] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")

  const handleOnClick = (event) => {
    const country = event.target.value
    setSelectedCountry(country)

  }

  return (
    <div className='text-center d-flex justify-content-center flex-column align-items-center'>
      <div>
        {countries.map(country => <button
          onClick={handleOnClick}
          value={country}
          className={`btn m-1 mb-4 ${country === selectedCountry ?  'btn-primary active' : 'btn-light'}`} >
          {country}
        </button>)}
      </div>

      <div style={{ width: 600, backgroundColor: 'white' }}>
        {profiles.map((profile, index) => <Profile profile={profile} selectedCountry={selectedCountry} />)}
      </div>
    </div>
  )
}

export default Facebook


function Profile({ profile, selectedCountry }) {

  const { firstName, lastName, country, isStudent, img } = profile
  return (
    <div className={`d-flex flex-row mb-3 border border-dark m-2 ${country === selectedCountry ? 'bg-primary text-white' : ''}`}>
      <div>
        <img style={{ width: 125 }} className="m-2" src={img} alt={`${firstName} ${lastName} profile`} />
      </div>
      <div className="mt-2 ms-4 text-start">
        <p className="m-0">First Name: {firstName}</p>
        <p className="m-0">Last Name: {lastName}</p>
        <p className="m-0">Country: {country}</p>
        <p className="m-0">Type: {isStudent ? "Student" : "Teacher"}</p>
      </div>
    </div>
  )
}

Profile.defaultProps = {
  firstName: "",
  lastName: "",
  country: "",
  isStudent: true
};
