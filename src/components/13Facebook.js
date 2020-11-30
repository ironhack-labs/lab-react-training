import React from 'react'
import profiles from '../data/berlin.json';

export default function FaceBookSimple(){
  return (
    <div>
      {profiles.map((profile, i) => (
        <div key={i} style={{border: '2px solid black', display:'flex', flexDirection:'row', marginBottom: '20px'}}>
          <div>
            <img src={profile.img} alt="" style={{height:'100px', margin: '5px'}}/>
          </div>
          <div style={{lineHeight: '2px'}}>
            <p><strong>First name: </strong> {profile.firstName}</p>
            <p><strong>Last name: </strong> {profile.lastName}</p>
            <p><strong>Country: </strong> {profile.country}</p>
            <p><strong>Type: </strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>
      ))}
    </div>
    
  )
}