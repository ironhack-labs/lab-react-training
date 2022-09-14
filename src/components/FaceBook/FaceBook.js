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
const [search, setSearch] = useState('All') 


const handleClick = (event) => {
  const {name} = event.currentTarget

  if(name === 'All'){
    setSearch('All')
  } else {
    setSearch(name)
  }
}

  return (
    <>
    <button className={`btn border-dark me-1 mb-1 ${search === 'All' ? 'btn-primary' : ''}`} value='All' name='All' onClick={handleClick}>All</button>
    {countryList(profilesData).map((country, i) => {
      return (
        <button key={i} className={`btn border-dark me-1 mb-1 ${(search == country.name)  ? 'btn-primary' : ''}`} name={country.name} onClick={handleClick}>{country.name}</button>
      )
    })}

        {profilesData.filter((hackers) => {
          if (search === hackers.country){
            return true
          } else if (search === 'All'){
            return true
          }
          }).map((profile, i) => {
          return (
          <div className={`row d-flex justify-content-start align-items-center border border-dark m-5  ${true ? 'bg-primary' : ''}`} key={i}>
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