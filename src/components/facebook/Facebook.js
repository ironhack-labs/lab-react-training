import React from 'react'
import data from "../../data/berlin.json"
import IdCard from '../id-card/IdCard'

function Facebook({ className }) {
  console.log(data)
  return (
    <div>
      {data.map((user) => (
          <div className={`container id-card my-2 gap-2 d-flex flex-row ${className} ms-n5`}>
            <img src={user.img} alt={user.firstName} className="image my-2"/>
            <div className="d-flex flex-column mt-2">
              <h5><b>First name: </b>{user.firstName}</h5>
              <h5><b>Last name: </b>{user.lastName}</h5>
              <h5><b>Country: </b>{user.country}</h5>
              <h5><b>Type: </b>{user.isStudent ? "Student" : "Teacher" }</h5>
            </div>
          </div>      
        )
      )}
    </div>
  )
}

IdCard.defaulProps = {
  className: ""
}

export default Facebook