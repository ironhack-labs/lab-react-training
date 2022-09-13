import profilesData from '../../data/berlin.json';
import React, { useState } from 'react'


function countryList (profilesData) {
  const countries = profilesData.map((profiles) => profiles.country)

  const filteredStatus = [];

  const  uniqueChars = [...new Set(countries)];
  
  
  uniqueChars.forEach((element,i) => {
    filteredStatus[i] = {
      isActive : false,
      name : [element],
    }

  });

  return  filteredStatus
}


function FaceBook() {


const [profiles, setProfiles] = useState(profilesData)
const [active, setActive] = useState(false) 
const [countries, setCountries] = useState(countryList (profilesData)) // filtro de botones por pais


const handleClick = (e) => {
  const {value, name} = e.currentTarget 

console.log( name, [name][0], !active)

if(name === 'All'){
    setActive((prevState) => prevState ? false : true)
  } 
  else if(name === [name][0] && !active){
    const ironHackers = profiles.filter((country) => country.country === [name][0])
    setActive((prevState) => prevState ? false : true)
    setProfiles(ironHackers)
  } else if (name === [name][0] && active){
    setActive((prevState) => prevState ? false : true)
    setProfiles(profilesData)

  }

}

console.log(countries)


  return (
    <>
    <button className={`btn border-dark me-1 mb-1 ${active ? 'btn-primary' : ''}`} value='All' name='All' onClick={handleClick}>All</button>
    {countries.map((country, i) => {
      return (
        <button key={i} className={`btn border-dark me-1 mb-1 ${active ? 'btn-primary' : ''}`} value={country.isActive} name={country.name} onClick={handleClick}>{country.name}</button>
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