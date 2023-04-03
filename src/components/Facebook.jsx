import React, { useState } from 'react'
import profiles from '../data/berlin.json'

function Facebook() {

  const [selectedCountry, setSelectedCountry] = useState('')
  const [input, setInput] = useState('')

  const countries = Array.from(new Set(profiles.flatMap(profileCountry => profileCountry.country)))

  const handleClick = (event) => {
   setSelectedCountry(event.target.value)
   console.log(event.target.value)
  }

  const handleOnChange = (event) => {
    const { value } = event.target
    setInput(value)
  }



  return (
    <div className='m-3'>
      <div ><button onClick={handleClick} value="All" className={selectedCountry === "All" ? "btn bg-primary" : "btn btn-secondary"} >All</button>{(countries.map(country => <button className={selectedCountry === country ? "btn bg-primary" : "btn btn-secondary"} value={country} key={country} onClick={handleClick}>{country}</button>))}</div>
      <div className='mt-3'>
        <label htmlFor="" className='me-1'>Search</label>
        <input className='rounded' type="text" value={input} placeholder="Search..." onChange={handleOnChange}/>
      </div>
      <div>{profiles
        .filter(profiles => profiles.firstName.toLocaleLowerCase().includes(input.toLowerCase()))
        .map(profiles => <Profile profiles={profiles} key={profiles.lastName} selectedCountry={selectedCountry} />)}
        </div>
    </div>
  )
}

export default Facebook




function Profile({ profiles, selectedCountry }) {

  const [displayInfo, setDisplayInfo] = useState(false)

  const color = selectedCountry === profiles.country ? "bg-primary" : ""

  const handleInformation = () => {
    setDisplayInfo(!displayInfo)
  }

  return (
    <div className={`d-flex flex-row mb-3 border border-1 border-dark m-3 ${color}`}>
      <div>
        <img className="m-2" src={profiles.img} style={{ width: 150 }} alt="ProfilePicture" onClick={handleInformation} />
      </div>
      {displayInfo && (<>
      <div className="mt-2 me-5">
        <p className="m-0"><b> First Name: </b> {profiles.firstName}</p>
        <p className="m-0"><b> Last Name: </b> {profiles.lastName}</p>
        <p className="m-0"><b> Country: </b> {profiles.country}</p>
        <p className="m-0"><b> Type: </b> {profiles.isStudent ? "Student" : "Teacher"}</p>
      </div>
      </> )}
    </div>
  )
}

