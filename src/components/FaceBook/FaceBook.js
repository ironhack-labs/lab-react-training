import profilesData from '../../data/berlin.json';
import React, { useState } from 'react'
import { useEffect } from 'react';



function countryList (profilesData) {
  const countries = profilesData.map((profiles) => profiles.country)
  const  uniqueChars = [...new Set(countries)];
  return  uniqueChars
}



function FaceBook() {



const [profiles, setProfiles] = useState(profilesData)
const [active, setActive] = useState(false)
const [countries, setCountries] = useState(countryList (profilesData))


const handleClick = (e) => {
  const {value} = e.target

  console.log()
  
  if(value === 'All'){
    setActive((prevState) => prevState ? false : true)
    setProfiles(profilesData)

  } else if(value === "England" && !active){
    const englandHacks = profiles.filter((country) => country.country === "England")
    setActive((prevState) => prevState ? false : true)
    setProfiles(englandHacks)
  } else if (value === "England" && active){
    setActive((prevState) => prevState ? false : true)
    setProfiles(profilesData)
  }
  
    else if(value === "USA" && !active){
    const englandHacks = profiles.filter((country) => country.country === "USA")
    setActive((prevState) => prevState ? false : true)
    setProfiles(englandHacks)
  } else if (value === "USA" && active){
    setActive((prevState) => prevState ? false : true)
    setProfiles(profilesData)
  }

  else if(value === "Germany" && !active){
    const englandHacks = profiles.filter((country) => country.country === "Germany")
    setActive((prevState) => prevState ? false : true)
    setProfiles(englandHacks)
  } else if (value === "Germany" && active){
    setActive((prevState) => prevState ? false : true)
    setProfiles(profilesData)
  }

  else if(value === "Italy" && !active){
    const englandHacks = profiles.filter((country) => country.country === "Italy")
    setActive((prevState) => prevState ? false : true)
    setProfiles(englandHacks)
  } else if (value === "Italy" && active){
    setActive((prevState) => prevState ? false : true)
    setProfiles(profilesData)
  }

  else if(value === [value][0] && !active){
    const englandHacks = profiles.filter((country) => country.country === [value][0])
    setActive((prevState) => prevState ? false : true)
    setProfiles(englandHacks)
  } else if (value === [value][0] && active){
    setActive((prevState) => prevState ? false : true)
    setProfiles(profilesData)
  }


}


  return (
    <>
    <button className={`btn border-dark me-1 mb-1 ${active ? 'btn-primary' : ''}`} value='All' onClick={handleClick}>All</button>
    {countries.map((country, i) => {
      return (
        <button key={i} className={`btn border-dark me-1 mb-1 ${active ? 'btn-primary' : ''}`} value={country} onClick={handleClick}>{country}</button>
      )
    })}


        {profiles.map((profile, i) => {
          return (
          <div className={`row d-flex justify-content-start align-items-center border border-dark m-5  ${active ? 'bg-primary' : ''}`} key={i}>
            <div className='col-2 p-0'>
                <img src={profile.img} alt={profile.firstName} className='w-100'/>
              </div>
              <div className='col-10 p-0 p-3'>
                <p className='m-0'><strong>First name:</strong> {profile.firstName}</p>
                <p className='m-0'><strong>Last name:</strong> {profile.lastName}</p>
                <p className='m-0'><strong>Country:</strong> {profile.country}</p>
                <p className='m-0'><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'} </p>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default FaceBook