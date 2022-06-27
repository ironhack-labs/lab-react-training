import React from 'react'

import profiles from '../data/berlin.json';
import './FaceBook.css'

export default function FaceBook() {
    console.log(profiles)
  return (
    <div className="FaceBook">
      {profiles.map(profile=>{
        return (
          <div className='FBCard'>
            <img src={profile.img} />
            <div className="rightSide">
              <p><strong>First name:</strong> {profile.firstName}</p>
              <p><strong>Last name:</strong> {profile.lastName}</p>
              <p><strong>Country:</strong> {profile.country}</p>
              <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
