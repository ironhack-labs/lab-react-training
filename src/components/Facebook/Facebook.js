import React, { useState } from 'react'
import profiles from '../../data/berlin.json';

let countries = profiles.map(profile => profile.country)
countries = Array.from(new Set(countries))

function Facebook() {

  const [background, setBackground] = useState('white')

  return (
    <div>
      <div>
      <button onClick={() => setBackground('#8EDFFF')}>All</button>
        {countries.map((country => <button className='mx-2' >{country}</button>))}
      </div>
      <div className='d-flex flex-wrap justify-content-around'>
        {profiles.map((profile) => {
          return (
          <div style={{ backgroundColor: background }} key={profile.firstName} className='d-flex m-2 border border-dark p-2'>
            <div className='mx-2'>
              <img src={profile.img} alt={profile.firstName} height='150'/>
            </div>
            <div className='d-flex flex-column align-items-start'>
              <p className='m-0'>
                <span><b>First Name:</b></span> {profile.firstName}
              </p>
              <p className='m-0'>
                <span><b>Last Name:</b></span> {profile.lastName}
              </p>
              <p className='m-0'>
                <span><b>Country:</b></span> {profile.country}
              </p>
              <p className='m-0'>
                <span><b>Type:</b></span> {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
          )
        })} 
      </div> 
    </div>
  )
}

export default Facebook