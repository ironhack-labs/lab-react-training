import profiles from '../../data/berlin.json';
import React from 'react'

function FaceBook() {
  
  return (
    <>
        {profiles.map((profile) => {
          return (
          <div className='row d-flex justify-content-start align-items-center border border-dark m-5'>
            <div className='col-2 p-0'>
                <img src={profile.img} alt={profile.firstName} className='w-100'/>
              </div>
              <div className='col-10 p-0 p-3'>
                <p className='m-0'><strong>First name:</strong> {profile.firstName}</p>
                <p className='m-0'><strong>Last name:</strong> {profile.lastName}</p>
                <p className='m-0'><strong>Country:</strong> {profile.country}</p>
                <p className='m-0'><strong>Type:</strong> {profile.isStudent} </p>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default FaceBook