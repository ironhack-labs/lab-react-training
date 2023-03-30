import React, { useState } from 'react'
import profiles from '../data/berlin.json'

function Facebook() {

  const [selectedCountry, setSelectedCountry] = useState('')

  const countries = Array.from(new Set(profiles.flatMap(profileCountry => profileCountry.country)))

  const handleClick = (event) => {
   setSelectedCountry(event.target.value)
  }

  return (
    <div>
      <div >{(countries.map(country => <button className={selectedCountry === country ? "blue" : ""} value={country} key={country} onClick={handleClick}>{country}</button>))}</div>
      <div>{profiles.map(profiles => <Profile profiles={profiles} key={profiles.lastName} selectedCountry={selectedCountry} />)}</div>
    </div>
  )
}

export default Facebook




function Profile({ profiles, selectedCountry }) {
  return (
    <div className={ selectedCountry === profiles.country ? "d-flex flex-row mb-3 border border-1 border-dark m-3 bg-primary" : "d-flex flex-row mb-3 border border-1 border-dark m-3"}>
      <div>
        <img className="m-2" src={profiles.img} style={{ width: 150 }} alt="ProfilePicture" />
      </div>
      <div className="mt-2 me-5">
        <p className="m-0"><b> First Name: </b> {profiles.firstName}</p>
        <p className="m-0"><b> Last Name: </b> {profiles.lastName}</p>
        <p className="m-0"><b> Country: </b> {profiles.country}</p>
        <p className="m-0"><b> Type: </b> {profiles.isStudent ? "Student" : "Teacher"}</p>
      </div>
    </div>
  )
}

