import React from 'react'
import profiles from '../data/berlin.json'

function Facebook() {
  return (
    <div>
     {profiles.map( profiles => <Profile profiles={profiles} key={profiles.lastName} />)}
    </div>
  )
}

export default Facebook




function Profile({ profiles }) {
  return (
    <div className="d-flex flex-row mb-3 border border-1 border-dark m-3">
      <div>
        <img className="m-2" src={profiles.img} style={{ width: 150}} alt="ProfilePicture" />
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

