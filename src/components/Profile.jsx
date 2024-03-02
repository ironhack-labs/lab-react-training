import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Profile({firstName, lastName, country, img, isStudent, isFrom}) {

    return (
    <div className={!!isFrom ? "facebook-profile background-blue" : "facebook-profile"}>
        <img src={img} />
        <div className="facebook-info">
            <span><b>First Name: </b>{firstName}</span>
            <span><b>Last Name: </b>{lastName}</span>
            <span><b>Country: </b>{country}</span>
            <span><b>Type: </b>{isStudent ? "Student" : "Teacher"}</span>
        </div>
    </div>
  )
}
